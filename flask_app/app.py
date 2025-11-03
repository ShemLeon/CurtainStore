from flask import Flask, render_template, request, redirect, url_for, session, send_file
import pandas as pd
import os
from io import BytesIO

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Replace with a strong secret key

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        return redirect(request.url)
    if file and file.filename.endswith('.csv'):
        try:
            df = pd.read_csv(file)
            session['original_df'] = df.to_json()
            duplicates = df[df.duplicated(keep=False)]
            session['duplicates_df'] = duplicates.to_json()
            return render_template('results.html', 
                                 original_data=df.to_html(classes='table table-striped', index=False), 
                                 duplicate_data=duplicates.to_html(classes='table table-striped', index=False),
                                 has_duplicates=len(duplicates) > 0)
        except Exception as e:
            return f"Error processing file: {e}"
    return "Invalid file type. Please upload a CSV."

@app.route('/download_duplicates')
def download_duplicates():
    if 'duplicates_df' not in session:
        return redirect(url_for('index'))
    
    try:
        duplicates_df = pd.read_json(session['duplicates_df'])
        
        # Create a BytesIO object to write the CSV data
        output = BytesIO()
        duplicates_df.to_csv(output, index=False)
        output.seek(0)
        
        return send_file(output, 
                       mimetype='text/csv',
                       as_attachment=True,
                       download_name='duplicates.csv')
    except Exception as e:
        return f"Error downloading file: {e}"

if __name__ == '__main__':
    app.run(debug=True, port=5000)

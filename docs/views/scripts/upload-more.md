---
title: Flask 多文件上传
date: 2019-04-09
tags:
 - 
categories:
 - scripts
---


```python
import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from werkzeug import secure_filename
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['ALLOWED_EXTENSIONS'] = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
def allowed_file(filename):
  return '.' in filename and \
      filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']
@app.route('/')
def index():
  return render_template('index.html')
@app.route('/upload', methods=['POST'])
def upload():
  uploaded_files = request.files.getlist("file[]")
  filenames = []
  for file in uploaded_files:
    if file and allowed_file(file.filename):
      filename = secure_filename(file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
      filenames.append(filename)
  return render_template('upload.html', filenames=filenames)
 
@app.route('/uploads/<filename>')
def uploaded_file(filename):
  return send_from_directory(app.config['UPLOAD_FOLDER'],
                filename)
if __name__ == '__main__':
  app.run(
    host="0.0.0.0",
    port=int("80"),
    debug=True
  )
```
index.html
```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <link href="bootstrap/3.0.0/css/bootstrap.min.css"
  rel="stylesheet">
 </head>
 <body>
  <div class="container">
   <div class="header">
    <h3 class="text-muted">How To Upload a File.</h3>
   </div>
   <hr/>
   <div>
   <form action="upload" method="post" enctype="multipart/form-data">
   <input type="file" multiple="" name="file[]" class="span3" /><br/>
    <input type="submit" value="Upload" class="span2">
   </form>
   </div>
  </div>
 </body>
</html>
```
upload.html
```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <link href="bootstrap/3.0.0/css/bootstrap.min.css"
     rel="stylesheet">
 </head>
 <body>
  <div class="container">
   <div class="header">
    <h3 class="text-muted">Uploaded files</h3>
   </div>
   <hr/>
   <div>
   This is a list of the files you just uploaded, click on them to load/download them
   <ul>
    {% for file in filenames %}
     <li><a href="{{url_for('uploaded_file', filename=file)}}">{{file}}</a></li>
    {% endfor %}
   </ul>
   </div>
   <div class="header">
    <h3 class="text-muted">Code to manage a Upload</h3>
   </div>
   <hr/>  
<pre>
@app.route('/upload', methods=['POST'])
def upload():
  # Get the name of the uploaded file
  #file = request.files['file']
  uploaded_files = request.files.getlist("file[]")
  filenames = []
  for file in uploaded_files:
    # Check if the file is one of the allowed types/extensions
    if file and allowed_file(file.filename):
      # Make the filename safe, remove unsupported chars
      filename = secure_filename(file.filename)
      # Move the file form the temporal folder to the upload
      # folder we setup
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      filenames.append(filename)
      # Redirect the user to the uploaded_file route, which
      # will basicaly show on the browser the uploaded file
  # Load an html page with a link to each uploaded file
  return render_template('upload.html', filenames=filenames)
</pre>
   </div>
  </div>
 </body>
</html>
```

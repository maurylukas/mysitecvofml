# start of imports
from mycv import app
from flask import render_template, url_for
# end of imports

# homepage path
@app.route ('/')
def home ():
    return render_template('home.html')

# resume path
@app.route ('/resume')
def resume ():
    return render_template('resume.html')

# projects path
@app.route ('/projects')
def projects ():
    return render_template('projects.html')

# contact path
@app.route ('/contact')
def contact ():
    return render_template('contact.html')
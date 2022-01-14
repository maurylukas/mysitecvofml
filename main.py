# start of imports
from flask import Flask, render_template
# end of imports

# generating website
app = Flask (__name__)

# homepage path
@app.route ('/')
def home ():
    # Use a breakpoint in the code line below to debug your script.
    return render_template('home.html')  # Press Ctrl+F8 to toggle the breakpoint.


# running website
if __name__ == '__main__':
    app.run (debug = True)

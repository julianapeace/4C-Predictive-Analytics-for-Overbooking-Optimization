# 4C - Predictive Analytics for Overbooking Optimization
[![4C - Predictive Analytics for Overbooking Optimization](https://i.imgur.com/4br6Eb7.png)](https://youtu.be/XAs1HuBv4y4)

### Submission to [Homeaway](https://devpost.com/software/4c-predictive-analytics-for-overbooking-optimization) Homeaway Hackathon project.

- Predictive Overbooking Demo Video: https://youtu.be/XAs1HuBv4y4
- Fabric Demo Video: https://youtu.be/mivPSjEhxz0

# Inspiration
Each year, approximately 1 million guests are relocated due to overbooking. Walking guests costs the hotel industry an estimated $5 billion per year.

# What it does
4C is a cloud-based application that leverages predictive analytics to get actionable insights for optimizing overbookings by hotel sales managers. It relies on historical occupancy data, current & future reservations, variable room costs and walk costs to forecast the optimal rate of overbooking.

# How we built it
See architecture in gallery above

# Challenges we ran into
- Setting up authorization flow with 3rd-party hotel API
- Getting access to data & sort through it
- Narrow down problem scope
- Develop algorithm & data science to get problem insights

# Accomplishments that we're proud of
- Team-wide contributions where each member was able & willing to help in their field of expertise
- Fully-functional app that actually works
- Working data pipelines to ingest & analyze real data in real-time from 3rd party APIs.
- Rapid focus in defining problem so we can prioritize objectives, divide tasks, plan and execute in short timeframe
- Fantastic team chemistry

# What we learned
- The power of working in a multi-functional team
- The invaluable insights one can get from existing data
- What's next for 4C - Predictive Analytics for Overbooking Optimization
- Develop ability to input additional variables such as events and weather to algorithm to calculate cost and opportunity
- Give hotels ability to view data by day of week, reservation type, loyalty status and more
- Incorporate data from additional APIs to accurately forecast demand for similar properties
- Leverage more machine learning to optimize forecast for all variables.
------
# Built With
- django
- splunk
- snapshot-api
- oauth
- amazon-web-services
- amazon-ec2
- javascript
- jquery
- python
- ajax
- html5
- css3

# Setup Instructions

These instructions are from a complete fresh install. If your machine already has python3, pip, and pipenv installed, then skip to step 4.

1. Most macOS comes with Python installed. But to make sure that you have Python version 3.6 is installed, open a terminal and run the following command. `python3 --version`. If it returns a version number, then you have python installed. If you do not see a version number, enter `brew install python3`
2. Install pip with the command `sudo easy_install pip`. Pip is a package management system used to install and manage software packages written in Python.
3. Since we are using the latest version of Django, you will also need pipenv. Pipenv is a dependency manager and virtual environment tool. Install it with `pip install pipenv`
4. git clone the repository and cd into it. You should be in the directory /homeaway
5. In the command line, start a virtual environment with `pipenv shell`. You should see a wall of scrolling code while it is creating a virtual environment for the project in the current directory. While in development, you should always activate the virtual environment with this command. You deactivate with the command `deactivate`.
6. Install the dependencies with `pipenv install`. This will install the Django framework and all dependency packages in the pipfile. The pipfile and pipfile.lock is very similar to package.json for Javascript or Composer for PHP.
7. After the installations are complete, you will need to make a migration to apply changes. Use the command `pipenv run ./manage.py migrate`.
8. Start the app with `pipenv run ./manage.py runserver`.
9. If you see a `Starting development server at http://127.0.0.1:8000/`, then the server was successfully started and you may see the app at http://localhost:8000.  



### Using Django
- The following commands allow you to install/uninstall packages, create a super user account, and access the admin page.
- *Install packages with:* `pipenv install [package-name]`
- *Uninstall packages with:* `pipenv uninstall [package-name]`
- *Create a super user with:* `pipenv run ./manage.py createsuperuser` Enter a username, an email, and a password.
- *Access the admin page* at http://localhost:8000/admin. Login with your superuser account. This page gives you administrative privileges to manipulate users and permission groups.

Tokunize
Tokunize is a platform that democratizes real estate investments by offering fractional ownership through tokens. This guide will help you set up and run both the frontend and backend of the Tokunize project.

Table of Contents
    Prerequisites
    Frontend Setup
    Backend Setup
    Running the Project
    Prerequisites
    Before you begin, ensure you have the following installed on your machine:

Node.js (for the React frontend)
Python (for the Django backend)
Pipenv (for managing Python dependencies)


Frontend Setup
Navigate to the Frontend Directory
Open your terminal and navigate to the directory where your React frontend code is located. For example:


cd path/to/frontend
Install Dependencies

Make sure you have Node.js installed. Then, install the required npm packages:

npm install
Start the Frontend

Once the dependencies are installed, start the React development server:

npm start
This will launch the React app and you should be able to view it in your browser at http://localhost:3000.

Backend Setup
Install Python

Make sure you have Python installed. You can download Python from the official Python website.

Navigate to the Backend Directory
Open your terminal and navigate to the directory where your Django backend code is located. For example:


cd path/to/backend
Install Pipenv

If you haven't installed Pipenv, you can do so using pip:

pip install pipenv
Install Dependencies

With Pipenv installed, use it to install the necessary Python packages:


pipenv install
Activate the Pipenv Shell

Activate the virtual environment managed by Pipenv:
pipenv shell
Install Additional Requirements

Install the requirements.txt

pip install -r requirements.txt
Apply Migrations

Apply the Django migrations to set up your database:

python manage.py migrate
Run the Django Development Server

Start the Django server:

python manage.py runserver
The Django app should now be running at http://localhost:8000.

Running the Project
Start the Frontend

Follow the steps in the Frontend Setup to get the React application running.

Start the Backend

Follow the steps in the Backend Setup to start the Django server.

Access the Application

Open your browser and navigate to the React frontend URL (e.g., http://localhost:3000). Your frontend should be able to communicate with the backend running at http://localhost:8000.

Troubleshooting
Ensure all paths are correct and the necessary software is installed.
If you encounter issues with missing dependencies, check both package.json for frontend dependencies and Pipfile/requirements.txt for backend dependencies.


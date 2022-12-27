# Template2PDF

## About

Template2PDF is a web app that converts an HTML template with custom variables into a PDF.

My motivation comes from having to customize a template I made for cover letters. Whenever I am changing certain fields/placeholders, I have the troubles of:

1. forgetting to change the customized details (e.g. company name, position, address, etc.).
2. taking a long time to find the parts that are customizable and making sure that I didn't miss any.
3. accidentally removing or adding parts that are not meant to be customized.

Essentially, this web app:

1. enables users to upload an HTML file (with customized variables that looks like: `{{ variable }}`),
2. scans the file for the variables and list them in a form,
3. then users fill in the variables with actually content,
4. converts these information into a PDF.

## Demo Screenshots

Upload Page (with a file uploaded)
![Upload Page](<./demo_screenshots/Screenshot%20(339).png>)

Download Page + Form with Custom Variables in Input Fields
![Download Page](<./demo_screenshots/Screenshot%20(341).png>)

Resulting Output PDF
![Resulting PDF](<./demo_screenshots/Screenshot%20(342).png>)

## Technology

Frontend:

- React
- JavaScript
- HTML/CSS
- Material UI
- Axios
- React Router

Backend:

- Django
- Python
- Django Rest Framework
- Django CORS Headers
- xhtml2pdf
- SQLite (Built-in with Django)

## Running Locally

1. Download the dependencies:

   - Backend:

   ```
   django
   django-rest-framework
   django-cors-headers
   xhtml2pdf
   ```

   - Frontend:
     Run the command `npm install`

2. Open two terminals (one for backend and one for frontend)
3. There are some secret keys that you will have to create on your own:

   - DJANGO_SECRET_KEY (use Django's built-in get_random_secret_key() to generate one)
   - FE_DOMAIN (this is the url for your frontend server)
   - VITE_API_BASE (this is the url for your backend server)

4. For frontend, run `cd frontend && npm start`
5. For backend, run `cd backend && python manage.py runserver`
6. Go to the url of the frontend server to see the app!

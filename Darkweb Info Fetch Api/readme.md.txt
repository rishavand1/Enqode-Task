1. Install Required Packages
First, ensure that you have Python and Flask installed on your system. Open VS Code and create a virtual environment to manage dependencies.

a. Create a Virtual Environment
Open your terminal in VS Code and run:


python -m venv venv

b. Activate the Virtual Environment
For Windows:


venv\Scripts\activate
For macOS/Linux:


source venv/bin/activate

c. Install Flask and Requests
Now, install Flask and Requests using pip:


pip install Flask requests
2. Save Your Flask Code
Create a Python file, e.g., app.py, in VS Code and paste your Flask code into it. Be sure to replace 'YOUR_API_KEY' with your actual API key.

3. Run the Flask API
Once you've saved your code in api.py, run it in the terminal with:


python app.py
By default, Flask will run on http://127.0.0.1:5000/. If everything is set up correctly, you should see something like:


* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)

4. Test the API with Postman
a. Open Postman
Open Postman and click on the New button to create a new request.
Set the request method to POST.
In the URL field, enter http://127.0.0.1:5000/darkweb_search.
Go to the Body tab and select raw and JSON from the dropdown. Enter a JSON object in the body to test your API, e.g.:

{
    "term": "example search term"
}

b. Add API Key in Headers
Under the Headers section, add:

Key: x-key
Value: Your actual API key (replace YOUR_API_KEY).
You can also configure other headers as needed.

c. Send the Request
Click Send in Postman. If everything is working correctly, you should get a JSON response from the API.

5. Debugging Tips
If Flask isn't running on the default port, you can specify a different one with app.run(port=5001) or any other available port.
If you encounter any errors in VS Code, check the terminal for logs. Flask will print errors that can help with debugging.
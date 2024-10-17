To run the above Node.js backend in Visual Studio Code (VS Code), follow these steps:

Prerequisites:
Node.js and npm installed on your machine.

MongoDB installed locally or access to a MongoDB Atlas cluster.
Steps to Run the Project in VS Code:

1. Open VS Code and Create a New Project
Open VS Code.
Open the folder where you want to create your project by navigating to File → Open Folder and selecting your project folder (e.g., zero-trust-backend).
Open a new terminal in VS Code by going to Terminal → New Terminal or by pressing Ctrl + ` .

2. Initialize the Node.js Project
In the terminal, run:

npm init -y

This will generate a package.json file in your project.

3. Install Required Dependencies

In the terminal, run:


npm install express mongoose body-parser

This will install Express, Mongoose, and Body-Parser.


4. Set Up MongoDB
If you're running MongoDB locally:

Make sure MongoDB is installed and running on your machine.
You can start MongoDB by running:


mongod

If you're using MongoDB Atlas:

Sign in to MongoDB Atlas, create a free cluster, and get the connection string.

Replace the MongoDB connection string in the mongoose.connect method inside index.js:


mongoose.connect('your-mongodb-atlas-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

5. Run the Project in VS Code

In VS Code, open the terminal and make sure you're in your project directory.

Run the Node.js backend using:


node index.js
You should see the message Server running on http://localhost:3000 if the server starts successfully, along with a MongoDB connection message like MongoDB connected.

6. Test the API
Now you can test the API using Postman, cURL, or any HTTP client.

Submit Data (POST Request):

URL: http://localhost:3000/submit-score
Method: POST
Body (JSON):

{
    "averageShannonEntropyScore": 7.8,
    "firewallDetected": true,
    "DNSsecEnabled": true,
    "tlsVersion": "1.2",
    "certificateBitStrength": 2048,
    "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
    "openPortsDetected": 12
}

Retrieve Data (GET Request):

URL: http://localhost:3000/scores
Method: GET
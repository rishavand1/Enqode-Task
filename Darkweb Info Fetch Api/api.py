from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

API_KEY = 'YOUR_API_KEY'

@app.route('/darkweb_search', methods=['POST'])
def darkweb_search():
    data = request.json
    search_term = data.get('term')

    url = "https://2.intelx.io/intelligent/search"
    headers = {
        "x-key": API_KEY,
        "Content-Type": "application/json"
    }
    payload = {
        "term": search_term,
        "maxresults": 10,
        "media": 0,
        "terminate": [0, 1, 2, 3],
        "timeout": 20
    }

    response = requests.post(url, json=payload, headers=headers)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

from kafka_producer import KafkaSend

app = Flask(__name__) 
CORS(app, resources={r"/api/*": {"origins": "*"}})
api = Api(app) 

class Add(Resource):
    def post(self):
        data = request.get_json()
        kafka = KafkaSend()
        kafka.send("allClicks", data)
        print(data)
        return 200

api.add_resource(Add, '/api/send_click') 

  
if __name__ == '__main__': 
    app.run(debug = True) 







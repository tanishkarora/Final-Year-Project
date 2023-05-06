import pickle
from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
CORS(app) 

# Load the pickle model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

# Load the pickled OrdinalEncoder
with open('encoder.pkl', 'rb') as file:
    encoder = pickle.load(file)

@app.route('/submit', methods=['POST'])
def submit_values():
    values = request.json
    # Extract the 11 values from the submitted form data
    gender = values['gender']
    age = values['age']
    educationLevel = values['educationLevel']
    institutionType = values['institutionType']
    itStudent = values['itStudent']
    location = values['location']
    financialCondition = values['financialCondition']
    internetType = values['internetType']
    networkType = values['networkType']
    classDuration = values['classDuration']
    device = values['device']

    value7 = "Low"
    value12 = "No"
    value14 = "Low"


    cols = ['Gender', 'Age', 'Education Level', 'Institution Type', 'IT Student', 'Location', 'Load-shedding', 'Financial Condition', 'Internet Type', 'Network Type', 'Class Duration', 'Self Lms', 'Device', 'Adaptivity Level']
    data = [[gender, age, educationLevel, institutionType, itStudent, location, value7, financialCondition, internetType, networkType, classDuration, value12, device, value14]]

    df = pd.DataFrame(data, columns=cols)

    # Use the loaded encoder to transform the input values
    
    input_values_encoded = encoder.transform(df)

    # converting encoded values to pandas dataframe

    encoded_df = pd.DataFrame(input_values_encoded, columns=cols)
   
    # dropping the values not used for prediction but had to be used in encoder 

    encoded_df_final = encoded_df.drop(['Load-shedding', 'Self Lms', 'Adaptivity Level'], axis=1)
    
    # Perform prediction using the loaded model with the encoded input values
    
    prediction = model.predict(encoded_df_final)

    # You can further process the prediction, e.g. convert it to JSON or return it in a specific format
    # In this example, we simply return the prediction as a string
    return jsonify({'prediction': str(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)

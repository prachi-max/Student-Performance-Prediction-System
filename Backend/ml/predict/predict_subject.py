import pandas as pd
import joblib
from pymongo import MongoClient
from collections import defaultdict
import json
import os
# LOAD MODEL

model = joblib.load(
    'models/subject_model.pkl'
)

subject_encoder = joblib.load(
    'models/subject_encoder.pkl'
)

difficulty_encoder = joblib.load(
    'models/difficulty_encoder.pkl'
)

status_encoder = joblib.load(
    'models/status_encoder.pkl'
)

# CONNECT MONGODB

client = MongoClient(
    os.environ["MONGO_URI"]
)

db = client["test"]

tasks = list(
    db["tasks"].find()
)

# GROUP SUBJECTS

subject_map = defaultdict(list)

for task in tasks:

    subject_map[
        task['subject']
    ].append(task)

# FINAL RESULTS

results = []

for subject, items in subject_map.items():

    latest = items[-1]

    difficulty = latest['difficulty']

    status = latest['status']

    # ENCODE VALUES

    if subject not in subject_encoder.classes_:
     continue

    subject_encoded = subject_encoder.transform(
    [subject]
    )[0]

    difficulty_encoded = difficulty_encoder.transform(
        [difficulty]
    )[0]

    status_encoded = status_encoder.transform(
        [status]
    )[0]

    # CREATE DATAFRAME

    input_data = pd.DataFrame([[
        subject_encoded,
        difficulty_encoded,
        status_encoded
    ]], columns=[
        'subject',
        'difficulty',
        'status'
    ])

    # PREDICT

    prediction = model.predict(
        input_data
    )

    results.append({

        "subject": subject,

        "performance": round(
            prediction[0],
            2
        )

    })

# SORT DESCENDING

results.sort(

    key=lambda x:
    x['performance'],

    reverse=True

)

# RETURN JSON

print(
    json.dumps(results)
)
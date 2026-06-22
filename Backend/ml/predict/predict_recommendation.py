import pandas as pd
import joblib
from pymongo import MongoClient
import json
import os
# LOAD MODEL

model = joblib.load(
    'models/recommendation_model.pkl'
)

subject_encoder = joblib.load(
    'models/recommend_subject_encoder.pkl'
)

difficulty_encoder = joblib.load(
    'models/recommend_difficulty_encoder.pkl'
)

status_encoder = joblib.load(
    'models/recommend_status_encoder.pkl'
)

output_encoder = joblib.load(
    'models/recommend_output_encoder.pkl'
)

# MONGODB

client = MongoClient(
    os.environ["MONGO_URI"]
)

db = client["test"]
print("DATABASES:", client.list_database_names())
print("COLLECTIONS:", db.list_collection_names())
tasks = list(
    db["tasks"].find()
)
print("TOTAL TASKS FOUND:", len(tasks))
results = []

 
for task in tasks:

    try:

        subject =subject_encoder.transform([
            task['subject']
        ])[0]

        difficulty =difficulty_encoder.transform([
            task['difficulty']
        ])[0]

        status =status_encoder.transform([
            task['status']
        ])[0]

    except Exception as e:

        print("SKIPPED TASK:", task)
        print("ERROR:", str(e))

        continue
    
    performance = 50

    pending_tasks = len([
        t for t in tasks
        if t['status'] == 'Pending'
    ])

    completed_tasks = len([
        t for t in tasks
        if t['status'] == 'Completed'
    ])

    input_data = pd.DataFrame([[
        subject,
        difficulty,
        status,
        performance,
        pending_tasks,
        completed_tasks
    ]], columns=[
        'subject',
        'difficulty',
        'status',
        'performance',
        'pending_tasks',
        'completed_tasks'
    ])

    prediction =model.predict(input_data)

    recommendation =output_encoder.inverse_transform(
        prediction
    )[0]

    results.append({

        "subject":
        task['subject'],

        "recommendation":
        recommendation

    })

print(
    json.dumps(results)
)
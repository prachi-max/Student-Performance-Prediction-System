from pymongo import MongoClient

import pandas as pd

from sklearn.linear_model import LinearRegression

import joblib


# MongoDB connection
client = MongoClient(
    "mongodb://localhost:27017/"
)

db = client["studenttracker"]

tasks_collection = db["tasks"]


# Fetch tasks
tasks = list(tasks_collection.find())

df = pd.DataFrame(tasks)

print(df.head())


# Prevent empty issue
if df.empty:

    print("No task data found")

    exit()


# Feature engineering
completed = []
hard_tasks = []
scores = []


for i in range(len(df)):

    status = df.iloc[i]['status']

    difficulty = df.iloc[i]['difficulty']

    comp = 1 if status == "Completed" else 0

    hard = 1 if difficulty == "Hard" else 0

    completed.append(comp)

    hard_tasks.append(hard)

    # Fake score logic
    score = 50 + (comp * 30) - (hard * 10)

    scores.append(score)


# Create training dataframe
train_df = pd.DataFrame({

    "completed": completed,

    "hard_tasks": hard_tasks,

    "score": scores

})


# Features
X = train_df[[
    "completed",
    "hard_tasks"
]]

# Target
y = train_df["score"]


# Train model
model = LinearRegression()

model.fit(X, y)


# Save model
joblib.dump(
    model,
    "models/performance_model.pkl"
)

print("✅ Model trained successfully")
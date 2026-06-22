import pandas as pd

from sklearn.ensemble import RandomForestClassifier

from sklearn.preprocessing import LabelEncoder

import joblib

# LOAD DATASET

df = pd.read_csv(
    'dataset/task_recommendation.csv'
)

# ENCODERS

subject_encoder = LabelEncoder()

difficulty_encoder = LabelEncoder()

status_encoder = LabelEncoder()

recommendation_encoder = LabelEncoder()

# ENCODE

df['subject'] = subject_encoder.fit_transform(
    df['subject']
)

df['difficulty'] = difficulty_encoder.fit_transform(
    df['difficulty']
)

df['status'] = status_encoder.fit_transform(
    df['status']
)

df['recommendation'] =recommendation_encoder.fit_transform(
    df['recommendation']
)

# FEATURES

X = df[[
    'subject',
    'difficulty',
    'status',
    'performance',
    'pending_tasks',
    'completed_tasks'
]]

# TARGET

y = df['recommendation']

# MODEL

model = RandomForestClassifier()

# TRAIN

model.fit(X, y)

# SAVE

joblib.dump(
    model,
    'models/recommendation_model.pkl'
)

joblib.dump(
    subject_encoder,
    'models/recommend_subject_encoder.pkl'
)

joblib.dump(
    difficulty_encoder,
    'models/recommend_difficulty_encoder.pkl'
)

joblib.dump(
    status_encoder,
    'models/recommend_status_encoder.pkl'
)

joblib.dump(
    recommendation_encoder,
    'models/recommend_output_encoder.pkl'
)

print(
    "✅ Recommendation Model Trained"
)
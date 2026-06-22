import pandas as pd

from sklearn.ensemble import RandomForestRegressor

from sklearn.preprocessing import LabelEncoder

import joblib

# LOAD CSV

df = pd.read_csv(
    'dataset/subject_performance.csv'
)
# ENCODERS

subject_encoder = LabelEncoder()

difficulty_encoder = LabelEncoder()

status_encoder = LabelEncoder()

# ENCODE DATA

df['subject'] =subject_encoder.fit_transform(
    df['subject']
)

df['difficulty'] =difficulty_encoder.fit_transform(
    df['difficulty']
)

df['status'] =status_encoder.fit_transform(
    df['status']
)

# FEATURES

X = df[
    [
        'subject',
        'difficulty',
        'status'
    ]
]

# TARGET

y = df['performance']

# MODEL

model = RandomForestRegressor()

# TRAIN

model.fit(X, y)

# SAVE MODEL

joblib.dump(
    model,
    'models/subject_model.pkl'
)

# SAVE ENCODERS

joblib.dump(
    subject_encoder,
    'models/subject_encoder.pkl'
)

joblib.dump(
    difficulty_encoder,
    'models/difficulty_encoder.pkl'
)

joblib.dump(
    status_encoder,
    'models/status_encoder.pkl'
)

print("✅ Subject Performance Model Trained")
import joblib

model = joblib.load('models/performance_model.pkl')

def predict_score(features):
    return model.predict([features])[0]
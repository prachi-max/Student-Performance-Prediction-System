from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv   # FIX: was missing, MONGO_URI never loaded
import os

load_dotenv()   # must be before any os.environ access

from routes.recommendation_routes import recommendation_bp
from routes.prediction_routes import prediction_bp

app = Flask(__name__)

# FIX: CORS with explicit origins
CORS(app, origins=["http://localhost:4200", "http://localhost:3000"])

# FIX: Register blueprints BEFORE any route definitions
app.register_blueprint(prediction_bp)
app.register_blueprint(recommendation_bp)

@app.route('/')
def home():
    return "Flask ML API Running ✅"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port, debug=True)

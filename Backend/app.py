import os
from flask import Flask
from flask_cors import CORS          # ← import ONCE only
from dotenv import load_dotenv

load_dotenv()                        # must be before any os.environ access

from routes.prediction_routes import prediction_bp
from routes.recommendation_routes import recommendation_bp

app = Flask(__name__)

# ── CORS ───────────────────────────────────────────────────────────────────
CORS(app,
     origins=[
         "https://student-performance-prediction-system-dlgynglig.vercel.app",
         "http://localhost:3000"      # keep for local dev
     ],
     supports_credentials=True,
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
     allow_headers=["Content-Type", "Authorization"]
)

# ── BLUEPRINTS ─────────────────────────────────────────────────────────────
# Register AFTER CORS is applied
app.register_blueprint(prediction_bp)
app.register_blueprint(recommendation_bp)

# ── HEALTH CHECK ───────────────────────────────────────────────────────────
@app.route('/')
def home():
    return "Flask ML API Running ✅"

# ── ENTRY POINT ────────────────────────────────────────────────────────────
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port, debug=False)  # debug=False in production
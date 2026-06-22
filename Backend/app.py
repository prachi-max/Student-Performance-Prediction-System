import os
import re
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

from routes.prediction_routes import prediction_bp
from routes.recommendation_routes import recommendation_bp

app = Flask(__name__)

# ── CORS ───────────────────────────────────────────────────────────────────
def cors_origin_check(origin):
    if not origin:
        return False
    # Allow any vercel.app subdomain or localhost
    if re.search(r'vercel\.app$', origin):
        return True
    if origin == "http://localhost:3000":
        return True
    return False

CORS(app,
     origins=cors_origin_check,
     supports_credentials=True,
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
     allow_headers=["Content-Type", "Authorization"]
)

# ── BLUEPRINTS ─────────────────────────────────────────────────────────────
app.register_blueprint(prediction_bp)
app.register_blueprint(recommendation_bp)

# ── HEALTH CHECK ───────────────────────────────────────────────────────────
@app.route('/')
def home():
    return "Flask ML API Running ✅"

# ── ENTRY POINT ────────────────────────────────────────────────────────────
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port, debug=False)
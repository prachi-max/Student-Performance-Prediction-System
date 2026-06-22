import os
import subprocess
from flask import Blueprint, jsonify
from dotenv import load_dotenv
import json, sys

load_dotenv()

recommendation_bp = Blueprint('recommendation', __name__)

@recommendation_bp.route('/api/recommend-tasks', methods=['GET'])
def recommend_tasks():
    try:
        script_path = os.path.join(
            os.path.dirname(__file__),
            '../ml/predict/predict_recommendation.py'
        )
        result = subprocess.check_output(
            [sys.executable, script_path],
            stderr=subprocess.STDOUT,
            cwd=os.path.join(os.path.dirname(__file__), '..')
        )
        parsed = json.loads(result.decode('utf-8').strip())
        return jsonify({"result": parsed})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.output.decode('utf-8')}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

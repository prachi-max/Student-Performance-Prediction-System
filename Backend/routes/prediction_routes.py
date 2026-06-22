import os
from flask import Blueprint, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

prediction_bp = Blueprint('prediction', __name__)

# FIX: Function name matched decorator but had user_id in URL with no param in function signature
# FIX: Now actually queries MongoDB per user_id and computes performance
@prediction_bp.route('/predict-performance/<user_id>', methods=['GET'])
def predict_performance(user_id):   # <-- parameter name must match <user_id>
    try:
        client = MongoClient(os.environ["MONGO_URI"])
        db = client["test"]
        tasks = list(db["tasks"].find({"userId": user_id}))

        total_tasks = len(tasks)
        completed_tasks = len([t for t in tasks if t.get('status') == 'Completed'])
        pending_tasks = len([t for t in tasks if t.get('status') == 'Pending'])
        hard_tasks = len([t for t in tasks if t.get('difficulty') == 'Hard'])

        predicted_performance = round(
            (completed_tasks / total_tasks) * 100, 2
        ) if total_tasks > 0 else 0

        return jsonify({
            "completed_tasks": completed_tasks,
            "pending_tasks": pending_tasks,
            "hard_tasks": hard_tasks,
            "predicted_performance": predicted_performance,
            "total_tasks": total_tasks
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

from pymongo import MongoClient
from dotenv import load_dotenv   # FIX: was missing
import os

load_dotenv()

# FIX: MongoClient was imported twice
client = MongoClient(os.environ["MONGO_URI"])
db = client["test"]
tasks_collection = db["tasks"]
users_collection = db["users"]

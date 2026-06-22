import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PredictionService {

  // Flask/Python ML backend — needs its OWN Render service URL
  // Deploy app.py as a SEPARATE Render service and paste its URL here
  // e.g. "https://student-performance-ml-api.onrender.com"
  private pythonApi = "https://<YOUR-FLASK-RENDER-URL>";

  // Node/Express backend
  private nodeApi = "https://student-performance-prediction-system-1v50.onrender.com/api";

  constructor(private http: HttpClient) {}

  // Calls Flask ML service
  getPrediction(userId: string) {
    return this.http.get(`${this.pythonApi}/predict-performance/${userId}`);
  }

  // Calls Node backend prediction route
  getSubjectPrediction() {
    return this.http.get(`${this.nodeApi}/predict/subject-performance`);
  }
}
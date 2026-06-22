import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PredictionService {

  // Node/Express backend — subject performance
  private nodeApi = "https://student-performance-prediction-system-1v50.onrender.com/api";

  // Flask/Python ML backend — ML predictions
  private pythonApi = "https://student-performance-prediction-system-1-cggu.onrender.com";

  constructor(private http: HttpClient) {}

  getPrediction(userId: string) {
    return this.http.get(`${this.pythonApi}/predict-performance/${userId}`);
  }

  getSubjectPrediction() {
    return this.http.get(`${this.nodeApi}/predict/subject-performance`);
  }
}
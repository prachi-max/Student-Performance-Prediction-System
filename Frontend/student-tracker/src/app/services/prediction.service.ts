import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PredictionService {

  // FIX: Was pointing to Render URL — now points to local Flask server
 private apiUrl = "https://student-performance-prediction-system-1v50.onrender.com";

  constructor(private http: HttpClient) {}

  getPrediction(userId: string) {
    return this.http.get(`${this.apiUrl}/predict-performance/${userId}`);
  }
}

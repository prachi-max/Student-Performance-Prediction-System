import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {

  // Node/Express backend (Render) — handles tasks, streak
  private nodeApi = "https://student-performance-prediction-system-1-cggu.onrender.com";

  // Flask/Python ML backend — needs its OWN separate Render service
  // Deploy app.py separately and replace this URL
  private pythonApi = "https://<YOUR-FLASK-RENDER-URL>";

  constructor(private http: HttpClient) {}

  addTask(taskData: any) {
    return this.http.post(`${this.nodeApi}/tasks`, taskData);
  }

  getTasks(userId: string) {
    return this.http.get(`${this.nodeApi}/tasks/${userId}`);
  }

  updateTask(id: string, data: any) {
    return this.http.put(`${this.nodeApi}/tasks/${id}`, data);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.nodeApi}/tasks/${id}`);
  }

  // NOTE: On your backend, make sure the streak route is defined BEFORE
  // the generic /tasks/:id route, otherwise Express captures "streak" as an id
  getStreak(userId: string) {
    return this.http.get(`${this.nodeApi}/tasks/streak/${userId}`);
  }

  getSubjectPrediction() {
    return this.http.get(`${this.nodeApi}/predict/subject-performance`);
  }

  getAIRecommendations() {
    return this.http.get(`${this.pythonApi}/api/recommend-tasks`);
  }
}
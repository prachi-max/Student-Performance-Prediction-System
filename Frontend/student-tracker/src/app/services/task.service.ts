import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {

  // Node/Express backend — tasks, streak, subject prediction
  private nodeApi = "https://student-performance-prediction-system-1v50.onrender.com/api";

  // Flask/Python ML backend — AI recommendations
  private pythonApi = "https://student-performance-prediction-system-1-cggu.onrender.com";

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
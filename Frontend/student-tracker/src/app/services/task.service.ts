import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {

  // FIX: Was mixing hardcoded Render URLs with this.apiUrl — inconsistent
  // All URLs now use consistent local base URLs
  private nodeApi = "http://localhost:5000/api";
  private pythonApi = "http://localhost:5001";

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
  // Make sure this doesn't clash with getTasks route on backend
  return this.http.get(`${this.nodeApi}/tasks/streak/${userId}`);
}

  getSubjectPrediction() {
    return this.http.get(`${this.nodeApi}/predict/subject-performance`);
  }

  getAIRecommendations() {
    return this.http.get(`${this.pythonApi}/api/recommend-tasks`);
  }
  
}

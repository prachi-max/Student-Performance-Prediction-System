import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { PredictionService } from '../services/prediction.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  // FIX: CommonModule provides *ngFor, *ngIf, DatePipe — was missing in original
  imports: [CommonModule, RouterModule,],
  encapsulation: ViewEncapsulation.None,  
  templateUrl: './progress.html',
  styleUrls: ['./progress.css']
})
export class Progress implements OnInit {

  tasks: any[] = [];
  total = 0;
  completed = 0;
  pending = 0;
  percentage = 0;

  userName = '';
  userEmail = '';
  userInitial = '';

  currentPage = 0;
  tasksPerPage = 5;

  // FIX: isSpeaking kept but auto-speak on load removed (was annoying UX)
  isSpeaking = false;

  predictedPerformance = 0;
  completedTasks = 0;
  pendingTasks = 0;
  hardTasks = 0;

  currentStreak = 0;
  subjectPrediction: any[] = [];
  topSubject: any = null;
  averageSubject: any = null;
  weakSubject: any = null;
  aiRecommendations: any[] = [];

  showProgressPopup = false;
  // FIX: activeFilter for task filtering (buttons were dead)
  activeFilter: 'All' | 'Pending' | 'Completed' = 'All';

  today = new Date();

  constructor(
    private taskService: TaskService,
    private predictionService: PredictionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || '';
    this.userEmail = localStorage.getItem('userEmail') || '';
    this.userInitial = this.userName.charAt(0).toUpperCase();

    const userId = localStorage.getItem('userId');
    if (!userId) return;

    this.loadTasks();
    this.loadStreak(userId);
    this.loadPrediction(userId);
    this.loadSubjectPrediction();
    this.loadRecommendations();
  }

  // ── DATA LOADERS ────────────────────────────────────────────────────────

  loadTasks() {
    const userId = localStorage.getItem('userId')!;
    this.taskService.getTasks(userId).subscribe({
      next: (res: any) => {
        this.tasks = res;
        this.total = this.tasks.length;
        this.completed = this.tasks.filter(t => t.status === 'Completed').length;
        this.pending = this.tasks.filter(t => t.status === 'Pending').length;
        this.percentage = this.total > 0
          ? Math.round((this.completed / this.total) * 100)
          : 0;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Load tasks error:', err)
    });
  }

  loadStreak(userId: string) {
    this.taskService.getStreak(userId).subscribe({
      next: (data: any) => { this.currentStreak = data.currentStreak || 0; },
      error: (err) => console.error('Streak error:', err)
    });
  }

  loadPrediction(userId: string) {
    this.predictionService.getPrediction(userId).subscribe({
      next: (data: any) => {
        this.predictedPerformance = data.predicted_performance || 0;
        this.completedTasks = data.completed_tasks || 0;
        this.pendingTasks = data.pending_tasks || 0;
        this.hardTasks = data.hard_tasks || 0;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Prediction error:', err)
    });
  }

  loadSubjectPrediction() {
    this.taskService.getSubjectPrediction().subscribe({
      next: (data: any) => {
        const raw = data.result;
        this.subjectPrediction = Array.isArray(raw) ? raw :
          (typeof raw === 'string' ? JSON.parse(raw) : []);

        this.subjectPrediction.sort((a, b) => b.performance - a.performance);

        if (this.subjectPrediction.length > 0) {
          this.topSubject = this.subjectPrediction[0];
          this.weakSubject = this.subjectPrediction[this.subjectPrediction.length - 1];
          const mid = Math.floor(this.subjectPrediction.length / 2);
          this.averageSubject = this.subjectPrediction[mid];
        }
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Subject prediction error:', err)
    });
  }

  loadRecommendations() {
    this.taskService.getAIRecommendations().subscribe({
      next: (data: any) => {
        const raw = data.result;
        this.aiRecommendations = Array.isArray(raw) ? raw :
          (typeof raw === 'string' ? JSON.parse(raw) : []);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Recommendations error:', err)
    });
  }

  // ── TASK ACTIONS ─────────────────────────────────────────────────────────

  markComplete(task: any) {
    task.status = 'Completed';
    this.taskService.updateTask(task._id, task).subscribe({
      next: () => this.loadTasks(),
      error: (err) => console.error('Update error:', err)
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe({
      next: () => this.loadTasks(),
      error: (err) => console.error('Delete error:', err)
    });
  }

  // ── FILTER (FIX: was dead buttons with no handler) ──────────────────────
  setFilter(filter: 'All' | 'Pending' | 'Completed') {
    this.activeFilter = filter;
    this.currentPage = 0;
  }

  getFilteredTasks() {
    if (this.activeFilter === 'All') return this.tasks;
    return this.tasks.filter(t => t.status === this.activeFilter);
  }

  // ── PAGINATION ────────────────────────────────────────────────────────────
  getPaginatedTasks() {
    const filtered = this.getFilteredTasks();
    const start = this.currentPage * this.tasksPerPage;
    return filtered.slice(start, start + this.tasksPerPage);
  }

  getEndIndex() {
    return Math.min(
      (this.currentPage + 1) * this.tasksPerPage,
      this.getFilteredTasks().length
    );
  }

  nextTasks() {
    if ((this.currentPage + 1) * this.tasksPerPage < this.getFilteredTasks().length) {
      this.currentPage++;
    }
  }

  previousTasks() {
    if (this.currentPage > 0) this.currentPage--;
  }

  // ── UI HELPERS ────────────────────────────────────────────────────────────
  toggleProgressPopup() {
    this.showProgressPopup = !this.showProgressPopup;
  }

  getPerformanceStatus() {
    if (this.predictedPerformance >= 80) return 'Excellent Consistency 🚀';
    if (this.predictedPerformance >= 60) return 'Good Progress 🔥';
    return 'Needs Improvement 📚';
  }

  getMotivation() {
    if (this.predictedPerformance >= 80) return 'You are performing excellently! 🚀';
    if (this.predictedPerformance >= 60) return 'You are improving faster than last week! 🔥';
    return 'Keep learning daily and trust yourself 📚';
  }

  getSuggestions(): string[] {
    const s: string[] = [];
    if (this.pendingTasks > 0) s.push('Try to complete pending tasks earlier.');
    if (this.hardTasks > 0) s.push('Focus more on hard tasks.');
    if (this.predictedPerformance < 60) s.push('Maintain better consistency daily.');
    if (s.length === 0) s.push('Excellent work! Keep going 🚀');
    return s;
  }

  getAITasks() {
    if (this.predictedPerformance < 50) {
      return [
        { title: 'Revise weak subjects', subject: 'Study Improvement', status: 'Important' },
        { title: 'Complete pending tasks', subject: 'Productivity', status: 'High Priority' }
      ];
    }
    if (this.predictedPerformance < 80) {
      return [
        { title: 'Practice harder concepts', subject: 'Skill Growth', status: 'Recommended' },
        { title: 'Increase consistency', subject: 'Daily Study', status: 'Important' }
      ];
    }
    return [
      { title: 'Start advanced AI project', subject: 'Machine Learning', status: 'Advanced' },
      { title: 'Build portfolio project', subject: 'Career Growth', status: 'Recommended' }
    ];
  }

  // FIX: speakPerformanceReport now called only on user click, not auto on load
  speakPerformanceReport() {
    const message = `Welcome ${this.userName}. Your performance is ${this.predictedPerformance} percent. ${this.getSuggestions().join('. ')}. ${this.getMotivation()}`;
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = 'en-US';
    speech.onstart = () => { this.isSpeaking = true; this.cdr.detectChanges(); };
    speech.onend = () => { this.isSpeaking = false; this.cdr.detectChanges(); };
    speech.onerror = () => { this.isSpeaking = false; this.cdr.detectChanges(); };
    window.speechSynthesis.speak(speech);
  }

  stopSpeaking() {
    window.speechSynthesis.cancel();
    this.isSpeaking = false;
  }

  getSubjectStats() {
    const map: any = {};
    this.tasks.forEach(t => {
      if (!map[t.subject]) map[t.subject] = { total: 0, completed: 0 };
      map[t.subject].total++;
      if (t.status === 'Completed') map[t.subject].completed++;
    });
    return Object.entries(map).map(([subject, s]: any) => ({
      subject,
      total: s.total,
      completed: s.completed,
      rate: s.total > 0 ? Math.round((s.completed / s.total) * 100) : 0
    }));
  }
}

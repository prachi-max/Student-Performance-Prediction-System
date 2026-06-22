import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TaskService } from '../services/task.service';
import { PredictionService } from '../services/prediction.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],

  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

predictedPerformance:any;
topSubject:any;
averageSubject:any;
weakSubject:any;


aiRecommendations:any[] = [];
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,private predictionService: PredictionService,

  private taskService: TaskService,

  private cdr: ChangeDetectorRef
  ) {}

  startTracking() {

  if (!isPlatformBrowser(this.platformId)) {
    return;
  }

  const token = localStorage.getItem('token');

  if (token) {
    this.router.navigate(['/add-task']);
  } else {
    this.router.navigate(['/login']);
  }
}
  
ngOnInit() {

  if (!isPlatformBrowser(this.platformId)) {
    return;
  }

  const token = localStorage.getItem('token');

  // USER NOT LOGGED IN

  if (!token) {

    alert('Please login first');

    this.router.navigate(['/login']);

    return;
  }

  const userId = localStorage.getItem('userId');

  // PRODUCTIVITY

  this.predictionService
    .getPrediction(userId!)
    .subscribe((data:any) => {

      this.predictedPerformance =
        data.predicted_performance;

    });

  // SUBJECT ANALYTICS

  this.taskService
    .getSubjectPrediction()
    .subscribe((data:any) => {

      const subjects =

        typeof data.result === 'string'
          ? JSON.parse(data.result)
          : (data.result || data);

      subjects.sort(
        (a:any,b:any) =>
          b.performance -
          a.performance
      );

      this.topSubject =
        subjects[0];

      this.weakSubject =
        subjects[
          subjects.length - 1
        ];

      const middleIndex =
        Math.floor(
          subjects.length / 2
        );

      this.averageSubject =
        subjects[middleIndex];

      setTimeout(() => {

        this.cdr.detectChanges();

      }, 0);

    });

    
  // AI RECOMMENDATIONS

  this.taskService
    .getAIRecommendations()
    .subscribe((data:any) => {

      this.aiRecommendations =

        typeof data.result === 'string'
          ? JSON.parse(data.result)
          : data.result;

      this.cdr.detectChanges();

    });

}
  goToArticles() {
    this.router.navigate(['/articles']);
  }

  showCalendar = false;

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  onDateSelect(date: Date) {
    console.log("Selected:", date);
  }

  standards = [
    { name: "1st Standard", desc: "Basics Learning", image: "assets/assets1.png" },
    { name: "2nd Standard", desc: "Early Skills", image: "assets/assets2.png" },
    { name: "3rd Standard", desc: "Foundation", image: "assets/assets3.png" },
    { name: "4th Standard", desc: "Concept Growth", image: "assets/assets4.png" },
    { name: "5th Standard", desc: "Core Subjects", image: "assets/assets5.png" },
    { name: "6th Standard", desc: "Advanced Basics", image: "assets/assets6.png" },
    { name: "7th Standard", desc: "Skill Building", image: "assets/assets7.png" },
    { name: "8th Standard", desc: "Strong Base", image: "assets/assets8.png" },
    { name: "9th Standard", desc: "Concept Focus", image: "assets/assets9.png" },
    { name: "10th Standard", desc: "Board Prep", image: "assets/assets10.png" },
    { name: "11th Standard", desc: "Stream Start", image: "assets/assets11.png" },
    { name: "12th Standard", desc: "Career Ready", image: "assets/assets12.png" }
  ];

  
}
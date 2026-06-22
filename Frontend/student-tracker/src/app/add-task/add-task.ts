
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTask {

  
  isLoading = false;
  showSuccess = false;

  task: any = {
    subject: '',
    title: '',
    description: '',
    difficulty: '',
    deadline: ''
  };

  constructor(private taskService: TaskService, private router: Router) {}
addTask() {

  this.isLoading = true;

  const taskData = {

    userId: localStorage.getItem('userId'),

    subject: this.task.subject,

    title: this.task.title,

    description: this.task.description,

    difficulty: this.task.difficulty,

    deadline: this.task.deadline,

    status: "Pending"

  };

  console.log(taskData);

  this.taskService.addTask(taskData).subscribe({

    next: () => {

      this.isLoading = false;

      this.showSuccess = true;

      console.log("✅ Task Added");

      // Reset form
      this.task = {
        subject: '',
        title: '',
        description: '',
        difficulty: '',
        deadline: ''
      };

      // Redirect to progress
      setTimeout(() => {

        this.router.navigate(['/progress']);

      }, 1000);

    },

    error: (err) => {

      this.isLoading = false;

      console.log("❌ ERROR:", err);

    }

  });

}
}
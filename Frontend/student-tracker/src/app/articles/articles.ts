import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrls: ['./articles.css']
})
export class Articles {
openArticle(article: any) {
  console.log("Opening article:", article);
}
  topics = [
  'Technology', 'Travel', 'Sport', 'Business',
  'Management', 'Trends', 'Startups', 'News'
];
selectedTopic: string = '';

selectTopic(topic: string) {
  this.selectedTopic = topic;
}
articles = [
  {
    title: "How Tech Shapes Future",
    desc: "Discver how technology is evolving...",
    expanded: false,
    saved: false,
    liked: false
  },
  {
    title: "Travel Trends 2026",
    desc: "Work from anywhere revolution...",
    expanded: false
  },
  {
    title: "Feature Career Paths",
    desc: "Automation changing industries...",
    expanded: false
  },
  {
    title: "feature best career",
    desc: "Scaling your business fast...",
    expanded: false
  },
  {
    title: "Digital Marketing",
    desc: "Latest strategies explained...",
    expanded: false
  },
   {
    title: "How Can Choose the Right Career Path",
    desc: "Latest strategies explained...",
    expanded: false

  }
  
];


}
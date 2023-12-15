import { Component } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
  card_content = [
    { 
      title: "What is Frontend Mentor, and how will it help me?",
      content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      title: "Is Frontend Mentor free?",
      content: "Yes"
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      content: "Yes"
    },
    {
      title: "How can I get help if I'm stuck on a challenge?",
      content: "Ask online!"
    }
  ]
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tab',
  templateUrl: './card-tab.component.html',
  styleUrls: ['./card-tab.component.css']
})
export class CardTabComponent {
  @Input() data: {title: string, content: string} = {title: '', content: ''};
}

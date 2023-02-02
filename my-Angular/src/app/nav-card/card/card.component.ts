import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title: string = 'Get Inbox value value'
  disVal: string = "";
  getValue(val: string) {
    console.warn(val);
    this.disVal = val

  }
}

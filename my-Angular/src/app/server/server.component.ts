import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnChanges {
  rating: number = 5;
  cropWidth: number = 110;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 110 / 5;
  }
}

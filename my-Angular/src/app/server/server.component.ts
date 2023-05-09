import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent  {
  // item: any;
  constructor(private el : ElementRef){
  }
@HostListener('click')
nextFun() {
  // console.log(this.el.nativeElement)
let elm = this.el.nativeElement.parentElement.parentElement.children[0];
let item = elm.getElementsByClassName('item');
elm.append(item[0]);
}
prev() {
  // console.log(this.el.nativeElement)
let elm = this.el.nativeElement.parentElement.parentElement.children[0];
let item = elm.getElementsByClassName('item');
elm.prepend(item[item.length - 1]);
}

}

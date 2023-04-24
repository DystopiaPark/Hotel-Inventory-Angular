import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root', // html tag, "view"
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template!</h1>
  //   <p>Angular is Awesome</p> `,
  styleUrls: ['./app.component.scss'],
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    console.log((this.name.nativeElement.innerText = 'Hilton Hotel'));
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}

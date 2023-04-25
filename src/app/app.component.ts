import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

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

  constructor(@Optional() private loggerService: LoggerService) {}

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innertext = 'Hilton Hotel';
    console.log((this.name.nativeElement.innerText = 'Hilton Hotel'));
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}

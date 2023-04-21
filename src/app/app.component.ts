import { Component } from '@angular/core';

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
export class AppComponent {
  title = 'hotelinventoryapp';
}

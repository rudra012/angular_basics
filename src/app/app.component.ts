import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rudra_Project';
  first_name = 'Rudra';
  last_name = 'Shailesh';
  firstName: string = "Shailesh";
  lastName:string = "Rudra";
  products = ["Mobile", "Laptop", "Mouse", ];
  myFunction(): void { 
    alert('Show alert!'); 
  } 
}

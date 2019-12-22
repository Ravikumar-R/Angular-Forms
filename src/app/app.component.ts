import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form-with-bootstrap';
  employeeDetails = new Employee('Ravi', 'kumar', 'ravi@example.com', 29, 9876543210);
  onSubmit() {
    console.log(this.employeeDetails);
  }
}

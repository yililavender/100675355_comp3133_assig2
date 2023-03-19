import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  first_name: string = "";
  last_name: string = "";
  gender: string = "";
  salary: number = 0;
  email: string = "";

}

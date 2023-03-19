import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  employees = [{
      id: 1,
      first_name: "Winnie",
      last_name: "ThePool",
      gender: "Female",
      salary: 0,
    }];
    constructor(private router: Router) {}
    handleDelete(employeeId: number) {
        console.log(employeeId)
  }
  
  handleEdit(employee: any) {
    console.log(employee);
    this.router.navigate(['/employee/edit'], {state: {data: employee}});
  }
  handleView(employee: any) {
    console.log(employee);
    this.router.navigate(['/employee'], {state: {data: employee}});
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Register';
  first_name: string = "";
  last_name: string = "";
  gender: string = "";
  salary: number = 0; 
  email: string = "";
  password: string = "";

  handleSignup() {
      console.log("Email: " + this.email + " Password: " + this.password);
  }

}

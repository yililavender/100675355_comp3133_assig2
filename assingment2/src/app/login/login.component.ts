import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  email: string = "";
  password: string = "";

  handleLogin() {
      console.log("Email: " + this.email + " Password: " + this.password);
  }
  

}

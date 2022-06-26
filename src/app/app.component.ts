import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveFormOne';

  loginForm = new FormGroup({
    user: new FormControl('peter'),
    password: new FormControl('123@abc')

  })
  loginUser()   
  {
    console.warn(this.loginForm.value)

  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
//Import the dummy-users file in the app.component.ts file in order to use the file contents to be exposed and accesible to the app.component.html file
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //Finish exposing the DUMMY_USERS content by setting it to a property
  users = DUMMY_USERS;

}

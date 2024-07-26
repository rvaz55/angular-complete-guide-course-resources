import { Component } from '@angular/core';
//Import the dummy-users.ts file
import { DUMMY_USERS } from '../dummy-users';

//Create function that picks a random number in index
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//Note: 'var' or 'const' were not needed to delcare the 'selectedUser' variable
  selectedUser = DUMMY_USERS[randomIndex];

}

import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //The 'imagePath' will only be updated if an update is made to 'selectedUser' first
  selectedUser = signal( DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar );


  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //The 'set' function can be used to change the value of a signal
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

}



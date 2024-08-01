//Import the Input decortator
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Assign a 'type' to the avatar property
  //Then get around the 'no initial value set' err msg by appending ! to end of property
  //The exclamation tells Angular that this value will be set at a later time (run-time) outside the component's ts file
  @Input() avatar!: string;
  @Input() name!: string;

  //Add in the getter for the imagePath
  //Then udpate the user's html file
  get imagePath(){
    return 'assets/users/'+ this.avatar;
  }

  onSelectUser(){

  }

}



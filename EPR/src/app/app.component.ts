import { Component,OnInit } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

//test data
import { UserService } from './services/user.service';
import { PetService } from './services/pet.service';
import { User } from './classes/user';
import { Pet } from './classes/pet'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService,
              private petService: PetService){}
  title = 'EPR - Emergency Pet Rescue';

  public users: User[];
  public pets: Pet[];

  ngOnIt(){
    
  }

  getUserData(){
    this.userService.getAllUsers()
    .subscribe((data) => {
      this.users = data;
    });
  }

  getPetData(){
    this.petService.getAllPets()
    .subscribe((data)=> {
      this.pets = data;
    })
  }

}

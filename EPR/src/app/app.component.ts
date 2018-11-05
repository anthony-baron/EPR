import { Component,OnInit } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

//test data
import { UserService } from './services/user.service';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService){}
  title = 'EPR';

  public users: User[];

  ngOnIt(){
    
  }

  getData(){
    this.userService.getAllUsers()
    .subscribe((data) => {
      this.users = data;
    });
    console.log('I am users', this.users);
  }
}

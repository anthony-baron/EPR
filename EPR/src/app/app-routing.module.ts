import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'userCreate', component: UserCreateComponent },
 
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    exports: [ RouterModule ]
  })

  export class AppRoutingModule  { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import {UserdetailsComponent} from './userdetails/userdetails.component'
import { UserdetaillistComponent } from './userdetaillist/userdetaillist.component';


const routes: Routes = [ 
  {path:'', component: LoginComponent},


  {path:'layout', component: LayoutComponent,
  children: [
    {
      path: 'child-a', // child route path
      component: UsersComponent, // child route component that the router renders
    }
    
  ]
},

  {path:'users', component: UsersComponent},

  {path:'admin', component: AdminComponent,
  children: [
    {
      path: 'child-a', // child route path
      component: UsersComponent, // child route component that the router renders
    },
    {
      path: 'child-b', // child route path
      component: UserdetailsComponent, // child route component that the router renders
    },
    {
      path: 'child-c', // child route path
      component: UserdetaillistComponent, // child route component that the router renders
    }
  ]
  

}



];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LayoutComponent,LoginComponent]

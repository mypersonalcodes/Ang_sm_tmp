import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UsersComponent } from './users/users.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdetaillistComponent } from './userdetaillist/userdetaillist.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UsersComponent,
    AdminComponent,
    UserdetailsComponent,
    UserdetaillistComponent   
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    RouterModule,
    PerfectScrollbarModule,
    MatStepperModule,
    MatTableModule,
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserdetailsService} from 'src/app/shared/userdetails.service'
import { userdetails } from '../shared/user-details.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.sass']
})
export class UserdetailsComponent implements OnInit {

  tempList=[
    {a: 1, name: 'Zahid', username: 'Zahid21', department: 'science',email:'asd@asd.com'},
    {position: 2, name: 'alex', username: 'alex4', department: 'arts',email:'sda@gmail.com'},
    {position: 3, name: 'sony', username: 'sony9', department: 'philosophy',email:'sda@gmail.com'},
    {position: 4, name: 'david', username: 'david9', department: 'science',email:'sda@gmail.com'},
    {position: 5, name: 'harry', username: 'harr', department: 'science',email:'sda@gmail.com'},
  ];

  constructor(public service:UserdetailsService) { }

  ngOnInit(): void {
    this.service.LoadList(); //loading the list while in this component
  }

  OnSubmit(form:NgForm){
    this.service.postUserDetails().subscribe(
      res=>{
        this.resetForm(form);
      },
      err=>{console.log(err);}       
    );
  }


  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new userdetails();

  }

}

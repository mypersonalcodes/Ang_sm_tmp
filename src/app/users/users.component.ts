import { Component, OnInit } from '@angular/core';




export interface PeriodicElement {
  position: number;
  name: string;
  username:string;
  email: string;
  department: string;
 
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Zahid', username: 'Zahid21', department: 'science',email:'asd@asd.com'},
  {position: 2, name: 'alex', username: 'alex4', department: 'arts',email:'sda@gmail.com'},
  {position: 3, name: 'sony', username: 'sony9', department: 'philosophy',email:'sda@gmail.com'},
  {position: 4, name: 'david', username: 'david9', department: 'science',email:'sda@gmail.com'},
  {position: 5, name: 'harry', username: 'harr', department: 'science',email:'sda@gmail.com'},

];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

 

  displayedColumns: string[] = ['position', 'name', 'username','email', 'department'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}

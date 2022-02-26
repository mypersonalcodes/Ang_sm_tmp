import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../shared/userdetails.service';

@Component({
  selector: 'app-userdetaillist',
  templateUrl: './userdetaillist.component.html',
  styleUrls: ['./userdetaillist.component.sass']
})
export class UserdetaillistComponent implements OnInit {

  constructor(public ser:UserdetailsService) { }

  ngOnInit(): void {
    this.ser.LoadList();
    

  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {userdetails} from './user-details.model'


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http:HttpClient) { }

  formData: userdetails = new userdetails();
  List: userdetails[];  

  readonly Baseurl='https://localhost:44381/api/users'
  postUserDetails(){
    return this.http.post(this.Baseurl,this.formData);
  }

  LoadList(){
    this.http.get(this.Baseurl)
    .toPromise()
    .then(res =>
      this.List=res as userdetails[]);

    // .then(res => {
    //   console.log(res)
    // });

  }
}

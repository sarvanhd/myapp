import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noOfUsers:number = 0;
  constructor() { }

  ngOnInit() {
  }

  setUsers(componentReference) {
    if (componentReference.userCount) {
    componentReference.userCount.subscribe((data) => {
      this.noOfUsers = data;
      // Will receive the data from child here 
   })
  }
  }

}

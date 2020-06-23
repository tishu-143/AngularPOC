import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

  public name = "Tishant";
  public myid = "testid";
  public isdisabled = false;
  public myname = "Tishant";
  public color = "orange";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }
}

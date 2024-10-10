import { Component } from '@angular/core';
import { Book } from '../book';

class ABC {
  constructor(){
    console.log("ABC is called");
  }
  show(){
    console.log("ABC method called");
  }
}
@Component({
  selector: '.app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  preserveWhitespaces:true,
  viewProviders:[ABC,Book]
})
export class EmployeeComponent {
  constructor(private abc:ABC,book:Book){
    // console.log("EmployeeComponent is called");
    abc.show();
  }
}


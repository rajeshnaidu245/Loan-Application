import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  title="checking the image";
  myimage:string="assets/images/background image.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  message:string;
  constructor(http: Http) {
      http.get(`http://localhost:3000/`).subscribe(response => this.message = response.text());
  }
  ngOnInit() {}

}

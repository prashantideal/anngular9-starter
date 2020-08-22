import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorized-user-layout',
  templateUrl: './authorized-user-layout.component.html',
  styleUrls: ['./authorized-user-layout.component.scss']
})
export class AuthorizedUserLayoutComponent implements OnInit {

  isExpanded = true;

  public now: Date = new Date();

  constructor() {
      // setInterval(() => {
      //   this.now = new Date();
      // }, 1);
  }

  ngOnInit(): void {
  }

}

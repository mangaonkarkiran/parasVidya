import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-director-desk',
  templateUrl: './director-desk.component.html',
  styleUrls: ['./director-desk.component.scss']
})
export class DirectorDeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

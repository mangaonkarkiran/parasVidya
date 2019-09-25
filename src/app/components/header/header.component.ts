import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  title:string = 'Paras Vidhya Vihar';
  navbarOpen = false;
  public clicked = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit() {   
  }
 
  clickedInside($event: Event){
    // $event.preventDefault();
    //$event.stopPropagation();  // <- that will stop propagation on lower layers
    this.navbarOpen = false;
   // this.clicked = true;  
  }

  @HostListener('document:click', ['$event']) clickedOutside($event){
    // here you can hide your menu
    // if (this.clicked) {
    //   this.navbarOpen = !this.navbarOpen;
    //   this.clicked = false;
		// }
  }
 
}

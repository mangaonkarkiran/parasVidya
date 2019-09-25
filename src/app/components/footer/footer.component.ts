import {Inject, Component, OnInit, ViewChild} from '@angular/core';

import {DOCUMENT} from '@angular/common';
import {WindowRefService} from 'src/app/core/services/window-ref.service';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$';
  // phonePattern = '^[0-9]+$';
  // namePattern = '^[a-zA-Z]+$';

  // @ViewChild('contactUsForm') myForm;

  constructor(
    public windowRef: WindowRefService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  isscrollShow: boolean = false;

  ngOnInit() {}

  getscrollToTop() {
    this.document.body.scrollTop > 200 ||
    this.document.documentElement.scrollTop > 200
      ? (this.isscrollShow = true)
      : (this.isscrollShow = false);
  }

  eventSubscription = fromEvent(
    this.windowRef.nativeWindow,
    'scroll'
  ).subscribe(e => {
    this.getscrollToTop();
  });

  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
    this.isscrollShow = false;
  }

  // onSubmit(){
  //   console.log("Testing");
  //   this.myForm.reset();

  // }

  // reset(){
  //   this.myForm.reset();

  // }

  // closeModal(){
  //   this.myForm.reset();
  // }

  scope_Research: any[] = [
    // {
    //   link: 'Events',
    //   navLink: 'events',
    // },
    // {
    //   link: 'Gallery',
    //   navLink: 'gallery',
    // },
    // {
    //   link: 'Career',
    //   navLink: 'careers',
    // },
    // {
    //   link: 'Awards',
    //   navLink: '#',
    // },
  
  //   {
  //     link: 'Admission',
  //     navLink: 'academics/admissions',
  //   },
  //   {
  //     link: 'Contact Us',
  //     navLink: '#',
  //   },
  //   {
  //     link: 'Student Document Verification',
  //     navLink: '#',
  //   },
  //   {
  //     link: 'Grievance Redressal',
  //     href:'/assets/docs/grievance-redressal.pdf',
  //     target:'_blank'
  //   }
    
   ];
}

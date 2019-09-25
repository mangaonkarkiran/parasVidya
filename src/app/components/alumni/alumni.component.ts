import { IAlumni } from './../models/alumni';
import { Component, OnInit,ViewChild } from '@angular/core';
import { AlertService } from '../db-service/alert.service'


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  alumni:IAlumni = {
    fname: '',
    lname:'',
    email: '',
    class:''
    
  }

  captchvalidate = false;
  emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$';
  @ViewChild('alumniForm') myForm;
  constructor(private alert: AlertService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    if (captchaResponse != null) {
      this.captchvalidate = true;

    }
  }

  onSubmit() {

    if (this.captchvalidate) {
      console.log("Success");
      this.alert.success('Thank you!! We have received your message and will be in touch soon.');
    }
    else {
      console.log("Inside else");
      this.captchvalidate = false;
      this.alert.error('Please confirm that you are not a Robot');
    }
  }//End onSubmit


}

import { Component, OnInit,ViewChild } from '@angular/core';
import { IContactUs } from '../models/contactus';
import { AlertService } from '../db-service/alert.service';


declare var grecaptcha: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  captchvalidate = false;
  emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$';
  @ViewChild('contactForm') myForm;


  contactus: IContactUs = {
    fname: '',
    lname:'',
    email: '',
    subject: '',
    message: ''
  };


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

//   refresh(): void {
//     window.location.reload();
// }

}

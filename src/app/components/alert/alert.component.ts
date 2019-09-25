import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { AlertService } from '../db-service/alert.service';
import { Observable,timer } from 'rxjs';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit,OnDestroy {

  private subscription: Subscription;
  message: any;
  public showloader: boolean = false;
  private timer: Observable<any>;
  constructor(private alertService: AlertService) { 
    this.showloader   = true;
    
        this.timer = timer(5000); // 5000 millisecond means 5 seconds
        this.subscription = this.timer.subscribe(() => {
            // set showloader to false to hide loading div from view after 5 seconds
            this.showloader = false;
            this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
        });
  }

  public ngOnInit() {
    // call this setTimer method when you want to set timer
    this.setTimer();
  }

public setTimer(){

    // set showloader to true to show loading div on view
   
  }

ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
}

}

import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../db-service/fbService';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  circularItems: Array<any>;
  eventsItems: Array<any>;
  newsItems: Array<any>;


  constructor(private fbService: FireBaseService) { 
    
  }

  ngOnInit() {

    this.fbService.getCircular()
    .subscribe(result => {
      this.circularItems = result;
    })


    this.fbService.getEvents()
    .subscribe(result => {
      this.eventsItems = result;
    })

    this.fbService.getNews()
    .subscribe(result => {
      this.newsItems = result;
    })


  }//End ngOnInit


  cusDate(){
    for( let i=0;i<=this.circularItems.length;i++){
      console.log("Dates are"   );
    }
  }


}

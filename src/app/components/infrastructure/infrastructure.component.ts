import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {

  public _album: any = [];


  constructor(public _lightbox: Lightbox) { 
    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/infrastructure' + i + '.jpg';
      // console.log("src is " + src);
      // const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/infrastructure' + i + '.jpg';
      const album = {
         src: src,
        //  caption: caption,
         thumb: thumb
      };
 
      this._album.push(album);
   }
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }



  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}

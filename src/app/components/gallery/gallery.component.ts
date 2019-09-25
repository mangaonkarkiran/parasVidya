import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public _album: any = [];

  
  constructor(public _lightbox: Lightbox ) {

    for (let i = 1; i <= 4; i++) {
      const src = '../../../assets/images/lightbox' + i + '.jpg';
      // console.log("src is " + src);
      // const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/lightbox' + i + '.jpg';
      const album = {
         src: src,
        //  caption: caption,
         thumb: thumb
      };
 
      this._album.push(album);
   }

  }//End constructor

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit() {
    
  }

 


}

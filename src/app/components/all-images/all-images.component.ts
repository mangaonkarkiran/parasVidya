import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.scss']
})
export class AllImagesComponent implements OnInit {

  public _album: any = [];

  constructor(public _lightbox: Lightbox) {
    for (let i = 1; i <= 9; i++) {
      const src = '../../../assets/images/allimages/all' + i + '.jpg';
      // console.log("src is " + src);
      // const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/allimages/all' + i + '.jpg';
      const album = {
        src: src,
        // caption: caption,
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

import {Component, OnInit} from '@angular/core';
import {EmbedVideoService} from 'ngx-embed-video';

@Component({
  selector: 'app-academic-structure',
  templateUrl: './academic-structure.component.html',
  styleUrls: ['./academic-structure.component.scss'],
})
export class AcademicStructureComponent implements OnInit {
  yt_iframe_html: any;
  youtubeUrl = 'https://www.youtube.com/watch?v=UdEgThRisps';

  constructor(public embedService: EmbedVideoService) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl, {
      attr: {width: "100%", height: 200},
    });
  }

  ngOnInit() {}
}

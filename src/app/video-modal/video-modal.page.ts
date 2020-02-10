import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.page.html',
  styleUrls: ['./video-modal.page.scss'],
})
export class VideoModalPage implements OnInit {

    private que: any = [];
		    public allList:any =[];

  constructor(private route: ActivatedRoute) { 
	this.allList=[{
      		video:'first video',
      		source:'/assets/GSK_Our_story.mp4',
      		description:'blabla1',
      		id:1
   		 },{
      		video:'Secound Video',
      		source:'/assets/Kurgan.mp4',
      		description:'blabla1',
      		id:2
   		 },{
      		video:'Third Video',
      		source:'/assets/GSK_Our_story.mp4',
      		description:'blabla1',
      		id:3
    		}];
	 this.que = this.route.snapshot.paramMap.get('id');
	 console.log(this.que)

	
  }

  ngOnInit() {
  }

}

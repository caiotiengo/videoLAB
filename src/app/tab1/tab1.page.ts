import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import {ElementRef, ViewChild} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {VideoModalPage} from '../video-modal/video-modal.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
		likes = 0;
		likes2: number;
		LikeValue:number;
		LikeValueMore:number;

		timeNow
		timeNow2
		tempo
		saveTime
		isHidden2 = true;
		isHidden1 = false;
		isHidden3 = false;
		isHidden4 = true;
		    public allList:any =[];

		@ViewChild('video', {static: false}) video: ElementRef;


  constructor(private storage: Storage,private router: Router,public modalController: ModalController, private network: Network) {

		  			this.storage.set('time', new Date().getMinutes());
		this.allList=[{
      		video:'first video',
      		source:'/assets/GSK_Our_story.mp4',
      		description:'blabla1',
      		id:1
   		 },{
      		video:'Secound Video',
      		source:'/assets/GSK_Our_story.mp4',
      		description:'blabla1',
      		id:2
   		 },{
      		video:'Third Video',
      		source:'/assets/GSK_Our_story.mp4',
      		description:'blabla1',
      		id:3
    		}];


  	if("there's internet connection"){
  		// Show videos and save videos from web
  	}else{
  		// Show offline videos
  	}
  }
  playVideo(){
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    mainVideo.src = "/assets/GSK_Our_story.mp4";
    mainVideo.play();
   
 }
 pauseVideo(){
 	 let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    mainVideo.src = "/assets/GSK_Our_story.mp4";
    mainVideo.load();
    mainVideo.paused ? mainVideo.pause() : mainVideo.play();
    
 }

async moDal() {
    const modal = await this.modalController.create({
      component: VideoModalPage
    });
    return await modal.present().then(() =>{
    });
  }
  	salvaCacheReal(){
  		setTimeout(()=>{

			this.storage.get('time').then((val) => {
				this.saveTime = val
				this.LikeValueMore = this.likes;
				this.storage.set('like', this.LikeValueMore)
				if(this.LikeValueMore == 0){
					this.LikeValueMore= this.likes++;
				}
				if(this.LikeValueMore == 1 && this.saveTime >= new Date().getMinutes() ){
					console.log('Save :'+this.saveTime +''+ +'Agora'+ new Date().getMinutes())
					console.log('Continuou no tempo sendo igual a 1:'+ this.LikeValueMore)	
				}
				if(this.LikeValueMore >= 1 && this.saveTime < new Date().getMinutes()){
					 console.log('Save :'+this.saveTime +''+ +'Agora'+ new Date().getMinutes())

					 this.LikeValueMore = this.likes++;
					 this.storage.set('vez', this.LikeValueMore);
					console.log('Salvou fora do tempo:'+ this.LikeValueMore + 'vezes' + 'no tempo de' + this.timeNow)
				}
				if(this.LikeValueMore > 1 && this.saveTime >= new Date().getMinutes() ){
		            console.log('Save :'+this.saveTime +''+ +'Agora'+ new Date().getMinutes())
					console.log('Continuou no tempo sendo maior do que 1:'+ this.LikeValueMore)	

				}
			})			
			
		},1000);

  	}


	salvaCache(){
		
	}

	salvaCache2(){
		 this.storage.get('vez2').then((val) => {
	    console.log('você cliclou:', val);
	  });

	}	




}

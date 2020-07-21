import { DiaryService } from './../services/diary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldiary',
  templateUrl: './personaldiary.page.html',
  styleUrls: ['./personaldiary.page.scss'],
})
export class PersonaldiaryPage implements OnInit {
  file: File;
  file1: File;
  constructor(
    private diaryservice: DiaryService
  ) { }

  dropPicture($event): void {
    this.file = $event.target.files[0];
    this.diaryservice.storePicture(this.file);
  }
  dropVideo($event): void {
    this.file1 = $event.target.files[0];
    this.diaryservice.storeVideo(this.file1);
  }

  ngOnInit() {
  }

  write(data){
    this.diaryservice.writepersonaldiary(data.value);
  }

  

}

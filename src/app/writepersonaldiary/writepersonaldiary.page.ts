import { DiaryService } from './../services/diary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writepersonaldiary',
  templateUrl: './writepersonaldiary.page.html',
  styleUrls: ['./writepersonaldiary.page.scss'],
})
export class WritepersonaldiaryPage implements OnInit {

  file: File;
  file1: File;

  constructor(private diaryservice: DiaryService) { }

  ngOnInit() {
  }

  dropPicture($event): void {
    this.file = $event.target.files[0];
    this.diaryservice.storePicture(this.file);
  }
  dropVideo($event): void {
    this.file1 = $event.target.files[0];
    this.diaryservice.storeVideo(this.file1);
  }
  write(data) {
    this.diaryservice.writepersonaldiary(data.value);
  }

}

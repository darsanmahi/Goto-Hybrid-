import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadpersonaldiaryPage } from './readpersonaldiary.page';

describe('ReadpersonaldiaryPage', () => {
  let component: ReadpersonaldiaryPage;
  let fixture: ComponentFixture<ReadpersonaldiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadpersonaldiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadpersonaldiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WritepersonaldiaryPage } from './writepersonaldiary.page';

describe('WritepersonaldiaryPage', () => {
  let component: WritepersonaldiaryPage;
  let fixture: ComponentFixture<WritepersonaldiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritepersonaldiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WritepersonaldiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

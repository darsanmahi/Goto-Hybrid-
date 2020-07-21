import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaldiaryPage } from './personaldiary.page';

describe('PersonaldiaryPage', () => {
  let component: PersonaldiaryPage;
  let fixture: ComponentFixture<PersonaldiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaldiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaldiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

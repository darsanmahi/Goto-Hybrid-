import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollaborativediaryPage } from './collaborativediary.page';

describe('CollaborativediaryPage', () => {
  let component: CollaborativediaryPage;
  let fixture: ComponentFixture<CollaborativediaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborativediaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollaborativediaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

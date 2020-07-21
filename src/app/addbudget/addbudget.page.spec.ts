import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbudgetPage } from './addbudget.page';

describe('AddbudgetPage', () => {
  let component: AddbudgetPage;
  let fixture: ComponentFixture<AddbudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbudgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

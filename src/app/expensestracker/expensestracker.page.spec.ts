import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpensestrackerPage } from './expensestracker.page';

describe('ExpensestrackerPage', () => {
  let component: ExpensestrackerPage;
  let fixture: ComponentFixture<ExpensestrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensestrackerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensestrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

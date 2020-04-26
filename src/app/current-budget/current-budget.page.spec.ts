import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentBudgetPage } from './current-budget.page';

describe('CurrentBudgetPage', () => {
  let component: CurrentBudgetPage;
  let fixture: ComponentFixture<CurrentBudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBudgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentBudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

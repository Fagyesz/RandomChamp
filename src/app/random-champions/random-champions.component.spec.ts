import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChampionsComponent } from './random-champions.component';

describe('RandomChampionsComponent', () => {
  let component: RandomChampionsComponent;
  let fixture: ComponentFixture<RandomChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

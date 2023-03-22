import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproComponent } from './impro.component';

describe('ImproComponent', () => {
  let component: ImproComponent;
  let fixture: ComponentFixture<ImproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

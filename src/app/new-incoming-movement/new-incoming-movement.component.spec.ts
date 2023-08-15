import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncomingMovementComponent } from './new-incoming-movement.component';

describe('NewIncomingMovementComponent', () => {
  let component: NewIncomingMovementComponent;
  let fixture: ComponentFixture<NewIncomingMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncomingMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewIncomingMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOutgoingMovementComponent } from './new-outgoing-movement.component';

describe('NewOutgoingMovementComponent', () => {
  let component: NewOutgoingMovementComponent;
  let fixture: ComponentFixture<NewOutgoingMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOutgoingMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOutgoingMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

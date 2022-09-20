import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerIolarComponent } from './aer-iolar.component';

describe('AerIolarComponent', () => {
  let component: AerIolarComponent;
  let fixture: ComponentFixture<AerIolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerIolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AerIolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

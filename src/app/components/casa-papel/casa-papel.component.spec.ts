import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaPapelComponent } from './casa-papel.component';

describe('CasaPapelComponent', () => {
  let component: CasaPapelComponent;
  let fixture: ComponentFixture<CasaPapelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaPapelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaPapelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

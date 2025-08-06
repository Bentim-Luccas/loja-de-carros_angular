import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalLbentimComponent } from './principal-lbentim.component';

describe('PrincipalLbentimComponent', () => {
  let component: PrincipalLbentimComponent;
  let fixture: ComponentFixture<PrincipalLbentimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalLbentimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalLbentimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

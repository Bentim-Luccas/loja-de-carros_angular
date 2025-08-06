import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLbentimComponent } from './login-lbentim.component';

describe('LoginLbentimComponent', () => {
  let component: LoginLbentimComponent;
  let fixture: ComponentFixture<LoginLbentimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLbentimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLbentimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

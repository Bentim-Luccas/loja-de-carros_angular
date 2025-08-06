import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLbentimComponent } from './home-lbentim.component';

describe('HomeLbentimComponent', () => {
  let component: HomeLbentimComponent;
  let fixture: ComponentFixture<HomeLbentimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLbentimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLbentimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoManageComponent } from './ammo-manage.component';

describe('AmmoManageComponent', () => {
  let component: AmmoManageComponent;
  let fixture: ComponentFixture<AmmoManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmoManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

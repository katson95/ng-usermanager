import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate result that lies within the required range', () => {
    var minValue = 1;
    var maxValue = 3;
    var resultValue = component.generateRandomNumber(minValue, maxValue);
    expect(resultValue >= minValue).toBeTruthy();
    expect(resultValue).toBeLessThan(maxValue);
  });
});

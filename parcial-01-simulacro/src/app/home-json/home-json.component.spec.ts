import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJsonComponent } from './home-json.component';

describe('HomeJsonComponent', () => {
  let component: HomeJsonComponent;
  let fixture: ComponentFixture<HomeJsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeJsonComponent]
    });
    fixture = TestBed.createComponent(HomeJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

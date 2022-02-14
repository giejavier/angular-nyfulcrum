import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytileComponent } from './propertytile.component';

describe('PropertytileComponent', () => {
  let component: PropertytileComponent;
  let fixture: ComponentFixture<PropertytileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytickerComponent } from './propertyticker.component';

describe('PropertytickerComponent', () => {
  let component: PropertytickerComponent;
  let fixture: ComponentFixture<PropertytickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

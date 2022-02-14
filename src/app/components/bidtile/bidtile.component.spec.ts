import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidtileComponent } from './bidtile.component';

describe('BidtileComponent', () => {
  let component: BidtileComponent;
  let fixture: ComponentFixture<BidtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidtileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

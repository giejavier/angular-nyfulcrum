import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertileComponent } from './headertile.component';

describe('HeadertileComponent', () => {
  let component: HeadertileComponent;
  let fixture: ComponentFixture<HeadertileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadertileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadertileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

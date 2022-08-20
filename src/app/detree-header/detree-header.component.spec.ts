import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetreeHeaderComponent } from './detree-header.component';

describe('DetreeHeaderComponent', () => {
  let component: DetreeHeaderComponent;
  let fixture: ComponentFixture<DetreeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetreeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetreeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

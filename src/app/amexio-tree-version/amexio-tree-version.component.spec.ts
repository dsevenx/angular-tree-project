import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmexioTreeVersionComponent } from './amexio-tree-version.component';

describe('AmexioTreeVersionComponent', () => {
  let component: AmexioTreeVersionComponent;
  let fixture: ComponentFixture<AmexioTreeVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmexioTreeVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmexioTreeVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

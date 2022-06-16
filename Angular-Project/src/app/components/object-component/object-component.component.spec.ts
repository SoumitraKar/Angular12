import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectComponentComponent } from './object-component.component';

describe('ObjectComponentComponent', () => {
  let component: ObjectComponentComponent;
  let fixture: ComponentFixture<ObjectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

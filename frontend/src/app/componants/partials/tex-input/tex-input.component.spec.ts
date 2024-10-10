import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexInputComponent } from './tex-input.component';

describe('TexInputComponent', () => {
  let component: TexInputComponent;
  let fixture: ComponentFixture<TexInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

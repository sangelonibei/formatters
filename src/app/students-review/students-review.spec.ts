import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsReview } from './students-review';

describe('StudentsReview', () => {
  let component: StudentsReview;
  let fixture: ComponentFixture<StudentsReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

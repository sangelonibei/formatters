import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAreas } from './learning-areas';

describe('LearningAreas', () => {
  let component: LearningAreas;
  let fixture: ComponentFixture<LearningAreas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningAreas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningAreas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

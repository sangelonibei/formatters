import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFormatters } from './why-formatters';

describe('WhyFormatters', () => {
  let component: WhyFormatters;
  let fixture: ComponentFixture<WhyFormatters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyFormatters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyFormatters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

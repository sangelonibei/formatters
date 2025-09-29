import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersAndAccreditations } from './partners-and-accreditation.component';

describe('PartnersAndAccreditations', () => {
  let component: PartnersAndAccreditations;
  let fixture: ComponentFixture<PartnersAndAccreditations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersAndAccreditations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersAndAccreditations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proba } from './proba';

describe('Proba', () => {
  let component: Proba;
  let fixture: ComponentFixture<Proba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proba]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proba);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

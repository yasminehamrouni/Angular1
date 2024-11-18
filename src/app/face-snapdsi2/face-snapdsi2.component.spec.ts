import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapdsi2Component } from './face-snapdsi2.component';

describe('FaceSnapdsi2Component', () => {
  let component: FaceSnapdsi2Component;
  let fixture: ComponentFixture<FaceSnapdsi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapdsi2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapdsi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

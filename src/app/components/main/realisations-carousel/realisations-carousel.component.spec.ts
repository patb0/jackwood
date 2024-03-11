import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationsCarouselComponent } from './realisations-carousel.component';

describe('RealisationsCarouselComponent', () => {
  let component: RealisationsCarouselComponent;
  let fixture: ComponentFixture<RealisationsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationsCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealisationsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

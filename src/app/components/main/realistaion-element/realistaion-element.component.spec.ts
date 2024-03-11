import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealistaionElementComponent } from './realistaion-element.component';

describe('RealistaionElementComponent', () => {
  let component: RealistaionElementComponent;
  let fixture: ComponentFixture<RealistaionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealistaionElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealistaionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

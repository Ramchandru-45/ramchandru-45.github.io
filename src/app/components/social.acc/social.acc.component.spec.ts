import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAccComponent } from './social.acc.component';

describe('SocialAccComponent', () => {
  let component: SocialAccComponent;
  let fixture: ComponentFixture<SocialAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialAccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

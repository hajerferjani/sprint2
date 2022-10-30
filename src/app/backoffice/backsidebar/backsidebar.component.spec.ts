import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacksidebarComponent } from './backsidebar.component';

describe('BacksidebarComponent', () => {
  let component: BacksidebarComponent;
  let fixture: ComponentFixture<BacksidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacksidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacksidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

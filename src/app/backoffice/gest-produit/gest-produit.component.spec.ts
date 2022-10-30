import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestProduitComponent } from './gest-produit.component';

describe('GestProduitComponent', () => {
  let component: GestProduitComponent;
  let fixture: ComponentFixture<GestProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsertoMotosComponent } from './conserto-motos.component';

describe('ConsertoMotosComponent', () => {
  let component: ConsertoMotosComponent;
  let fixture: ComponentFixture<ConsertoMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsertoMotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsertoMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

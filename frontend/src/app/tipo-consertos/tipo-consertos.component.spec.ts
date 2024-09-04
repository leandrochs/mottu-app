import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoConsertosComponent } from './tipo-consertos.component';

describe('TipoConsertosComponent', () => {
  let component: TipoConsertosComponent;
  let fixture: ComponentFixture<TipoConsertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoConsertosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoConsertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

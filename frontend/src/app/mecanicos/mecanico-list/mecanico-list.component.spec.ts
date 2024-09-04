import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoListComponent } from './mecanico-list.component';

describe('MecanicoListComponent', () => {
  let component: MecanicoListComponent;
  let fixture: ComponentFixture<MecanicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

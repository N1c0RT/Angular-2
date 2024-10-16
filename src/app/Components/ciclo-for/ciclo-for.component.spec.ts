import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloForComponent } from './ciclo-for.component';

describe('CicloForComponent', () => {
  let component: CicloForComponent;
  let fixture: ComponentFixture<CicloForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicloForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

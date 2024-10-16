import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaPComponent } from './tabella-p.component';

describe('TabellaPComponent', () => {
  let component: TabellaPComponent;
  let fixture: ComponentFixture<TabellaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

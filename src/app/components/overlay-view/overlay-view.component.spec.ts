import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverlayViewComponent } from './overlay-view.component';

describe('OverlayViewComponent', () => {
  let component: OverlayViewComponent;
  let fixture: ComponentFixture<OverlayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayViewComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

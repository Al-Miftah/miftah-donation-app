import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoaderViewComponent } from './components/loader-view/loader-view.component';

@NgModule({
  declarations: [LoaderViewComponent],
  imports: [IonicModule],
  exports: [LoaderViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

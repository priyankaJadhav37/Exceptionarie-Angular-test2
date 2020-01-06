import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoModuleRoutingModule } from './demo-module-routing.module';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class DemoModuleModule { }

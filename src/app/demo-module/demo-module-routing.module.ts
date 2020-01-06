import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'demo_component', pathMatch: 'full' },
  { path: 'demo_component', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoModuleRoutingModule { }

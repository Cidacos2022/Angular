import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HelloWorldInputParComponent } from '../hello-world-input-par/hello-world-input-par.component';
import { HelloWorldComponent } from '../hello-world/hello-world.component';

const routes: Routes = [
    { path: 'hello-world', component: HelloWorldComponent },
    {
      path: 'input',
      component: HelloWorldInputParComponent,
    },
  ];  

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
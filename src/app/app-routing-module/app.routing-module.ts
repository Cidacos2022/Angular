import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldInputParComponent } from '../hello-world-input-par/hello-world-input-par.component';
import { HelloWorldPipesComponent } from '../hello-world-pipes/hello-world-pipes.component';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';

const routes: Routes = [
  {
    path: '',
    component: HelloWorldPipesComponent,
  },
  { path: 'hello-world', component: HelloWorldComponent },
  {
    path: 'input',
    component: HelloWorldInputParComponent,
  },
  {
    path: 'name',
    component: NameEditorComponent,
  },
  {
    path: 'profile',
    component: ProfileEditorComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

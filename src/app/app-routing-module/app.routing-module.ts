import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldDataFromUrlComponent } from '../hello-world-data-from-url/hello-world-data-from-url.component';
import { HelloWorldForComponent } from '../hello-world-for/hello-world-for.component';
import { HelloWorldInputParComponent } from '../hello-world-input-par/hello-world-input-par.component';
import { HelloWorldLoginComponent } from '../hello-world-login/hello-world-login.component';
import { HelloWorldParentComponent } from '../hello-world-parent/hello-world-parent.component';
import { HelloWorldPipesComponent } from '../hello-world-pipes/hello-world-pipes.component';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ParentBaseComponent } from '../parent-base/parent-base.component';
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
  {
    path: 'parent',
    component: HelloWorldParentComponent,
  },
  {
    path: 'productos/:idProducto',
    component: HelloWorldDataFromUrlComponent,
  },
  {
    path: 'login',
    component: HelloWorldLoginComponent,
  },
  {
    path: 'for',
    component: HelloWorldForComponent,
  },
  {
    path: 'parentBase',
    component: ParentBaseComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

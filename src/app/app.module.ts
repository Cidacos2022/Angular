import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldTemplateComponent } from './hello-world-template.component';
import { HelloWorldNgIfComponent } from './hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDependencyInjectionComponent } from './hello-world-di/hello-world-di.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { HelloWorldPipesComponent } from './hello-world-pipes/hello-world-pipes.component';
import { HelloWorldInputBindingComponent } from './hello-world-input-binding/hello-world-input-binding.component';
import { HelloWorldInputParComponent } from './hello-world-input-par/hello-world-input-par.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module/app.routing-module';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HelloWorldParentComponent } from './hello-world-parent/hello-world-parent.component';
import { HelloWorldChildComponent } from './hello-world-child/hello-world-child.component';
import { HelloWorldDataFromUrlComponent } from './hello-world-data-from-url/hello-world-data-from-url.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldLoginComponent } from './hello-world-login/hello-world-login.component';
import { HelloWorldForComponent } from './hello-world-for/hello-world-for.component';
import { ChildBaseComponent } from './child-base/child-base.component';
import { ParentBaseComponent } from './parent-base/parent-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    HelloWorldPipesComponent,
    HelloWorldInputBindingComponent,
    HelloWorldInputParComponent,
    ProfileEditorComponent,
    NameEditorComponent,
    HelloWorldParentComponent,
    HelloWorldChildComponent,
    HelloWorldDataFromUrlComponent,
    PageNotFoundComponent,
    HelloWorldLoginComponent,
    HelloWorldForComponent,
    ChildBaseComponent,
    ParentBaseComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

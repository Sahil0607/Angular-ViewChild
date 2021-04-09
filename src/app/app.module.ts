import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './viewchild-parent/viewchild-child/viewchild-child.component';
import { ViewchildDirectiveComponent } from './viewchild-directive/viewchild-directive.component';
import { ViewchildDirectiveChildComponent } from './viewchild-directive/viewchild-directive-child/viewchild-directive-child.component';
import { DirectiveViewchildDirective } from './viewchild-directive/directive/directive-viewchild.directive';
import { HostlistenerDirective } from './viewchild-directive/directive/hostlistener.directive';
import { ViewchildrenParentComponent } from './viewchildren-parent/viewchildren-parent.component';
import { ViewchildrenChildComponent } from './viewchildren-parent/viewchildren-child/viewchildren-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildParentComponent,
    ViewchildChildComponent,
    ViewchildDirectiveComponent,
    ViewchildDirectiveChildComponent,
    DirectiveViewchildDirective,
    HostlistenerDirective,
    ViewchildrenParentComponent,
    ViewchildrenChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

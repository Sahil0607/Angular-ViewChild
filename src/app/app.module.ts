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
import { ViewcontentParentComponent } from './viewcontent-parent/viewcontent-parent.component';
import { ContentprojectionParentComponent } from './contentprojection-parent/contentprojection-parent.component';
import { ContentprojectionChildComponent } from './contentprojection-parent/contentprojection-child/contentprojection-child.component';
import { ContentchildParentComponent } from './contentchild-parent/contentchild-parent.component';
import { ContentchildChildComponent } from './contentchild-parent/contentchild-child/contentchild-child.component';
import { ContentchildComponent } from './contentchild-parent/contentchild/contentchild.component';
import { ExContentChildParentComponent } from './ex-content-child-parent/ex-content-child-parent.component';
import { ExContentChildChildComponent } from './ex-content-child-parent/ExContentChild-parent/ex-content-child-child/ex-content-child-child.component';
import { DateViewerComponent } from './ex-content-child-parent/date-viewer/date-viewer.component';
import { ChangedetectionParentComponent } from './changedetection-parent/changedetection-parent.component';
import { ChangedetectionChildComponent } from './changedetection-parent/changedetection-child/changedetection-child.component';
import { NgZoneParentComponent } from './ng-zone-parent/ng-zone-parent.component';
import { NgZoneChildComponent } from './ng-zone-parent/ng-zone-child/ng-zone-child.component';

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
    ViewcontentParentComponent,
    ContentprojectionParentComponent,
    ContentprojectionChildComponent,
    ContentchildParentComponent,
    ContentchildChildComponent,
    ContentchildComponent,
    ExContentChildParentComponent,
    ExContentChildChildComponent,
    DateViewerComponent,
    ChangedetectionParentComponent,
    ChangedetectionChildComponent,
    NgZoneParentComponent,
    NgZoneChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

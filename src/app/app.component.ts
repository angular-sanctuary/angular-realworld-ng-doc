import {
  NgDocRootComponent,
  NgDocNavbarComponent,
  NgDocSidebarComponent,
} from "@ng-doc/app";
import { Component } from "@angular/core";
import { HeaderComponent } from "./core/layout/header.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./core/layout/footer.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
  ],
})
export class AppComponent {}

import { bootstrapApplication } from '@angular/platform-browser';
import { PrincipalLbentimComponent } from './app/componentes/principal-lbentim/principal-lbentim.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

bootstrapApplication(PrincipalLbentimComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(MatToolbarModule, MatDialogModule),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
});
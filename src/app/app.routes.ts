import { Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'contact', component: ContactPageComponent}
];

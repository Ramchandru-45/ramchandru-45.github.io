import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path : 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent,
        data: ["hello"]
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

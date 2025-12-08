import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WorkComponent } from './pages/work/work.component';

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
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

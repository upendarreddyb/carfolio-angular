import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { AccessoryFormComponent } from './components/accessory-form/accessory-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { FeatureFormComponent } from './components/feature-form/feature-form.component';
import { VarientFormComponent } from './components/varient-form/varient-form.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { ClientModelComponent } from './components/client-model/client-model.component';
import { ClientVarientsComponent } from './components/client-varients/client-varients.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: ColorFormComponent },
      { path: 'add-color', component: ColorFormComponent },
      { path: 'add-accessory', component: AccessoryFormComponent },
      { path: 'add-categeory', component: CategoryFormComponent },
      { path: 'add-feature', component: FeatureFormComponent },
      { path: 'add-verient', component: VarientFormComponent },
      { path: 'add-model', component: ModelFormComponent },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: ClientModelComponent },
      { path: 'get-models', component: ClientModelComponent },
      { path: 'get-cilet-verient/:id', component: ClientVarientsComponent },
      
    ],
  },
];
export default appRoutes;

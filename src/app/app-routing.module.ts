import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninPageModule),
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'donate',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./donate/donate.module').then((m) => m.DonatePageModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'contact',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'bank',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./bank/bank.module').then((m) => m.BankPageModule),
  },
  {
    path: 'transactions',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./transactions/transactions.module').then(
        (m) => m.TransactionsPageModule
      ),
  },
  {
    path: 'forgotpassword',
    loadChildren: () =>
      import('./forgotpassword/forgotpassword.module').then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

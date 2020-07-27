import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'expensestracker',
    loadChildren: () => import('./expensestracker/expensestracker.module').then( m => m.ExpensestrackerPageModule)
  },
  {
    path: 'diary',
    loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule)
  },
  {
    path: 'todolist',
    loadChildren: () => import('./todolist/todolist.module').then( m => m.TodolistPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'personaldiary',
    loadChildren: () => import('./personaldiary/personaldiary.module').then( m => m.PersonaldiaryPageModule)
  },
  {
    path: 'addbudget',
    loadChildren: () => import('./addbudget/addbudget.module').then( m => m.AddbudgetPageModule)
  },
  {
    path: 'addexpense',
    loadChildren: () => import('./addexpense/addexpense.module').then( m => m.AddexpensePageModule)
  },
  {
    path: 'viewexpense',
    loadChildren: () => import('./viewexpense/viewexpense.module').then( m => m.ViewexpensePageModule)
  },
  {
    path: 'writepersonaldiary',
    loadChildren: () => import('./writepersonaldiary/writepersonaldiary.module').then( m => m.WritepersonaldiaryPageModule)
  },
  {
    path: 'readpersonaldiary',
    loadChildren: () => import('./readpersonaldiary/readpersonaldiary.module').then( m => m.ReadpersonaldiaryPageModule)
  },
  {
    path: 'addtask',
    loadChildren: () => import('./addtask/addtask.module').then( m => m.AddtaskPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

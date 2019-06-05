import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'cadastrar', loadChildren: './pages/cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'listar', loadChildren: './pages/listar/listar.module#ListarPageModule' },
  { path: 'editar', loadChildren: './pages/editar/editar.module#EditarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

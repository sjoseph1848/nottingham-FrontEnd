import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { MarketsComponent } from './pages/markets/markets.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'markets', component: MarketsComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { UserscrudComponent } from './userscrud/userscrud.component';
import { CreditsComponent } from './credits/credits.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BillsComponent } from './bills/bills.component';
import { RefundsComponent } from './refunds/refunds.component';
import { RepaymentsComponent } from './repayments/repayments.component';
import { ChargeComponent } from './vendors/charge/charge.component';
import { RefundComponent } from './vendors/refund/refund.component';


const routes: Routes = [
  
    {
      path:'',
      redirectTo: '/charge',
      pathMatch:'full'
    },
//     {
//       path:'user', 
//       component: UserscrudComponent,
    
//     },
//     {
//       path:'credits',
//       component: CreditsComponent,

//     },
//     {
//       path:'transactions',
//       component: TransactionsComponent,
//     },
//     {
//       path:'bills',
//       component: BillsComponent,

//     },
//     {
//       path:'refunds',
//       component: RefundsComponent,

//     },
//     {
// path:'transactions',
// component:TransactionsComponent,
//     },
//     {
//       path:'repayments',
//       component:RepaymentsComponent,
//     },
    {
      path:'charge',
      component:ChargeComponent
    },
    {
      path:'refund',
      component:RefundComponent
    }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

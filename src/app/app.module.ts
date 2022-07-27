import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CreditsComponent } from './credits/credits.component';
import { UserscrudComponent } from './userscrud/userscrud.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BillsComponent } from './bills/bills.component';
import { CredlogComponent } from './credlog/credlog.component';
import { RefundsComponent } from './refunds/refunds.component';
import { RepaymentsComponent } from './repayments/repayments.component';
import { HighlightDirective } from './highlight.directive';
import { ChargeComponent } from './vendors/charge/charge.component';
import { RefundComponent } from './vendors/refund/refund.component';
import { FooterComponent } from './vendors/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ErrorpageComponent,
    CreditsComponent,
    UserscrudComponent,
    TransactionsComponent,
    BillsComponent,
    CredlogComponent,
    RefundsComponent,
    RepaymentsComponent,
    HighlightDirective,
    ChargeComponent,
    RefundComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule




    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

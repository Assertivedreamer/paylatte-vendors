import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  public form ={
    transaction_id:null
  };
  constructor(
    private api:ApiService,
    private router :Router,
  ) { }
  onSubmit(){
    this.api.refund(this.form).subscribe(
      data => this.handleResponse(data),
    );
    alert('Transaction Recorded and amount refunded');

  }

  handleResponse(data: any) {
    this.router.navigate(['home'])
  }

  ngOnInit(): void {
  }

}

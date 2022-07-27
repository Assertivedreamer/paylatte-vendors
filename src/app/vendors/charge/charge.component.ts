import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {
  public form ={
    sender_id: null,
    receiver_id : null,
    transaction_amount : null
  };
  constructor( private api :ApiService,
    private router :Router,

  ) { }
  onSubmit(){
    this.api.charge(this.form).subscribe(
      data => this.handleResponse(data),
    );
    alert('Transaction Recorded');

  }

  handleResponse(data: any) {
    this.router.navigate(['home'])
  }
 

  ngOnInit(): void {
  }

}

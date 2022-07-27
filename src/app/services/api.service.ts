import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postStudent(data : any){
    return this.http.post<any>("http://localhost:8000/api/users",data);

  }
  getStudent(){
    return this.http.get<any>("http://localhost:8000/api/users")
  }

  // totaldue(userid):Observable<any>
  // {
  //   console.log(userid);
  //   return this.http.get(`${this.baseUrl}api/transactionBill/users/${userid}`)
  // }
  putStudent(data : any, id){
    return this.http.put<any>(`http://localhost:8000/api/users/${id}`,data);
  }
  deleteStudent(id){
    return this.http.delete<any>(`http://localhost:8000/api/users/${id}`);
  }
  getCredits(){
    return this.http.get<any>("http://localhost:8000/api/credits");
  }
 
  getRefunds(){
    return this.http.get<any>("http://localhost:8000/api/refunds");
  }
  getTransactions(){
    return this.http.get<any>("http://localhost:8000/api/transactions");
  }
  getRepayments(){
    return this.http.get<any>("http://localhost:8000/api/repayments");
  }
  getBills(){
    return this.http.get<any>("http://localhost:8000/api/bills");
  }
  charge(data: any) {
    return this.http.post("http://localhost:8000/api/transactions",data)
  }
  refund(data: any) {
    return this.http.post("http://localhost:8000/api/refunds",data)
  }

}

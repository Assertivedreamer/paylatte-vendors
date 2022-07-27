import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { RouterLinkWithHref } from '@angular/router';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  title = 'stdnttask';
  displayedColumns: string[] = ['id','pancard','credit_score','gross_revenue','liabilties','networth','credit_limit'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  order: boolean;
  Name: boolean;
  studentData: any;

  constructor(private dialog :MatDialog, private api :ApiService){

    
  }
  ngOnInit(): void {
    this.getAllCredits();
    this.api.getCredits().subscribe((res)=>{
      this.studentData=res;
      console.log(this.studentData);
    });

  
    
  }
  
  // openDialog() {
  //   this.dialog.open(DialogComponent, {
  //     width:'45%'
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'save'){
  //       this.getAllCredits();
  //     }
  //   })
  // }
  getAllCredits(){
    this.api.getCredits()
    .subscribe({
      next:(res)=>{
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort =this.sort
      },
      error:(err)=>{
        alert("error while geting the records")
      }
    })

  }
  // editStudent(row : any){
  //   this.dialog.open(DialogComponent,{
  //   width:'45%',
  //   data:row
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'update'){
  //       this.getAllCredits();
  //     }
  //   })
  // }
  // adddetails(row : any){
  //   this.dialog.open(DialogComponent,{
  //   width:'45%',
  //   data:row
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'save'){
  //       this.getAllCredits();
  //     }
  //   })
  // }
  
  // deleteStudent(id:number){
  //   this.api.deleteStudent(id).subscribe({
  //     next:(res)=>{
  //       alert("Studentdetails deleted successfully");
  //       this.getAllCredits();
  //     },
  //     error:()=>{
  //       alert("Error while getting the details")
  //     }
  //   })
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // sortData() {
   
  //   if (this.order) {
     
      
     
  //   let newarr = this.studentData.sort((a, b) => a.studentId - b.studentId);
  //     this.studentData = newarr;
  //     this.dataSource=this.studentData;
  //     console.log("true");
  //   }
  //   else {
  //     let newarr = this.studentData.sort((a, b) => b.studentId - a.studentId);
  //     this.studentData = newarr;
  //     this.dataSource=this.studentData;
  //     console.log("false");
  //   }

  //   this.order = !this.order
  // }

  sortName(property) {
    this.Name = !this.Name;
    let newarr = this.Name ? 1 : -1;
    

    this.studentData.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * newarr;
      }
      else if (a[property] > b[property]) {
        return 1 * newarr;
      }
      else {
        return 0;
      }
    })
    this.dataSource=this.studentData;
  }

 

 



  
}
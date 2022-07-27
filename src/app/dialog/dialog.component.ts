import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { UserscrudComponent } from '../userscrud/userscrud.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  // gender: string[] = ['Male', 'Female', 'Others',];
  studentform !: FormGroup;
  ActionBtn: string = "save"
  dialog: any;
  dataSource!: MatTableDataSource<any>;
  paginator: any;
  sort: any;
  router: any;





  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<DialogComponent>) { }
    
    

  ngOnInit(): void {
    

    this.studentform = this.formBuilder.group({

      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(500)]],
      last_name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      // gender: ['', Validators.required],
      pancard: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.maxLength(10)]],
      // pincode: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
      // dob: ['', [Validators.required, Validators.pattern("[0-9]{8}")]],
      //grade:['',[Validators.required, Validators.pattern("[0-12]{2}")]],
      aadhar: ['', [Validators.required, Validators.pattern("[0-9]{12}")]],

      // phone_number: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],

    });
    
   


    if (this.editData) {
      this.ActionBtn = "Update";
      this.studentform.controls['id'].setValue(this.editData.id);

      this.studentform.controls['name'].setValue(this.editData.name);
      this.studentform.controls['last_name'].setValue(this.editData.last_name);
      this.studentform.controls['email'].setValue(this.editData.email);
      // this.studentform.controls['gender'].setValue(this.editData.gender);
      this.studentform.controls['pancard'].setValue(this.editData.pancard);
      this.studentform.controls['address'].setValue(this.editData.address);
      // this.studentform.controls['dob'].setValue(this.editData.dob);
      // this.studentform.controls['pincode'].setValue(this.editData.pincode);
      //this.studentform.controls['grade'].setValue(this.editData.grade);
      this.studentform.controls['aadhar'].setValue(this.editData.aadhar);

      // this.studentform.controls['phone_number'].setValue(this.editData.phone_number);
    }
  } 




  adddetails() {
   
    if (!this.editData) {
      if (this.studentform.valid) {

        this.api.postStudent(this.studentform.value).subscribe({
          next: (res) => {

            this.studentform.reset();
            this.dialogref.close();
            window.location.reload()
            
          },
          error: () => {
            alert("Error while adding the userdetails")

          }
        })



      }
    } else {
      this.updateStudent()
    }
  

    
  }

  
  updateStudent() {
    this.api.putStudent(this.studentform.value,this.editData.id).subscribe({
      next: (res) => {
        alert("Studendetails updated successfully");
        this.studentform.reset();
        this.dialogref.close('update');

 
      },
      error: () => {
        alert("error while getting the record");
      }
    })


  }
  getAllStudents() {
    this.api.getStudent().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;



    })
    

  }


  get id() {

    return this.studentform.get('id');

  }
  get name() {

    return this.studentform.get('name');

  }

  get last_name() {

    return this.studentform.get('last_name');

  }
  get email() {

    return this.studentform.get('email');

  }

  get pancard() {

    return this.studentform.get('email');

  }
  get address() {

    return this.studentform.get('address');

  }
  // get dob() {

  //   return this.studentform.get('dob');

  // }
  // get grade() {

  //   return this.studentform.get('grade');

  // }
  // get phone_number() {

  //   return this.studentform.get('phone_number');

  // }


}



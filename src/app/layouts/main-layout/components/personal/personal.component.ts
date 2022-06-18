import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required]]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'My name',
      lastname: 'lastname',
      username: '@username'
    })
  }

  invalidFild(campo: string){
    return this.myForm.controls[campo]?.errors && this.myForm.controls[campo].touched
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }

    this.myForm.reset()
  }

}

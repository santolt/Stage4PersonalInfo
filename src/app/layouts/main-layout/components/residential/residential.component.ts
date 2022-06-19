import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss']
})
export class ResidentialComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    country: ['', [Validators.required, Validators.minLength(2)]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    zip: ['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      country: 'MyCountry',
      city: 'MyCity',
      zip: 'myZip'
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

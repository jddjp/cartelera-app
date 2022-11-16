import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service'; 
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  registerForm!: FormGroup;
  submitted = false;
  constructor( private crudservice: CrudService, private formBuilder: FormBuilder, public alertController: AlertController){}
  //Add user form actions
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Great!!',
      message: 'User has been registered.',
      buttons: ['OK']
    });
    await alert.present();
    
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
  
     this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      
      // Initialize Params Object
      var myFormData = new FormData();
    
    // Begin assigning parameters
    
        myFormData.append('myUsername', this.registerForm.value.firstname);
        myFormData.append('myEmail', this.registerForm.value.email);
        myFormData.append('myPass', this.registerForm.value.password);
    
        this.crudservice.adduser(myFormData); //caaling add user service
        this.presentAlert();
        
    }
  
  }
    ngOnInit() {
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    
      firstname: ['', [Validators.required]],
      password: ['', [Validators.required]]
      });
    }
    
  
}
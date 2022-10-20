import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  
  formularioRegistro:FormGroup;

  constructor(public fb:FormBuilder,
              public alertController: AlertController,
              public navCtrl: NavController) {
    this.formularioRegistro=this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required)
    });
   }



  ngOnInit() {
  }
  
  async guardar (){

    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Completar Datos',
        message: 'Tines que completar todos los datos!',
        buttons: ['OK'],

      });

  
      await alert.present();
      return;
    };


    if (this.formularioRegistro.valid){
      const alert = await this.alertController.create({
        header: 'Completo los datos correctamente',
        message: 'Ya puedes iniciar sesión!',
        buttons: ['OK'],

      });

  
      await alert.present();
      return;
    };
    

    var usuario ={

      nombre:f.nombre,
      password: f.password

    }


    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}

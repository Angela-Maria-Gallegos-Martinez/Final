import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Database, set, ref, update } from '@angular/fire/database'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  loading = false;
  mdatos: any;

  ngOnInit(): void {
  }

  constructor(private auth: Auth, public database: Database, private router: Router) {
    this.mdatos = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
      pass2: new FormControl('', [Validators.required]),
    });
  }

  // igualPass(control:FormControl):{[s:string]:boolean}| null{
  //     const pass_1 = this.mdatos.value.pass;
  //     if(control.value === pass_1){
  //       return {igualPass:true}
  //     }
  //     return null
  //   }
  // }

  registerUser(value: any) {

    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        set(ref(this.database, 'user/' + user.uid), {
          username: value.username,
          email: value.email,
          password: value.password
        });
        // ...
        alert("Usuario Creado");

        this.router.navigate(['phone'])

        setTimeout(() => { 
          location.replace("./login");
        }, 2000);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  }
}

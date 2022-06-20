import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Database, set, ref, update } from '@angular/fire/database'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mdatos: any;

  constructor(private auth: Auth, public database: Database, private router: Router) {
    this.mdatos = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
      pass2: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {

  }

  registerUser(value: any) {

    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const date = new Date();

        update(ref(this.database, 'user/' + user.uid), {
          last_login: date
        });
        // ...
        alert("Usuario en linea");
        value.email = '';
        value.password = '';

        localStorage.setItem('tipo', 'cliente' );

        setTimeout(() => { //5 segundos antes de redirigir a la pagina "heroes"
          location.replace("./home");
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

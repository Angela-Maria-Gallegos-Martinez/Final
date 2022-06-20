import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  mdatos: FormGroup;

  constructor(private httpclient: HttpClient) {
    this.mdatos = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    })
  }

  ngOnInit(): void {
  }

  enviaCorreo() {
    let params = {
      email: this.mdatos.value.mail,
      asunto: this.mdatos.value.asunto,
      mensaje: this.mdatos.value.mensaje
    }

    this.httpclient.post('http://localhost:3000/envia', params).subscribe(resp => {
      console.log(resp)
    })
  }
}

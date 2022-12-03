import {
  Component,
  OnInit,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  FirebaseCodeErrorService,
} from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth, private router: Router,
    private FirebaseError: FirebaseCodeErrorService) { 
      this.recuperarUsuario = this.fb.group({
        correo: ['', Validators.required, ]
            })

    }
      
  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUsuario.value.correo;

    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/login']);
    }).catch((error) =>{

    } )
  }
}

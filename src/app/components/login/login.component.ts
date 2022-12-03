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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth, private router: Router,
    private FirebaseError: FirebaseCodeErrorService
    ) { 
      this.loginUsuario = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

  ngOnInit(): void {
  }
login() {
  const email = this.loginUsuario.value.email;
  const password = this.loginUsuario.value.password;

  console.log(email, password);

  this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
    
    if(user.user?.emailVerified){
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/verificar-correo']);
    }
   
  }).catch((error) => {
    console.log(error);
    this.FirebaseError.codeError(error.code);
  })
}
}

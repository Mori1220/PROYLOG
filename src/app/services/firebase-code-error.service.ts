import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }
  
  codeError(code: string) {
    switch(code) {

  //El correo ya existe    
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
  //Contraseña
      case 'auth/weak-password':
        return 'La contraseña debe tener al menos una letra mayuscula, un caracter, un numero y una letra minuscula';
        default: 
        return 'Error desconocido';  
        
  //Correo Invalido
          case 'auth/invalid-email':
        return 'Correo Invalido';
   
  //Contraseña incorrecta
        case 'auth/wrong-password':
      return 'Contraseña incorrecta';  
     
  //El Usuario no existe 
      case 'auth/user-not-found':
    return 'El usuario no existe';    
        
        
    }
  }
}

import { FormGroup } from '@angular/forms';



export function usuarioSenhaIguaisValidator(formgroup: FormGroup){
  const username = formgroup.get('userName')?.value ?? '';
  const password = formgroup.get('password')?.value ?? '';

  if(username.trim() + password.trim()){
    return username !== password ? null : {senhaIgualUsuario: true};
  } else {
    return null;
  }
}

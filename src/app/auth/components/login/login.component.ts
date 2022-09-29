import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.authService.login(this.loginForm.value).subscribe({
      next:res => {
        console.log(res);
        this.router.navigateByUrl('/admin/perfil')
      },
      error:err => {
        console.log(err);
        alert("Error de autenticacion")
      }
    })
  }

}

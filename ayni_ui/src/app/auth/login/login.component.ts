import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private router: Router,
              private snackbar: MatSnackBar,
              private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  send() {
    // por definir
    this.router.navigate(['inicio/home']);
    /* this.authService.login(this.form.value.user, this.form.value.password).subscribe(
      () => {
        this.router.navigate(['inicio/dashboard']);
        this.snackbar.open('login exitoso', 'TEST', {
          duration: 5000
        });
      },
      error => {
        this.snackbar.open('login no exitoso', 'TEST', {
          duration: 5000
        });
      }
    ); */

  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

}

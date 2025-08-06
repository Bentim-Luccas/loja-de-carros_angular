import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-lbentim',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './login-lbentim.component.html',
  styleUrls: ['./login-lbentim.component.scss']
})
export class LoginLbentimComponent {
  email = '';
  senha = '';
  credencialInvalida = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  entrar() {
    if (this.email === 'teste.com.br' && this.senha === 'teste') {
      this.credencialInvalida = false;

      const dialogRef = this.dialog.open(DialogBemVindoComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['/home']);
      });
    } else {
      this.credencialInvalida = true;
    }
  }

}

@Component({
  standalone: true,
  selector: 'dialog-bem-vindo',
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h1 mat-dialog-title>Seja bem-vindo!</h1>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>OK</button>
    </div>
  `
})
export class DialogBemVindoComponent {}
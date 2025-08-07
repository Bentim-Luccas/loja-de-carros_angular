import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; // teste

@Component({
  selector: 'app-home-lbentim',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  templateUrl: './home-lbentim.component.html',
  styleUrls: ['./home-lbentim.component.scss']
})
export class HomeLbentimComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  carros = [
    {
      modelo: 'Toyota Corolla',
      ano: 2020,
      preco: 85000,
      km: 32000,
      imagem: 'assets/carros/toyota_corolla.jpg'
    },
    {
      modelo: 'Honda Civic',
      ano: 2019,
      preco: 79000,
      km: 41000,
      imagem: 'assets/carros/honda_civic.jpg'
    },
    {
      modelo: 'Chevrolet Onix',
      ano: 2022,
      preco: 68000,
      km: 15000,
      imagem: 'assets/carros/chevrolet_onix.jpg'
    },
    {
      modelo: 'Volkswagen Golf GTI',
      ano: 2021,
      preco: 135000,
      km: 22000,
      imagem: 'assets/carros/golf_gti.jpg'
    },
    {
      modelo: 'Volkswagen Gol',
      ano: 2023,
      preco: 65000,
      km: 12000,
      imagem: 'assets/carros/gol.jpg'
    },
    {
      modelo: 'Honda Fit',
      ano: 2016,
      preco: 45000,
      km: 80000,
      imagem: 'assets/carros/honda_fit.jpg'
    },
    {
      modelo: 'Fiat Fastback',
      ano: 2026,
      preco: 120000,
      km: 0,
      imagem: 'assets/carros/fiat_fastback.png'
    },
    {
      modelo: 'Toyota Etios',
      ano: 2024,
      preco: 70000,
      km: 0,
      imagem: 'assets/carros/toyota_etios.jpg'
    },
    {
      modelo: 'Porsche Cayman',
      ano: 2024,
      preco: 550000,
      km: 20000,
      imagem: 'assets/carros/porsche_cayman.jpg'
    },
    {
      modelo: 'BMW X1',
      ano: 2017,
      preco: 75000,
      km: 62000,
      imagem: 'assets/carros/bmw_x1.jpg'
    }
  ];


  sair() {
    const dialogRef = this.dialog.open(DialogSairComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/login']);
      }
    });
  }
}

@Component({
  standalone: true,
  selector: 'dialog-sair',
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h1 mat-dialog-title>Deseja realmente sair?</h1>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Sim</button>
      <button mat-button [mat-dialog-close]="false">Não</button>
    </div>
  `
})
export class DialogSairComponent {}
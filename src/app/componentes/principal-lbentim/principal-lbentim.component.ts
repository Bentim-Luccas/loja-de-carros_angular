import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-principal-lbentim',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule],
  templateUrl: './principal-lbentim.component.html',
  styleUrls: ['./principal-lbentim.component.scss']
})
export class PrincipalLbentimComponent {}
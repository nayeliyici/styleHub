import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNote, IonInput, IonSelect, IonSelectOption, IonIcon, IonItem } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-worker',
  templateUrl: './register-worker.page.html',
  styleUrls: ['./register-worker.page.scss'],
  standalone: true,
  imports: [IonItem, IonIcon, IonNote, IonSelect, IonSelectOption, RouterLink, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule] 
})
export class RegisterWorkerPage {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = ''; 
  domicilio: string = '';
  phone: string = '';
  foto: string = '';

  constructor(
    private router: Router,
  ) { }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonNote } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonNote, RouterLink, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage {
  userEmail: string = '';
  userPassword: string = ''; 

  constructor(
    private router: Router,
  ) { }

  login() {
    if (this.userEmail === 'admin') { 
      localStorage.setItem('isAdmin', 'admin');
      this.router.navigate(['/administration']).then(() => {
        window.location.reload(); 
      });
    } else if(this.userEmail === 'worker'){
      localStorage.setItem('isAdmin', 'worker');
      this.router.navigate(['/profile']).then(() => {
        window.location.reload(); 
      });
    } 
    else {
      localStorage.setItem('isAdmin', 'user');
      this.router.navigate(['/home']).then(() => {
        window.location.reload(); 
      });
    }
  }
}

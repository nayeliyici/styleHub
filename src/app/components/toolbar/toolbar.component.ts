import { Router, RouterLink } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon, IonFab, IonFabButton, IonFabList, IonPopover, IonList, IonItem, IonButton, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, chevronUpCircle, document, colorPalette, globe, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [RouterLink, IonContent, IonButton, IonItem, IonList, IonPopover, IonFabList, IonFabButton, IonFab, IonIcon, IonTitle, IonButtons, IonToolbar, IonHeader, IonTitle, IonMenuButton]
})
export class ToolbarComponent {
  @Input() title!: string;
  constructor(
    private router: Router
  ) { 
    addIcons({person,logOutOutline,chevronUpCircle,document,colorPalette,globe});
  }

  closeSession(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

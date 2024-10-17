import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, home, calendar, people, person, clipboard } from 'ionicons/icons';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, ToolbarComponent],
})
export class AppComponent {
  isAdmin: any;
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home', adminOnly: false, userOnly: true, workerOnly: false },
    { title: 'Administrar', url: '/administration', icon: 'clipboard', adminOnly: true, userOnly: false, workerOnly: false },
    { title: 'Mi Perfil', url: '/profile', icon: 'person', adminOnly: false, userOnly: false, workerOnly: true},
    { title: 'Mis citas', url: '/appointment', icon: 'calendar', adminOnly: false, userOnly: true, workerOnly: true },
    { title: 'Nosotros', url: '/about', icon: 'people', adminOnly: true, userOnly: true, workerOnly: true },
  ];
  constructor(
  ) {
    addIcons({ home, calendar, people, person, clipboard });
    this.checkAdmin();
  }

  checkAdmin() {
    this.isAdmin = localStorage.getItem('isAdmin');
    this.appPages = this.appPages.filter(page => {
      if (this.isAdmin === 'admin') {
        return page.adminOnly;
      } else if(this.isAdmin === 'worker'){
        return page.workerOnly;
      } else {
        return page.userOnly;
      }
    });
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    currentPage: number = 0;
    sideMenuButton: boolean = true;
    
    setColor(currentPage: number){
      this.currentPage = currentPage;
    }
    togleMenu(sideMenuButton: boolean){
      this.sideMenuButton = sideMenuButton;
    }
}

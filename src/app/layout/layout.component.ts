import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent 
  implements OnInit {

  isNavbarCollapsed = true;
  homePage: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,) 
  {   }

  mobileMenuSidebarOpen(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }



  ngOnInit(): void {
  }

}

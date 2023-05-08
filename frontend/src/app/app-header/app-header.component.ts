import {Component, ElementRef, Renderer2} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  user : string | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}

  ngOnInit() {
    let logged_user = localStorage.getItem("user_name");
    if (logged_user){
      this.user = logged_user;
      return;
    }
    logged_user = sessionStorage.getItem("user_name");
    if (logged_user) {
      this.user = logged_user;
    }
  }

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('[routerLink]');

    for (const element of elements) {
      if (this.router.url === element.getAttribute('routerLink'))
        this.renderer.addClass(element, 'selected');
    }
  }

  logOutUser() {
    localStorage.removeItem("user_name");
    sessionStorage.removeItem("user_name");
    localStorage.removeItem("shoppingCartItems");
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SessionAction } from '../../store/session/session.actions';
import { SessionState } from '../../store/session/session.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Select(SessionState.user) user$!: Observable<string>;
  @Select(SessionState.islogged) islogged$!: Observable<string>;
  @Select(SessionState.connexionDate) connexionDate$!: Observable<string>;

  showSideBar: boolean = false;

  selectedTab: string;

  showSubmenu: any[] = [];
  showInfo: any[] = [];

  menus: any[] = [
    /* Administration */
    {
      id: '1',
      class: 'bx bx-lock-alt',
      item: 'Administration',
      route: '/dashboard/administration',
      arrowDown: 'bx bx-chevron-down',
      arrowUp: 'bx bx-chevron-up',

      submenus: [


        {
          class: 'bx bxs-bank',
          item: 'Corporate actions',
          route: '/dashboard/administration/corporate-action',
        },
       
      ],
    },

  ];

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {}

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  toggleMenu(index: number) {
    this.showSubmenu[index] = !this.showSubmenu[index];
  }

  toggleSubmenu(event: MouseEvent, item: any) {
    event.stopPropagation();
    this.showInfo[item] = !this.showInfo[item];
  }

  logoff(): void {
    this.store.dispatch(
      new SessionAction({
        islogged: false,
        user: '',
      })
    );
  }

  isLinkActive(menus) {
    const url = this.router.url;
    return menus.id === url.substring(1, url.indexOf('?'));
  }

}


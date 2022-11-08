import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SessionAction } from '../../store/session/session.actions';
import { SessionState } from '../../store/session/session.state';
import { MenuSidebar } from './types/menuSidebar';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css'],
})
export class OnlineComponent implements OnInit {
  @Select(SessionState.user) user$!: Observable<string>;
  @Select(SessionState.islogged) islogged$!: Observable<string>;
  @Select(SessionState.connexionDate) connexionDate$!: Observable<string>;

  activeItem: any;

  openSidebar: boolean = true;

  menuSidebar: MenuSidebar[] = [
    {
      link_name: 'Administration',
      link: null,
      icon: 'bx bx-collection',
      active: false,
      sub_menu: [
        {
          link_name: 'Corporate actions',
          link: '/online/administration/corporate-action',
        },
        {
          link_name: 'Contact',
          link: '/category/contact',
        },
      ],
    },
    {
      link_name: 'Markets',
      link: null,
      icon: 'bx bx-collection',
      active: false,
      sub_menu: [
        {
          link_name: 'Indice',
          link: '/markets/indice',
        },
      ],
    },
  ];

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {}

  showSubmenu(item: any) {
    if (item.link_name == this.activeItem) {
      this.activeItem = undefined;
    } else {
      this.activeItem = item.link_name;
    }
  }

  selectMenu(parentMenu: { link_name: string }): void {
    this.menuSidebar.forEach((menu) => {
      if (menu.link_name !== parentMenu.link_name) {
        menu.active = false;
      } else {
        menu.active = !menu.active;
      }
    });
  }

  logoff(): void {
    this.store.dispatch(
      new SessionAction({
        islogged: false,
        user: '',
      })
    );
  }
}

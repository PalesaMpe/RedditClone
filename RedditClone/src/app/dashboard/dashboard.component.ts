import {
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DynamicPopupComponent } from '../shared/components/dynamic-popup/dynamic-popup.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { Store, select } from '@ngrx/store';
import { DashboardState } from './dashboard-store/state/dashboard.state';
import {
  GetCommunitiesByPopularityAction,
  getPostsAction,
  getPostsPayloadAction,
} from './dashboard-store/actions/dashboard.actions';
import {  state } from './dashboard-store/selectors/dashboard.selectors';
import { Community, Post } from '../shared/models/models';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private dashboardStore: Store<DashboardState>
  ) {}
  openMenu = false;
  posts: Post[] = [];
  popularCommunities: Community[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.dashboardStore.dispatch(getPostsAction());
    this.dashboardStore.dispatch(
      GetCommunitiesByPopularityAction({size: 15})
    );
    this.dashboardStore.pipe(select(state)).subscribe((state) => {
      this.posts = state.posts;
      this.popularCommunities = state.popularCommunities;
    });
  }

  onLogin() {
    this.dialog.open(DynamicPopupComponent, {
      data: {
        close: true,
        styles: {
          width: '450px',
          height: '600px',
        },
        content: {
          title: {
            text: 'Log In',
            styles: {
              fontSize: '48px',
              fontWeight: 'bold',
            },
          },
          description: {
            text: 'By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.',
            styles: {
              padding: '20px 0',
            },
          },
          buttons: [
            {
              label: 'Login',
              type: 'primary',
              action: (context: DashboardLoginComponent) => {
                context.onLogin();
              },
            },
          ],
          components: {
            component: DashboardLoginComponent,
          },
        },
      },
    });
  }
}

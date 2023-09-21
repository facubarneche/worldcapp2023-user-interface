import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { FilterComponent } from './components/filter/filter.component'
import { LoginComponent } from './pages/login/login.component'
import { CardSearchComponent } from './pages/card-search/card-search.component'
import { CardAddComponent } from './pages/card-add/card-add.component'
import { StoreSearchComponent } from './pages/store-search/store-search.component'
import { CardDetailsComponent } from './pages/card-details/card-details.component'
import { UserProfileComponent } from './pages/user-profile/user-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    LoginComponent,
    CardSearchComponent,
    CardAddComponent,
    StoreSearchComponent,
    CardDetailsComponent,
    UserProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FormsModule } from '@angular/forms'

import { BaseFilterComponent } from './components/filter/baseFilter.component'
import { SortedByFilterComponent } from './components/filter/sortedByFilter/sortedByFilter.component'
import { VariantFilterComponent } from './components/filter/variantFilter/variantFilter.component'
import { FooterComponent } from './components/footer/footer.component'
import { LogoComponent } from './components/logo/logo.component'
import { CardDetailsComponent } from './pages/card-details/card-details.component'
import { UserProfileComponent } from './pages/user-profile/user-profile.component'
import { LoginComponent } from './pages/login/login.component'
import { CardSearchComponent } from './pages/card-search/card-search.component'
import { StoreSearchComponent } from './pages/store-search/store-search.component'
import { CardAddComponent } from './pages/card-add/card-add.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/input/select/select.component';
import { BaseComponent } from './components/input/base/base.component'

@NgModule({
  declarations: [
    AppComponent,    
    FooterComponent, 
    LogoComponent,
    // routingComponents,
    BaseFilterComponent,
    SortedByFilterComponent,
    VariantFilterComponent,
    HeaderComponent,
    LoginComponent,
    CardSearchComponent,
    CardDetailsComponent,
    StoreSearchComponent,
    UserProfileComponent,
    CardAddComponent,
    InputComponent,
    SelectComponent,
    BaseComponent,
    // FormsModule,
    // BrowserModule 
  ],
  imports: [BrowserModule, /*AppRoutingModule,*/ FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

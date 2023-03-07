import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FacilitysComponent } from './facilitys/facilitys.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ContractsComponent } from './contracts/contracts.component';
import { CreateContractComponent } from './create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FacilitysComponent,
    LeftContentComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    CustomersComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ContractsComponent,
    CreateContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

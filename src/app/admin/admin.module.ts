import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import {ModalCreateComponent} from "./components/modal-create/modal-create.component";
import {ModalEditComponent} from "./components/modal-edit/modal-edit.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage, ModalCreateComponent, ModalEditComponent]
})
export class AdminPageModule {}

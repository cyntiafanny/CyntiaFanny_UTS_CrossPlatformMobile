import { Component, OnInit } from '@angular/core';
import {Item} from "../home/item.model";
import {ItemsService} from "../home/items.service";
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {ModalCreateComponent} from "./components/modal-create/modal-create.component";
import {ModalEditComponent} from "./components/modal-edit/modal-edit.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];
  constructor(
    private itemService: ItemsService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private modalCreateCtrl: ModalController,
    private modalEditCtrl: ModalController
  ) {}

  ngOnInit() {
    this.items = this.itemService.getAllItems();
  }

  ionViewWillEnter() {
    this.items = this.itemService.getAllItems();
  }

  deleteItem(id) {
    this.presentLoading().then(() => {
      this.itemService.deleteItem(id)
      this.presentToast();
      this.ionViewWillEnter();
    });
  }

  async presentAlert(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteItem(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item deleted.',
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting item...',
      duration: 2000
    });
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
  }

  async presentModalCreate() {
    const modal = await this.modalCreateCtrl.create({
      component: ModalCreateComponent
    });
    modal.onDidDismiss().then(resultData => {
      this.items = this.itemService.getAllItems();
    });
    return await modal.present();
  }

  async presentModalEdit(item: Item) {
    const modal = await this.modalCreateCtrl.create({
      component: ModalEditComponent,
      componentProps: {
        item: item
      }
    });
    modal.onDidDismiss().then(resultData => {
      this.items = this.itemService.getAllItems();
    });
    return await modal.present();
  }
}

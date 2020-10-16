import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {NgForm} from "@angular/forms";
import {ItemsService} from "../../../home/items.service";

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnInit {
  type: string = "";
  isTypeValid = undefined;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private itemService: ItemsService
  ) {
  }

  ngOnInit() {
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let desc = [];

    // Get Description
    if (this.type === "processor") {
      desc.push(form.value.base);
      desc.push(form.value.boost);
      desc.push(form.value.core);
      desc.push(form.value.thread);
    } else if (this.type === "ram") {
      desc.push(form.value.speed);
      desc.push(form.value.size);
    } else if (this.type === "motherboard") {
      desc.push(form.value.chipset);
      desc.push(form.value.compatible);
    }

    this.presentLoading().then(() => {
      this.itemService.items.push({
        id: 'i' + (this.itemService.items.length + 1),
        brand: form.value.name,
        model: form.value.model,
        type: this.type,
        photo: form.value.image,
        price: form.value.price,
        stock: form.value.stock,
        description: desc
      });
      this.modalCtrl.dismiss({message: 'New product added'}, 'confirm');
      this.presentToast();
    });
  }

  changeType(type: any) {
    this.isTypeValid = true;
    this.type = type.detail.value;
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding product...',
      duration: 2000
    });
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New product added',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}

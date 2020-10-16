import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../home/item.model";
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  @Input() item: Item;
  photo = "";

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    for (let a = 0; a < this.item.photo.length; a++) {
      if (a != 0) {
        this.photo += "\n";
      }
      this.photo += this.item.photo[a];
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let type = this.item.type;
    let desc = [];
    let photo = form.value.image.split('\n');

    //Get Description
    if (type === "processor") {
      desc.push(form.value.base);
      desc.push(form.value.boost);
      desc.push(form.value.core);
      desc.push(form.value.thread);
    } else if (type === "ram") {
      desc.push(form.value.speed);
      desc.push(form.value.size);
    } else if (type === "motherboard") {
      desc.push(form.value.chipset);
      desc.push(form.value.compatible);
    }

    this.presentLoading().then(() => {
      this.item.brand = form.value.name;
      this.item.model = form.value.model;
      this.item.photo = photo;
      this.item.price = form.value.price;
      this.item.stock = form.value.stock;
      this.item.description = desc;
      this.modalCtrl.dismiss({message: 'Product Edited'}, 'confirm');
      this.presentToast();
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Editing product...',
      duration: 2000
    });
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Product edited',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}

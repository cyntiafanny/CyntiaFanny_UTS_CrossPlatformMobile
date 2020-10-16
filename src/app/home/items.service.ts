import {Injectable} from '@angular/core';
import {Item} from "./item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public items: Item[] = [
    {
      id: 'i1',
      photo: 'https://sobatgame.com/wp-content/uploads/2019/08/processor-terbaik-amd-ryzen-9-300x259.jpg',
      brand: 'AMD',
      model: 'Ryzen 9 3900X',
      type: 'processor',
      price: 8200000,
      stock: 12,
      description: [
        3.8,
        4.6,
        12,
        24,
      ]
    },
    {
      id: 'i2',
      photo: 'https://sobatgame.com/wp-content/uploads/2019/08/processor-terbaik-Intel-Core-i9-locked-300x296.jpg',
      brand: 'Intel',
      model: 'i9 9900KF',
      type: 'processor',
      price: 8300000,
      stock: 0,
      description: [
        3.6,
        5.0,
        8,
        16
      ]
    },
    {
      id: 'i3',
      photo: 'https://sobatgame.com/wp-content/uploads/2019/08/processor-terbaik-amd-ryzen-threadripper.jpg',
      brand: 'AMD',
      model: 'Ryzen Threadripper 1950X',
      type: 'processor',
      price: 10000000,
      stock: 3,
      description: [
        3.4,
        4.0,
        16,
        32,
      ]
    },
    {
      id: 'i4',
      photo: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/10/1.-Corsair-Vengeance-300x300.jpg',
      brand: 'Corsair',
      model: 'Vengeance',
      type: 'ram',
      price: 1350000,
      stock: 4,
      description: [
        1600,
        16,
      ]
    },
    {
      id: 'i5',
      photo: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/10/3.-Kingston-HyperX-300x300.jpg',
      brand: 'Kingston',
      model: 'HyperX Fury',
      type: 'ram',
      price: 410000,
      stock: 6,
      description: [
        2666,
        8,
      ]
    },
    {
      id: 'i6',
      photo: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/10/6.-G.Skill-TridentZ-300x300.jpg',
      brand: 'GSkill',
      model: 'TridentZ Neo RGB PC28800',
      type: 'ram',
      price: 2300000,
      stock: 18,
      description: [
        3100,
        16,
      ]
    },
    {
      id: 'i7',
      photo: 'https://merkbagus.id/wp-content/uploads/2020/05/MSI-Z270-SLI-Plus.jpg',
      brand: 'MSI',
      model: 'Z270 SLI Plus',
      type: 'motherboard',
      price: 1550000,
      stock: 8,
      description: [
        'X299',
        'Intel',
      ]
    },
    {
      id: 'i8',
      photo: 'https://merkbagus.id/wp-content/uploads/2020/05/Asus-Prime-Z270-A.jpg',
      brand: 'Asus',
      model: 'Prime Z270-A',
      type: 'motherboard',
      price: 2357000,
      stock: 11,
      description: [
        'Z270 Express',
        'Intel',
      ]
    },
    {
      id: 'i9',
      photo: 'https://merkbagus.id/wp-content/uploads/2020/05/Gigabyte-Aorus-Z270X-Gaming-9.jpg',
      brand: 'Aorus',
      model: 'Z270X Gaming 9',
      type: 'motherboard',
      price: 3769000,
      stock: 1,
      description: [
        'Z270',
        'Intel'
      ]
    },
    {
      id: 'i10',
      photo: 'https://cdn.idntimes.com/content-images/community/2020/08/fur-0293-3b0f8a37d48d8b68a607da20dc67122c.jpg',
      brand: 'Nvidia',
      model: 'GeForce RTX 2080 Super',
      type: 'gpu',
      price: 9670000,
      stock: 2,
      description: []
    },
    {
      id: 'i11',
      photo: 'https://cdn.idntimes.com/content-images/community/2020/08/article-1280x7204c784dde-a3644fba109415bd51a6a67281d95b12.jpg',
      brand: 'AMD',
      model: 'Radeon RX 5700 XT',
      type: 'gpu',
      price: 5600000,
      stock: 2,
      description: []
    },
    {
      id: 'i12',
      photo: 'https://cdn.idntimes.com/content-images/community/2020/08/2002492360-c4920b32ce936b55385bd4d05b599d51.jpeg',
      brand: 'AMD',
      model: 'Radeon VII',
      type: 'gpu',
      price: 11500000,
      stock: 4,
      description: []
    }
  ]

  constructor() {
  }

  getAllItems() {
    return [...this.items];
  }

  getItem(itemId: string) {
    return {
      ...this.items.find(item => {
        return item.id === itemId;
      })
    };
  }

  deleteItem(itemId: string) {
    this.items = this.items.filter(item => {
      return item.id !== itemId;
    });
  }

  getDescriptionKey(type: string) {
    switch (type) {
      case "processor":
        return (["Base Clock", "Boost Clock", "Total Core", "Total Thread"]);
        break;
      case "ram":
        return (["Speed", "Size"]);
        break;
      case "motherboard":
        return (["Chipset", "Compatible Processor"]);
        break;
      default:
        return [];
    }
  }

  getDescriptionUnitName(type: string) {
    switch (type) {
      case "processor":
        return (["GHz", "GHz", "", ""]);
        break;
      case "ram":
        return (["MHz", "GB"]);
        break;
      default:
        return [];
    }
  }
}

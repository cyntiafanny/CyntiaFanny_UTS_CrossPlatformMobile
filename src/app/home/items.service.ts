import {Injectable} from '@angular/core';
import {Item} from "./item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public items: Item[] = [
    {
      id: 'i1',
      photo: [
        'https://sobatgame.com/wp-content/uploads/2019/08/processor-terbaik-amd-ryzen-9-300x259.jpg',
        'https://ae01.alicdn.com/kf/H76aad129493f4269a8f4e1a426b4bf30a/AMD-Ryzen-9-3900X-R9-3900X3-8-GHz-Douze-Core-24-Fil-Processeur-D-unit-Centrale.jpg',
        'https://i.ytimg.com/vi/ZatmTw-0ZMw/maxresdefault.jpg'
      ],
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
      photo: [
        'https://sobatgame.com/wp-content/uploads/2019/08/processor-terbaik-Intel-Core-i9-locked-300x296.jpg',
        'https://images.idgesg.net/images/article/2018/10/intel-9th-gen-core-13-100775938-large.jpg'
      ],
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
      photo: [
        'https://sobatgame.com/wp-content/uploads/2019/08/processor-terbaik-amd-ryzen-threadripper.jpg',
        'https://static.techspot.com/articles-info/1465/images/Image_02S.jpg'
      ],
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
      photo: [
        'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/10/1.-Corsair-Vengeance-300x300.jpg',
        'https://www.powerplanetonline.com/cdnassets/corsair_vengeance_16gb_ddr4_3000mhz-_rgb_blanco_01_l.jpg'
      ],
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
      photo: [
        'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/10/3.-Kingston-HyperX-300x300.jpg',
        'https://www.powerplanetonline.com/cdnassets/kingston_hyperx_fury_8gb_ddr4_3200mhz_rgb_01_l.jpg'
      ],
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
      photo: [
        'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2019/10/6.-G.Skill-TridentZ-300x300.jpg',
        'https://www.gskill.com/_upload/images/1907111833200.png'
      ],
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
      photo: [
        'https://merkbagus.id/wp-content/uploads/2020/05/MSI-Z270-SLI-Plus.jpg',
        'https://images.anandtech.com/doci/11284/z270_msi_plus_sli_asrock_killer_sli_03.jpg',
        'https://images.anandtech.com/doci/11284/z270_msi_plus_sli_asrock_killer_sli_02.jpg',
        'https://www.evetech.co.za/repository/ProductImages/msi-z270-sli-plus-intel-motherboard-1000PX-V1-0006.jpg'
      ],
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
      photo: [
        'https://merkbagus.id/wp-content/uploads/2020/05/Asus-Prime-Z270-A.jpg',
        'https://dlcdnimgs.asus.com/websites/global/products/raDdHADFSa42GEuM/images/kv/main_kv.jpg'
      ],
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
      photo: [
        'https://merkbagus.id/wp-content/uploads/2020/05/Gigabyte-Aorus-Z270X-Gaming-9.jpg',
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/11/10/2678891/2678891_c7cdf178-5994-454f-b0d8-6acd034eef3c_1000_649.jpg',
        'https://i2.wp.com/play3r.net/wp-content/uploads/2017/03/AORUS-Z270X-GAMING-9-Review.jpg?fit=745%2C483&ssl=1'
      ],
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
      photo: [
        'https://cdn.idntimes.com/content-images/community/2020/08/fur-0293-3b0f8a37d48d8b68a607da20dc67122c.jpg',
        'https://i.pcmag.com/imagery/reviews/01CQtAlqqG9XN3KG7jnZILZ-47.1569474430.fit_scale.size_1028x578.jpg'
      ],
      brand: 'Nvidia',
      model: 'GeForce RTX 2080 Super',
      type: 'gpu',
      price: 9670000,
      stock: 2,
      description: []
    },
    {
      id: 'i11',
      photo: [
        'https://cdn.idntimes.com/content-images/community/2020/08/article-1280x7204c784dde-a3644fba109415bd51a6a67281d95b12.jpg',
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/10/19/32121883/32121883_76aa1f9b-7400-4fdb-885a-358e7f03cfde_700_700',
        'https://www.pcgamesn.com/wp-content/uploads/2019/07/amd-radeon-rx-5700-xt-review.jpg'
      ],
      brand: 'AMD',
      model: 'Radeon RX 5700 XT',
      type: 'gpu',
      price: 5600000,
      stock: 2,
      description: []
    },
    {
      id: 'i12',
      photo: [
        'https://cdn.idntimes.com/content-images/community/2020/08/2002492360-c4920b32ce936b55385bd4d05b599d51.jpeg',
        'https://cdn.mos.cms.futurecdn.net/MYP3uXFAkne6SY2vdUYSBL.jpg'
      ],
      brand: 'AMD',
      model: 'Radeon VII',
      type: 'gpu',
      price: 11500000,
      stock: 4,
      description: []
    }
  ];

  public total = this.items.length;

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

  addItem(item: Item) {
    this.items.push(item);
    this.total++;
  }

  getDescriptionKey(type: string) {
    switch (type) {
      case "processor":
        return (["Base Clock", "Boost Clock", "Total Core", "Total Thread"]);
      case "ram":
        return (["Speed", "Size"]);
      case "motherboard":
        return (["Chipset", "Compatible Processor"]);
      default:
        return [];
    }
  }

  getDescriptionUnitName(type: string) {
    switch (type) {
      case "processor":
        return (["GHz", "GHz", "", ""]);
      case "ram":
        return (["MHz", "GB"]);
      default:
        return [];
    }
  }
}

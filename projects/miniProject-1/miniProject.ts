// Icin Bir Class yazacagiz Calssimizida
// tum Urunleri donecek bir fonksiyon.
// tum Telefonlri, tabletleri ve televizyonlari donen bir fonksiyon olacak.
// Text Search yapabilecek bir fonksiyornumuz olacak.


// donecegimiz datalar.
//telefon icin { title, description, price, raiting, color ve thumbnail}
//laptop icin { title, description, price, raiting, screenDimentions , discount persentage, thumbnail}
//televizyon icin { title, description, price, raiting thumbnail smarttv, stock}
//tablet icin { title, description, price, raiting, color, celluar, wifi ve thumbnail}


/**
 * E-ticaret sitesi gibi düşündüğümüzden dolayı ürün ekleme, silme ve güncelleme gibi işlemler yapabiliriz.
 * Ekstra sepet düşünülerek, sepete ürün ekle, çıkar işlemleri yapılabilir.
 * Saat 03.00 olduğundan elden anca bu kadar geldi...:))
 */


import {dummyData} from "./data";
import {IProduct, ISmartPhone, ITablet, ILaptop, ITelevision, IProductAPI, IProductFunctions} from "./types";

class ProductFunctions implements IProductFunctions {
  findSmartPhone(item): ISmartPhone {
    return {
      title: item.title,
      description: item.description,
      price: item.price,
      rating: item.rating,
      id: item.id,
      thumbnail: item.thumbnail,
      color: item.color
    } as ISmartPhone;
  }

  findLaptop(item): ILaptop {
    return {
      title: item.title,
      description: item.description,
      price: item.price,
      rating: item.rating,
      id: item.id,
      thumbnail: item.thumbnail,
      screenDimentions: item.screenDimentions,
      discountPercentage: item.discountPercentage
    } as ILaptop;
  }

  findTablet(item): ITablet {
    return {
      title: item.title,
      description: item.description,
      price: item.price,
      rating: item.rating,
      id: item.id,
      thumbnail: item.thumbnail,
      color: item.color,
      celluar: item.celluar,
      wifi: item.wifi
    } as ITablet;
  }

  findTelevision(item): ITelevision {
    return {
      title: item.title,
      description: item.description,
      price: item.price,
      rating: item.rating,
      id: item.id,
      thumbnail: item.thumbnail,
      smartTv: item.smartTv,
      stock: item.stock
    } as ITelevision;
  }

  findProduct(item): IProduct {
    return {
      title: item.title,
      description: item.description,
      price: item.price,
      rating: item.rating,
      id: item.id,
      thumbnail: item.thumbnail
    } as IProduct;
  }
}


class ProductApi extends ProductFunctions implements IProductAPI {
  findAll<T extends IProduct>(): T[] {
    const returnValue: T[] = dummyData.map((item) => {
      if (item.category === 'smartphones') {
        return this.findSmartPhone(item);
      } else if (item.category === 'laptop') {
        return this.findLaptop(item);
      } else if (item.category === 'tablet') {
        return this.findTablet(item);
      } else if (item.category === 'television') {
        return this.findTelevision(item);
      } else {
        return {}
      }
    }) as T[];
    return returnValue as T[];
  }

  findByCategory<T extends IProduct>(category: "smartphones" | "laptop" | "tablet" | "television"): T[] {
    const returnData = []
    dummyData.filter((item) => {
      if (item.category === category && "smartphones" === category) {
        returnData.push(this.findSmartPhone(item));
      } else if (item.category === category && "laptop" === category) {
        returnData.push(this.findLaptop(item));
      } else if (item.category === category && "tablet" === category) {
        returnData.push(this.findTablet(item));
      } else if (item.category === category && "television" === category) {
        returnData.push(this.findTelevision(item));
      } else {
      }
    });
    return returnData as T[];
  }

  findByText<T extends IProduct>(input: string): T[] {
    const allData = this.findAll<IProduct>();
    const returnData = []
    allData.map((item) => {
      for (let itemKey in item) {
        if (item[itemKey].toString().toUpperCase().includes(input.toUpperCase())) {
          returnData.push(item);
        }
      }
    })
    return returnData as T[];
  }

  //Ekstra fonksiyonlar
  // addProduct<T extends IProduct>(item: T): T {
  //   dummyData.push(item)
  //   return item;
  // }

}

const test = new ProductApi();
// console.log(test.findAll<IProduct>())
// console.log(test.findByCategory<IProduct>("television"))
// console.log(test.findByText("549"))
// console.log(test.addProduct({
//   title: "test",
//   description: "test",
//   price: 100,
//   rating: 5,
//   thumbnail: "test",
//   id: 100
// }))

// console.log(dummyData)
// NOTLAR

// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//





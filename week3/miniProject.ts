/**
 * Telelefon için title, description, price, raiting, color and thumbnail
 * Laptop için title, description, price, raiting, screenDimentions, discount persentage, thumbnail, cpu, ram, storage
 * televizyon için title, description, price, raiting,  thumbnail, smartty stock
 *
 * !! IProduct önemlidir Interface anlamında kullanılır "I" harfi ile başlar.
 */

interface IProduct {
  title: string;
  description: string;
  price: number;
  raiting: number;
  thumbnail: string;

}

interface IPhone extends IProduct {
  color: string;
}

interface ILaptop extends IProduct {
  screenDimentions: string;
  discountPersentage: number;
}

interface ITelevision extends IProduct {
  smartTv: boolean;
  color: string

}

interface ITablet extends IProduct {
  wifi: boolean;
  color: string;
}

interface IProductPI {
  findAll<T extends IProduct>(): T[];
  findByCategory<T extends IProduct>(category: string): T[];
  findByText<T extends IProduct>(input: string): T;
}


class ProductApi implements IProductPI {ww
  findAll<T extends IProduct>(): T[] {
    return [];
  }
  findByCategory<T extends IProduct>(category: string): T[] {
    return
  }
  findByText<T extends IProduct>(input: string): T {
    return
  }
}


/**
 * Ek özellikler
 * Edit
 * Delete
 * Add
 *
 * Notlar
 * Naming Convention Benzer şekilde olacak
 * Dosyalama
 * Sepete ekleme
 * Sepetten çıkarma
 * Sepetin içeriğini gösterme
 * Sepetin toplam fiyatını gösterme
 */









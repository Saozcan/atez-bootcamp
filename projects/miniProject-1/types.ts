
export interface IProduct {
  title: string;
  description: string,
  price: number;
  rating: number;
  id: number | string;
  thumbnail: string
}

// export interface IColor {
//     color: string;
// }


export interface ISmartPhone extends IProduct {
  color: string;
}

export interface ILaptop extends IProduct {
  discountPercentage: number,
  screenDimentions: number,
}

export interface ITablet extends ISmartPhone {
  celluar: boolean;
  wifi: boolean;
}

export interface ITelevision extends IProduct {
  smartTv: boolean;
  stock: number;
}

export interface IProductAPI {
  findAll<T extends IProduct>(): T[];

  findByCategory<T extends IProduct>(category: string): T[];

  findByText<T extends IProduct>(input: string): T[];

  // Ekstra
  addProduct?<T extends (ISmartPhone | ILaptop | ITablet | ITelevision)>(item: T): T;

  deleteProduct?<T extends (ISmartPhone | ILaptop | ITablet | ITelevision)>(item: T): T;

  updateProduct?<T extends (ISmartPhone | ILaptop | ITablet | ITelevision)>(item: T): T;
}

export interface IProductFunctions {
  findSmartPhone(item): ISmartPhone;
  findLaptop(item): ILaptop;
  findTablet(item): ITablet;
  findTelevision(item): ITelevision;
  findProduct(item): IProduct;
}
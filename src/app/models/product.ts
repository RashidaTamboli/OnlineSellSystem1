export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, description = '', price = 0, imageUrl = 'https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_400/30558_delicious-butterscotch-cake.jpeg')
     {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }

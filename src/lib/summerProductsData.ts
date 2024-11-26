export interface summerProductType {
    id: number;
    name: string;
    price: number;
    image: string;
    discount: string;
    rating : number;
  }

  
export const summerProducts :  summerProductType[] = [
    {
      id: 1,
      name: 'Indian Sharee',
      price: 2300,
      image: '/assets/image 3.png',
      discount: 'Up to 40%',
      rating: 3, 
    },
    {
      id: 2,
      name: 'Half Sleeve Shirt',
      price: 2300,
      image: '/assets/image 4.png',
      discount: 'Up to 40%',
      rating: 3,
    },
    {
      id: 3,
      name: 'Woman Wearing Sari',
      price: 2300,
      image: '/assets/image 5.png',
      discount: 'Up to 40%',
      rating: 3,
    },
    {
      id: 4,
      name: 'Checkered Shirt',
      price: 2300,
      image: '/assets/image 6.png',
      discount: 'Up to 40%',
      rating: 3,
    },
    {
      id: 5,
      name: 'Casual Hoodie',
      price: 2500,
      image: '/assets/icon.png',
      discount: 'Up to 30%',
      rating: 4,
    },
  ];
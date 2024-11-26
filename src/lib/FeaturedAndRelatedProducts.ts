export interface FeaturedAndRelatedProductType {
    id: number;
    name: string;
    price: number;
    image: string;
  }
export const featuredAndRelatedProducts :  FeaturedAndRelatedProductType[] = [
    {
      id: 1,
      name: 'Indian Sharee',
      price: 2300,
      image: '/assets/Pexels Photo by Muneeb Malhotra.png',
    },
    {
      id: 2,
      name: 'Hoodie',
      price: 2300,
      image: '/assets/Pexels Photo by Bruno Palace.jpg',
    },
    {
      id: 3,
      name: 'Plazu',
      price: 2300,
      image: '/assets/Pexels Photo by Bruno Palace.png',
    },
    {
      id: 4,
      name: 'Jacket',
      price: 2300,
      image: '/assets/Pexels Photo by Ron Lach.png',
    },
    {
      id: 5,
      name: 'Checkered shirt',
      price: 2300,
      image: '/assets/image 6.png',
    },
   
  ];
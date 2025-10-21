export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
  sellingPrice: number;  // Actual selling price
        // Higher "fake" price
  category: string;
  featured?: boolean;
}


export const products: Product[] = [
  {
    id: '1',
    title: 'ASUS ROG Zephyrus G14 AW GA401QEC - Grey',
    description: 'ASUS ROG Zephyrus G14 Alan Walker Edition GA401QEC-AW - Grey Exclusive Alan Walker customized design',
    imageUrl: '/images/products/asusg14.jpg',
    amazonLink: 'https://rog.asus.com/ch-de/articles/rog-gaming-laptops/944ff6ed-a40e-49c3-ab30-ee66821fe5bf/',
    sellingPrice: 31000000,
   
    category: 'Computer and accessories',
    featured: true,
  },
  
  {
    id: '2',
    title: 'Steelseris Arctics 7 Wireless Gaming ',
    description: 'It\'s a perfect choice for Gaming and The headset is compatible with PC, Mac, PlayStation, Switch, and mobile devices',
    imageUrl: '/images/products/steelseries.jpg',
    amazonLink: 'https://tk.tokopedia.com/ZSUVSMdNH/',
    sellingPrice: 2480000,
 
    category: 'Computer and accessories',
    featured: false,
  },
   {
    id: '3',
    title: 'Logitech MX Master 3S',
    description: 'Logitech MX Master 3S Performance Mouse Wireless Bluetooth Quiet Click',
    imageUrl: '/images/products/mxmaster3s.webp',
    amazonLink: 'https://tk.tokopedia.com/ZSUVActLA/',
    sellingPrice: 1755000,
 
    category: 'Computer and accessories',
    featured: false,
  },
  
];
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Перфоратор Bosch GBH 2-26 DRE Professional',
    price: 12990,
    oldPrice: 14500,
    image: '/placeholder.svg',
    inStock: true,
    rating: 4,
    isDiscount: true
  },
  {
    id: 2,
    name: 'Шуруповерт DeWalt DCD777S2T',
    price: 9990,
    image: '/placeholder.svg',
    inStock: true,
    rating: 5,
    isNew: true
  },
  {
    id: 3,
    name: 'Бетоносмеситель Зубр ЭКСПЕРТ',
    price: 18500,
    oldPrice: 21000,
    image: '/placeholder.svg',
    inStock: true,
    rating: 4,
    isDiscount: true
  },
  {
    id: 4,
    name: 'Уровень лазерный CONDTROL XLiner Combo 360',
    price: 15790,
    image: '/placeholder.svg',
    inStock: false,
    rating: 3
  },
  {
    id: 5,
    name: 'Набор инструментов Вихрь 73/6/7/6',
    price: 3990,
    oldPrice: 4500,
    image: '/placeholder.svg',
    inStock: true,
    rating: 4,
    isDiscount: true
  },
  {
    id: 6,
    name: 'Дрель ударная Makita HP1630K',
    price: 6590,
    image: '/placeholder.svg',
    inStock: true,
    rating: 5
  },
  {
    id: 7,
    name: 'Циркулярная пила Metabo KS 55 FS',
    price: 8900,
    image: '/placeholder.svg',
    inStock: true,
    rating: 4,
    isNew: true
  },
  {
    id: 8,
    name: 'Лобзик электрический Интерскол МП-100Э',
    price: 3290,
    oldPrice: 3800,
    image: '/placeholder.svg',
    inStock: true,
    rating: 3,
    isDiscount: true
  }
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const popularProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 8);
  const newProducts = products.filter(p => p.isNew).slice(0, 8);
  const discountProducts = products.filter(p => p.isDiscount).slice(0, 8);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Рекомендуемые товары</h2>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger 
                value="popular" 
                className="data-[state=active]:bg-construct data-[state=active]:text-white"
              >
                Популярные
              </TabsTrigger>
              <TabsTrigger 
                value="new" 
                className="data-[state=active]:bg-construct data-[state=active]:text-white"
              >
                Новинки
              </TabsTrigger>
              <TabsTrigger 
                value="discount" 
                className="data-[state=active]:bg-construct data-[state=active]:text-white"
              >
                Со скидкой
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="discount" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {discountProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;

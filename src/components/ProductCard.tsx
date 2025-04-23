import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  rating: number;
  isNew?: boolean;
  isDiscount?: boolean;
};

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  image,
  inStock,
  rating,
  isNew = false,
  isDiscount = false,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
      <div className="relative pt-4 px-4">
        {/* Бейджи */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
              Новинка
            </span>
          )}
          {isDiscount && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              Скидка
            </span>
          )}
        </div>
        
        {/* Избранное */}
        <button className="absolute top-2 right-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <Heart size={18} className="text-gray-500" />
        </button>
        
        {/* Изображение */}
        <div className="flex justify-center h-48 mb-4">
          <img 
            src={image} 
            alt={name} 
            className="h-full object-contain"
          />
        </div>
      </div>
      
      {/* Информация о товаре */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-gray-800 font-medium mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h3>
        
        {/* Рейтинг */}
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        
        {/* Наличие */}
        <div className="text-sm mb-3">
          {inStock ? (
            <span className="text-green-600">В наличии</span>
          ) : (
            <span className="text-gray-500">Под заказ</span>
          )}
        </div>

        <div className="mt-auto">
          {/* Цена */}
          <div className="flex items-end mb-3">
            <span className="text-xl font-bold">{price.toLocaleString()} ₽</span>
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          
          {/* Кнопка добавления */}
          <Button className="w-full bg-construct hover:bg-construct-dark">
            <ShoppingCart size={16} className="mr-1" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

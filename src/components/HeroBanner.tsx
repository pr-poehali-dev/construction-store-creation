import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const slides = [
  {
    id: 1,
    image: '/placeholder.svg',
    title: 'Летняя распродажа',
    subtitle: 'Скидки до 50% на садовый инвентарь',
    buttonText: 'Перейти к товарам',
    buttonLink: '/catalog/sale',
    color: 'bg-blue-600'
  },
  {
    id: 2,
    image: '/placeholder.svg',
    title: 'Инструменты для профессионалов',
    subtitle: 'Высокое качество по доступным ценам',
    buttonText: 'Смотреть каталог',
    buttonLink: '/catalog/tools',
    color: 'bg-construct'
  },
  {
    id: 3,
    image: '/placeholder.svg',
    title: 'Всё для ремонта',
    subtitle: 'Бесплатная доставка при заказе от 5000₽',
    buttonText: 'Подробнее',
    buttonLink: '/delivery',
    color: 'bg-green-600'
  }
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className={`absolute inset-0 ${slide.color} opacity-90`}></div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-white z-10 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.subtitle}</p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-gray-800"
                >
                  {slide.buttonText}
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="max-h-[250px] md:max-h-[350px] object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 z-20"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart, User, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Верхняя часть шапки */}
        <div className="flex justify-between items-center py-2 border-b">
          <div className="text-sm flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-1" />
              <span>8 (800) 555-35-35</span>
            </div>
            <span className="hidden md:block text-gray-600">Ежедневно с 9:00 до 20:00</span>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/about" className="text-sm text-gray-600 hover:text-construct">О компании</Link>
            <Link to="/delivery" className="text-sm text-gray-600 hover:text-construct">Доставка и оплата</Link>
            <Link to="/contacts" className="text-sm text-gray-600 hover:text-construct">Контакты</Link>
          </div>
        </div>

        {/* Основная часть шапки */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-construct mr-8">
              СтройМаркет
            </Link>
            <Button 
              variant="outline" 
              className="hidden lg:flex items-center border-construct text-construct hover:bg-construct hover:text-white"
            >
              <Menu className="mr-2" size={20} />
              <span>Каталог товаров</span>
            </Button>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Поиск товаров..." 
                className="w-full pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="hidden md:flex items-center">
              <User size={20} />
              <span className="ml-2">Войти</span>
            </Button>
            <Button variant="ghost" className="relative">
              <ShoppingCart size={20} />
              <span className="ml-2 hidden md:inline">Корзина</span>
              <span className="absolute -top-1 -right-1 bg-construct text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-3">
            <div className="relative mb-3">
              <Input 
                type="text" 
                placeholder="Поиск товаров..." 
                className="w-full pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <Button 
              variant="outline" 
              className="w-full mb-3 justify-center items-center border-construct text-construct"
            >
              <Menu className="mr-2" size={20} />
              <span>Каталог товаров</span>
            </Button>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="py-2 border-b border-gray-100">О компании</Link>
              <Link to="/delivery" className="py-2 border-b border-gray-100">Доставка и оплата</Link>
              <Link to="/contacts" className="py-2 border-b border-gray-100">Контакты</Link>
              <Link to="/profile" className="py-2 border-b border-gray-100">Личный кабинет</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

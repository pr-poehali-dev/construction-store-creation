import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construct-gray text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Колонка 1 - О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">СтройМаркет</h3>
            <p className="text-gray-300 mb-4">
              Ваш надежный партнер в строительстве и ремонте с 2005 года.
              Широкий ассортимент качественных материалов и инструментов.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-white">
                <Video size={20} />
              </a>
            </div>
          </div>

          {/* Колонка 2 - Информация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">О компании</Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-white">Доставка и оплата</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white">Возврат товара</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white">Каталог</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Блог</Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3 - Каталог */}
          <div>
            <h3 className="text-xl font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/instruments" className="text-gray-300 hover:text-white">Инструменты</Link>
              </li>
              <li>
                <Link to="/catalog/materials" className="text-gray-300 hover:text-white">Стройматериалы</Link>
              </li>
              <li>
                <Link to="/catalog/electrical" className="text-gray-300 hover:text-white">Электротовары</Link>
              </li>
              <li>
                <Link to="/catalog/plumbing" className="text-gray-300 hover:text-white">Сантехника</Link>
              </li>
              <li>
                <Link to="/catalog/gardening" className="text-gray-300 hover:text-white">Садовый инвентарь</Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4 - Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Строительная, д. 123</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">8 (800) 555-35-35</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@stroymarket.ru" className="text-gray-300 hover:text-white">
                  info@stroymarket.ru
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Пн-Вс: 9:00 - 20:00<br />Без выходных</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © 2023 СтройМаркет. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

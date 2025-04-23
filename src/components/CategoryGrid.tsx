import { Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: 'Инструменты',
    image: '/placeholder.svg',
    link: '/catalog/tools'
  },
  {
    id: 2,
    name: 'Стройматериалы',
    image: '/placeholder.svg',
    link: '/catalog/materials'
  },
  {
    id: 3,
    name: 'Электротовары',
    image: '/placeholder.svg',
    link: '/catalog/electrical'
  },
  {
    id: 4,
    name: 'Сантехника',
    image: '/placeholder.svg',
    link: '/catalog/plumbing'
  },
  {
    id: 5,
    name: 'Освещение',
    image: '/placeholder.svg',
    link: '/catalog/lighting'
  },
  {
    id: 6,
    name: 'Садовый инвентарь',
    image: '/placeholder.svg',
    link: '/catalog/garden'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-construct-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Популярные категории</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="p-4 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-construct transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;

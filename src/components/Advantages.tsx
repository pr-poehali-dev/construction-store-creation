import { Truck, Shield, CreditCard, HeadphonesIcon } from 'lucide-react';

const advantagesData = [
  {
    id: 1,
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставка по Москве от 1 дня, по России от 3 дней'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Только проверенные производители и надежные товары'
  },
  {
    id: 3,
    icon: CreditCard,
    title: 'Удобная оплата',
    description: 'Наличными, картой, онлайн или в рассрочку'
  },
  {
    id: 4,
    icon: HeadphonesIcon,
    title: 'Поддержка клиентов',
    description: 'Профессиональная консультация и помощь в выборе'
  }
];

const Advantages = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantagesData.map((item) => (
            <div key={item.id} className="bg-construct-lightgray rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-construct text-white mb-4">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

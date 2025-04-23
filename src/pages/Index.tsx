import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import Advantages from '@/components/Advantages';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CategoryGrid />
        <FeaturedProducts />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Banner from "@/components/HomePage/Banner/Banner";
import Service from "@/components/HomePage/Banner/Service";
import BigDeal from "@/components/HomePage/BigDeal";
import SummerBigDealProducts from "@/components/HomePage/SummerBigDealProducts";
import Collection from "@/components/HomePage/Collection";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct";

const Home: React.FC = () => {
  return (
    <>
      <header className="pt-16">
        <Banner></Banner>
        <Service></Service>
      </header>
      <main className="container mx-auto py-5 px-4 lg:px-14">
        <FeaturedProduct></FeaturedProduct>
        <BigDeal></BigDeal>
        <Collection></Collection>
        <SummerBigDealProducts></SummerBigDealProducts>
      </main>
    </>
  );
};

export default Home;

import Banner from "@/components/HomePage/Banner/Banner";
import Service from "@/components/HomePage/Banner/Service";
import BigDeal from "@/components/HomePage/BigDeal";
import Collection from "@/components/HomePage/Collection";

const Home: React.FC = () => {
  return (
    <>
      <header className="pt-16">
        <Banner></Banner>
        <Service></Service>
      </header>
      <main className="container mx-auto py-5 px-4 lg:px-14">
        <BigDeal></BigDeal>
        <Collection></Collection>
      </main>
    </>
  );
};

export default Home;

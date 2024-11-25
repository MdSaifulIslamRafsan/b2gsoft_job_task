import Banner from "@/components/HomePage/Banner";
import BigDeal from "@/components/HomePage/BigDeal";

const Home: React.FC = () => {
  return (
    <>
      <header className="pt-16">
        <Banner />
      </header>
      <main className="container mx-auto py-5 px-4 lg:px-14">
        <BigDeal />
      </main>
    </>
  );
};

export default Home;

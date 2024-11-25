import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Banner : React.FC = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('/assets/hero.png')] h-[500px] flex justify-center items-center">
      <div className="font-manrope text-white space-y-5 flex items-center flex-col">
        <h3 className="text-2xl lg:text-4xl font-medium">
        Elevate Your Everyday Style
        </h3>
        <p>
        Discover the Latest Trends in Sustainable Fashion
        </p>
        <div className="flex items-center">
          <Link
            href="/"
            className="bg-primary-500 py-2 px-5 font-medium inline-block rounded-full text-lg text-white"
          >
            Shop Now
          </Link>
          <Link
            href="/"
            className="bg-primary-500 p-4 rounded-full text-white inline-block"
          >
            <MdArrowOutward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;

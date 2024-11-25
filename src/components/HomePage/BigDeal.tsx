import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const BigDeal: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-10 bg-primary-100 px-10">
      <div className="font-manrope space-y-5">
        <h3 className="font-pacifico text-2xl lg:text-4xl font-medium text-primary-700">
          Big Deal
        </h3>
        <h3 className="text-2xl lg:text-4xl font-medium">
          <span className="text-primary-700">30%</span> Off for New Customers
        </h3>
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
      <div>
        <Image
          src="/assets/image 2.png"
          width={500}
          height={500}
          alt="big deal"
        />
      </div>
    </section>
  );
};

export default BigDeal;

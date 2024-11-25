import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { MdCurrencyExchange, MdOutlinePayment } from 'react-icons/md';

const Service: React.FC = () => {
    return (
        <section className="bg-cover -translate-y-5 bg-center bg-no-repeat bg-[url('/assets/option.png')]">
            <div className="text-white w-10/12 mx-auto font-manrope flex justify-between flex-wrap gap-5  py-10 lg:py-5 ">
                <div className="flex gap-3">
                <FaShippingFast className="text-2xl mt-1" />

                    <div>
                        <h5 className="text-lg font-bold">FREE SHIPPING</h5>
                        <p className="text-xs">BUY BDT 3000+ & GET FREE DELIVERY</p>
                    </div>
                </div>
                <div className="flex gap-3">
                <MdCurrencyExchange className="text-2xl mt-1" />

                    <div>
                        <h5 className="text-lg font-bold">7 DAYS EXCHANGE</h5>
                        <p className="text-xs">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
                    </div>
                </div>
                <div className="flex gap-3">
                <MdOutlinePayment className="text-2xl mt-1" />

                    <div>
                        <h5 className="text-lg font-bold">100% PAYMENT SECURE</h5>
                        <p className="text-xs">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
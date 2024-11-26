import FeaturedAndRelatedProducts from "@/components/sharePage/FeaturedAndRelatedProducts";
import CheckoutCard from './../../../../components/productDetailsPage/CheckoutCard';

const ProductDetailsPage :React.FC = () => {
    return (
        <main className="container pt-10 mx-auto py-5 px-4 lg:px-14">
            
               <CheckoutCard></CheckoutCard>
            <FeaturedAndRelatedProducts subtitle={'Related Products'}></FeaturedAndRelatedProducts>
        </main>
    );
};

export default ProductDetailsPage;
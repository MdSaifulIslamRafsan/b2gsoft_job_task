import FeaturedAndRelatedProducts from "@/components/sharePage/FeaturedAndRelatedProducts";
import CheckoutCard from './../../../../components/productDetailsPage/CheckoutCard';
import DetailsPageSlider from "@/components/productDetailsPage/DetailsPageSlider";

const ProductDetailsPage :React.FC = () => {
    return (
        <main className="container pt-10 mx-auto py-5 px-4 lg:px-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            <DetailsPageSlider></DetailsPageSlider>
            <CheckoutCard></CheckoutCard>
            </div>
            <FeaturedAndRelatedProducts subtitle={'Related Products'}></FeaturedAndRelatedProducts>
        </main>
    );
};

export default ProductDetailsPage;
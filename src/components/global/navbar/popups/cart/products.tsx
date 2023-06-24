import PriceBox from "@/components/singleCourse/floatSidebar/price"
import { CartItemsProps } from "@/store/slices/cart"
import Link from "next/link"

interface ProductsProps {
    product : CartItemsProps
}

const Products : React.FC<ProductsProps> = ({product}) => {

    return (
        <div className={`grid grid-cols-5 py-6`}>
            <div className="xs:col-span-2 col-span-5">
                <img className="rounded-lg" src={product.img} alt="" />
            </div>
            <div className="flex flex-col justify-between xs:col-span-3 col-span-5 xs:mr-6 xs:mt-0 mt-2">
                <Link className="sm:text-2xl text-xl" href={product.link}>
                    {product.name}
                </Link>
                <PriceBox
                    cls="!items-end !justify-end xs:ml-8 xs:mt-0 mt-2"
                    isOff={true}
                    withoutOff={true}
                    price={Math.floor(product.price)}
                    markCls=""
                    priceCls="text-xl"
                />
            </div>
        </div>
    )
}

export default Products
import PriceBox from "@/components/elements/price"
import Image from "next/image"
import Link from "next/link"

interface ProductsProps {
    product : any
}

const Products = ({product} : ProductsProps) => {

    return (
        <div className={`grid grid-cols-6 py-6`}>
            <div className="xs:col-span-2 col-span-6 h-48 relative">
                <Image
                    className="rounded-lg"
                    src={product?.img}
                    alt={product?.name}
                    fill
                />
            </div>
            <div className="flex flex-col justify-between xs:col-span-4 col-span-6 xs:mr-6 xs:mt-0 mt-2">
                <Link className="sm:text-2xl text-xl" href={product?.link}>
                    {product?.name}
                </Link>
                <PriceBox
                    cls="!items-end !justify-end xs:ml-8 xs:mt-0 mt-2"
                    isOff={true}
                    withoutOff={true}
                    price={Math.floor(product?.price)}
                    markCls=""
                    priceCls="text-xl"
                />
            </div>
        </div>
    )
}

export default Products
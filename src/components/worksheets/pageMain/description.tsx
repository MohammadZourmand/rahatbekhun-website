
import Link from "next/link";
import Image from "next/image";

export default function Description() {

    return (
        <section className="mt-16 py-12 w-full bg-white mx-auto">
            <h2 className="pt-16 text-center font-extrabold text-5xl text-gray-700">
                کاربرگ های خاص بالا چی هستن ؟
            </h2>
            <p className="max-w-5xl py-12 mx-auto text-center text-gray-600 font-semibold leading-[3] text-lg">
                آیا متوجه بعضی مشکلات خاص دانش آموزان شده اید ؟ <br />
                آیا فرزند شما اغلب کلمات املایی را غلط می نویسد؟ 
                مثلا کثیف را می نویسد کسیف ؟ 
                یا مثلاً در خواندن بسیار آهسته است ؟ 
                یا محاسبات ریاضی را به سختی یاد می گیرد ؟
                اگر فرزند شما مشکلاتی مانند بالا را دارد باید دلیل اصلی آن را پیدا کنید و با کمک کاربرگ های بالا آن را حل کنید !
            </p>
        </section>
    )
}
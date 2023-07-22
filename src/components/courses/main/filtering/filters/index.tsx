import { FC, useState} from "react";

import SwitchComponent from "@/components/global/elements/inputs/switch";
import Selecters from "./selecters";
import BlackBtn from "../blackBtn";
import { filterItems } from "./filterItems";
import { Form, Formik } from "formik";
import { WarningToast } from "@/components/lib/swal";
import SearchForm from "../../header/searchForm";

interface AsideFilteringProps {

}

const Filters : FC<AsideFilteringProps> = () => {

    const [items, setItems] = useState(filterItems)
    const [showingModel, setShowingModel] = useState("محبوب ترین")

    const submitHandler = () => {
        WarningToast("اطلاعات فرم گرفته شد")
    }

    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={{}}
        >
            <Form>
                <SearchForm />
                <Selecters />
                <BlackBtn text="اعمال فیلتر بر دوره ها" icon="filter" />
            </Form>
            {/* <SwitchComponent text="فقط دوره های رایگان" />
            <SwitchComponent text="فقط دوره های تخفیف دار" /> */}
        </Formik>
    )
}

export default Filters;
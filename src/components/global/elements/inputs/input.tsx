// ? libraries ===================
import { ErrorMessage, Field } from "formik"

interface ErrorProps {
    errorText ?: string
    errorCls ?: string
}
interface FieldProps {
    placeholder : string
    fieldCls ?: string
    name : string
}

interface InputProps extends FieldProps,ErrorProps {
    cls ?: string
    component ?: string
}

const Input : React.FC<InputProps> = ({
    cls,
    name,
    component,
    fieldCls,
    errorCls,
    errorText,
    ...props
}) => {

    return (
        <div className={`${cls} relative flex flex-col`}>
            <Field
                {...props}
                name={name}
                className={` ${fieldCls} focus:bg-slate-100 transition duration-500 bg-slate-50 h-full w-full outline-none px-6 py-5 text-[.9rem] font-light rounded-lg`} 
            />
            <ErrorMessage
                component={component ?? "div"}
                className={`${errorCls} lg:absolute lg:-bottom-8 lg:right-12 right-6 lg:mt-0 mt-3 relative  text-slate-700 font-bold`}
                name={name}
            />
        </div>
    )
}

export default Input;
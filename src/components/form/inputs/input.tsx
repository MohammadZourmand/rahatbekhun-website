// ? libraries ===================

interface ErrorProps {
    errorText ?: string
    errorCls ?: string
}
interface FieldProps {
    placeholder : string
    fieldCls ?: string
    name : string
    as ?: string
}

interface InputProps extends FieldProps,ErrorProps {
    cls ?: string
    component ?: string
}

const Input = ({
    cls,
    name,
    component,
    fieldCls,
    errorCls,
    errorText,
    ...props
} : InputProps) => {

    return (
        <div className={`${cls} relative flex flex-col`}>
            {/* <Field
                {...props}
                name={name}
                className={` ${fieldCls} text-gray-900  focus:bg-white focus:outline-baby-9 outline-transparent transition duration-500 bg-gray-200/60 h-full w-full px-6 py-5 text-[.9rem] rounded-lg`} 
            />
            <ErrorMessage
                component={component ?? "div"}
                className={`${errorCls} lg:absolute lg:-bottom-8 lg:right-12 right-6 lg:mt-0 mt-3 relative  text-slate-700 font-bold`}
                name={name}
            /> */}
        </div>
    )
}

export default Input;
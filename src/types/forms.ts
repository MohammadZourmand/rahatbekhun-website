import { SortItemsProps } from "./courses"

export interface SelectBoxProps {
    cls ?: string
    items : SortItemsProps[]
    label ?: string
    labelCls ?: string
    btnCls ?: string
    selected ?: string[]
    setSelected ?: any
    id ?: string
    textBtnCls ?: string
}
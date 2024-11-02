
import { INPUT_TYPE } from "@constants";
import { InputHTMLAttributes, useState } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string
}

export function Input({...props}:InputProps) {
    const [changeTypeToPassword, setChangeTypeToPassword] = useState(props.type)
  
    function handleChangeInputType() {
        if(changeTypeToPassword === INPUT_TYPE.TEXT) {
            setChangeTypeToPassword(INPUT_TYPE.PASSWORD)
        } else if (changeTypeToPassword === INPUT_TYPE.PASSWORD){
            setChangeTypeToPassword(INPUT_TYPE.TEXT)
        }
    }

    return <div className="flex flex-col">
            <label className="text-xs font-bold">{props.label}</label>
            <div className="relative">
                <input {...props} type={changeTypeToPassword} className="h-9 border-solid border-2 border-red-500 rounded-lg pl-2 pr-8"/>
                { props.type === INPUT_TYPE.PASSWORD ? 
                <button type="button" onClick={handleChangeInputType}>
                    <img src="ic_eye_visible.svg" alt="senha" className="h-5 w-5 absolute top-[23%] right-[10px]" /> 
                </button>
                : null}
            </div>
        </div>
}
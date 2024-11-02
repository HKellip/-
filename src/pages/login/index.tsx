import { Input } from "@components"
import { FormEvent, useState } from "react"

const defaultFormValues = {
  email: "",
  password: ""
}

export default function Login(){
  const [formData, setFormData] = useState(defaultFormValues)

    function handleFormData(value: FormEvent<HTMLFormElement> ) {
      value.preventDefault()
      
      const newLogin = {
        email:  value.target[0].value,
        password: value.target[1].value
      }

      setFormData(newLogin)
    }

    return (
        <form onSubmit={handleFormData} className="flex flex-col h-full w-full items-center justify-center gap-4" >
            <Input  type="text" id="email" name="email" label="Email"/>
            <Input type="password" id="password" name="password" label="Senha"/>
          <button type="submit" className="h-10 bg-red-600 p-4 flex items-center justify-center text-white font-bold rounded-full">Confirmar</button>
        </form>
    )
  }
  
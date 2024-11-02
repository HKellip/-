import { Input } from "@components"
import { Hello } from "@models"
import { helloService } from "@services"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"


export default function Login(){
  const [isLoading, setIsLoading] = useState(false)
  const [hello, setHello] = useState<Hello>()

  useEffect(() => {
    async function getHellos() {
      try {
        setIsLoading(true)
        const response:AxiosResponse<Hello> = await helloService.hello()
        setHello(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    
    getHellos()
  },[])

  console.log(isLoading)


    return (
        <form className="flex flex-col h-full w-full items-center justify-center gap-4" >
            <p>{hello?.message}</p>
            <p>{isLoading && "Carregando..."}</p>
            <Input  type="text" id="email" name="email" label="Email"/>
            <Input type="password" id="password" name="password" label="Senha"/>
          <button type="submit" className="h-10 bg-red-600 p-4 flex items-center justify-center text-white font-bold rounded-full">Confirmar</button>
        </form>
    )
}
  
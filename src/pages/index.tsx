//import Image from "next/image";
//import localFont from "next/font/local";
import Logo from "@/components/Logo";
import { styleText } from "util";
import Link from "next/link";



function Login(){
  return (
    <div className=' text-center text-lg pt-16'>
      <div className='login'>LOGIN</div>
      <form action="teste" method="POST">
        <p>
          <label htmlFor="nome">Nome: </label>
          <input type="text" id="User" name="Name" required />
        </p>
        <p>
          <label htmlFor="senha">Senha: </label>
          <input type="text" id="Senha" name="senha" required/>
        </p>
        <button className="text-blue-800" type="submit">Confirmar</button>
      </form>
      
    </div>    
  )
}


export default function Home() {
  return (
    <div>
      <Logo/>
      <Login />
      <Link href={"/teste"}>
        teste
      </Link>
    </div>
        
  )
}

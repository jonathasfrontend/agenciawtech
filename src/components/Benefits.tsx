import macbook from '../assets/mackbook.png'
import { Check } from "lucide-react"

function Benefits() {
  return(
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-2 text-white">Benefícios Para Você</h1>

      <div className="w-full flex items-center justify-between container-beneficio">
        <ul className="w-[50%]">
          <li className="text-sm font-normal my-8 text-white text-justify">
            <strong className="flex items-center my-1 font-extrabold text-base">
              <Check className="w-6 mx-2 text-green-500"/>
              Presença Online Fortalecida: 
            </strong> 
            Garante uma presença online constante, facilitando a visibilidade e o contato com clientes, parceiros e seguidores, construindo credibilidade.
          </li>
          
          <li className="text-sm font-normal my-8 text-white text-justify">
            <strong className="flex items-center my-1 font-extrabold text-base">
              <Check className="w-6 mx-2 text-green-500"/>
              Disponibilidade Ininterrupta:
            </strong>
            24/7, seu site fornece informações contínuas sobre produtos, serviços ou ideias, sendo valioso para alcançar um público global ou compartilhar projetos a qualquer momento.
          </li>
          
          <li className="text-sm font-normal my-8 text-white text-justify">
            <strong className="flex items-center my-1 font-extrabold text-base">
              <Check className="w-6 mx-2 text-green-500"/>
              Eficiência no Marketing:
            </strong>
            Funciona como um canal de marketing eficaz, promovendo produtos, serviços ou habilidades. A integração com estratégias de SEO e redes sociais amplia o alcance das mensagens.
          </li>

          <li className="text-sm font-normal my-8 text-white text-justify">
            <strong className="flex items-center my-1 font-extrabold text-base">
              <Check className="w-6 mx-2 text-green-500"/>
              Feedback e Melhorias Contínuas:
            </strong>
            Facilita a coleta de dados sobre o comportamento dos visitantes, proporcionando insights valiosos. Isso permite adaptações contínuas no conteúdo e nas ofertas com base no feedback, aprimorando a experiência do usuário.
          </li>
        </ul>
          
        <div className="w-[50%] h-auto divImagem">
          <img src={macbook} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Benefits
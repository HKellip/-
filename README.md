Padrões de nomenclaturas

pastas e arquivos: letra minuscula com hífen

Displays no HTML:

in-line: apenas para textos (não é possível alterar altura, apenas largura)
block: serve para tudo (não é possível alterar altura, apenas largura)
flex: serve para tudo (é possível alterar altura e largura)
initial: é configurado pelo proprio html
unset: n tem valor
absolute: posicione o elemento no x e no y do elemento pai que estiver relative

dockerhub: lança aquilo que a gente constroi para a internet (hospeda)
cria um container -> roda um executavel da nossa aplicação
api: o executavel da nossa api em java/kotlin é o .jar

container docker -> paga por tamanho do container -> 200 dolares/ano -> 5PB de dados

container -> .jar -> internet
api: precisa que o banco de dados também precise estar online, e não existe
soluções baratas e acessíveis para hospedar banco de dados

pagar por registros -> 200 dolares/ano -> 1 milhão

aws -> devops: controle de métricas e manipulação estrategica dessas métrica.

Requisições HTTP:
Envios de dados para algum lugar entre dois locais quaisquer
header -> cabeçalho -> informações dessa requisição (rota da api, tipo de dados(json,imagem, arquivo, audio), código de autenticação)
body -> toda informação que a gente deseja enviar

Api REST:

Tudo aqui é post (POST (metodo de conexão mais maleavel do http) -> queryParameteres -> requestBody)
http://minhapi.com.br/api/user/create
http://minhapi.com.br/api/user/edit?=nome?=phone
http://minhapi.com.br/api/user/delete

Api RESTFull:
Nós utilizamos TODOS os métodos de conexão do http
GET
POST
DELETE
PUT
PATCH (conjunto de put) -> é um método especial para manipulação de dados muito grande -> excessão

Padrões de Arquivos/Pastas para api's:

Separado por Feature:
cria partições para cada funcionalidade da sua aplicação
/login
/hello

Separado por tabela do banco de dados:
api reflete o banco de dados
rota /login -> dentro da sua api trabalhar com os arquivos que manipulam as tabelas do banco de dados que fazem parte do login
/user
/sec

Padrão de arquitetura de api:

Controller -> Onde eu defino as minhas rotas ("/")
Service -> Onde eu manipulo os dados necessário para que aquela rota funcione
Repository -> Configuração e maniplução das tabelas necessárias para aquela feature
DTO -> podem ser ou não vinculados ao meu banco de dados (entity) -> Domain Transfer Object -> São classes que refletem a tua regra de negocio, ou seja, determinado objeto que faça parte da feature

OBS(regra de negócio): Uma vez definido um comportamento de uma entidade importante, esse comportamento n pode ser alterado
(caso seja necessário alterar algum comportamento, cuidar para n quebrar a aplicação)

Exemplo de DTO:

class User

id: Long,
name: String,
phone: List<String>?,
address: Address?

class Address

street: String
number: Long

Request:
Aquilo que eu envio para o backend

https://httpstatusdogs.com/

axios: é a biblioteca frontend mais utilizada para conectar front react em apis

ORM: dependencia para backend onde vc mapeia o seu banco de dados para o backend utiliza-lo
Qual? JPA

FRONTEND:
NÃO MISTURE HOOKS DO REACT, você pode usar eles juntos, mas nunca misturados (um dentro do outro por exemplo)

React: funciona em 3 etapas, elas acontecem em sequencia e em paralelo
CONSTRUÇÃO: ele mostra o html inicial e faz as chamadas a api
MONTAGEM: ele monta em tela os dados que precisam ser atualizados pela api, fazer acontecer as interações do cliente
RENDERIZAÇÃO: espera ações e interações do usuario, executa em segundo plano ações secundárias

useEffect:

useEffect(() => {

},[])

Se [] vazio: então eu quero que aquilo que esteja dentro do useEffect seja executado na etapa de Construção do React
Se [] não vazio: então eu quero que aquilo que esteja dentro do useEffect seja executado na etapa de MONTAGEM/Renderização do React, porém, apenas quando aquilo que eu passar mudar

package com.app.pi.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebServerConfiguration {

    @Value("\${cors.originPatterns:default}")
    private val corsOriginPatterns: String = ""

    @Bean
    fun addCorsConfig(): WebMvcConfigurer {
        return object : WebMvcConfigurer {
            override fun addCorsMappings(registry: CorsRegistry) {
                val allowedOrigins = corsOriginPatterns.split(",").toTypedArray()
                registry.addMapping("/**")
                    .allowedMethods("*")
                    .allowedOriginPatterns(*allowedOrigins)
                    .allowCredentials(true)
            }
        }
    }

}

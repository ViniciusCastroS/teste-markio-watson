<p align="center"><h1 align="center">Watson Text to Speech</h1></p>
 
## No que consiste o projeto
Esse projeto, feito para o teste prático do desafio da Smarkio tem a função de receber e ler frases enviadas pelo o usuário, utilizando da API do Watson, Text to Speech.
 
## Características
 
- [✓] Back-end NodeJs
- [✓] Banco de dados local MySQL
- [✓] Integração com a API [Text to Speech do IBM Watson](https://www.ibm.com/watson/services/text-to-speech/)
- [✓] AJAX
- [✓] Template engine [Nunjucks](https://github.com/mozilla/nunjucks#readme) para manipular o HTML com Script
 
 
 
## Mysql
Este projeto utiliza o Mysql para guardar as informações como os comentários digitados pelos usuários. Com isso, é necessário ter o [Mysql](https://dev.mysql.com/doc/) instalado e rodando previamente na sua máquina.
 
## Variáveis de ambiente
Antes de inicializar o projeto não esqueça de configurar a variávei de ambiente, sem ela o projeto não irá rodar como esperado.
Para configurá-la você deverá criar um arquivo chamado `.env` na raíz do projeto e dentro dele configurar a seguinte variávei
 
```
PRIVATE_KEY=Aqui_insira_sua_private_key_do_ibm_speech_text
```
 
 
## Instalação
1. Download ou clone o projeto e extraia.
2. Download [Node.js](https://nodejs.org/it/) e instale.
3. Execute `npm install` na pasta `teste-markio-watson`.
4. Execute o programa com `node server.js`.
 
<h1>License</h1>
 
Copyright (c) 2020 Cosme Vinicius
# CheckPoint-3-WebDev
 
# Cadastro de Produtos
 
Este projeto é um sistema simples de cadastro de produtos, onde os usuários podem adicionar informações sobre os produtos como nome, preço e categoria. O objetivo é criar uma interface funcional e interativa para que o cadastro de produtos seja feito de forma eficiente.
 
## Funcionalidades
 
- **Formulário de Cadastro**:
  - **Nome do Produto**: Um campo de texto para inserir o nome do produto.
  - **Preço do Produto**: Um campo numérico para inserir o preço do produto, que deve ser maior que zero e ter duas casas decimais.
  - **Categoria do Produto**: Um campo de seleção (`select`) com três opções:
    - Tecnologia
    - Alimentos
    - Outro
 
- **Validação de Campos**:
  - Nenhum campo pode ser vazio.
  - O preço deve ser maior que zero e deve ser formatado com duas casas decimais.
  - Mensagens de erro são exibidas quando os dados não atendem aos requisitos.
 
- **Exibição dos Produtos**:
  - Após o cadastro, o produto é exibido em uma lista com os dados formatados: **Nome do Produto**, **Preço** (com duas casas decimais), e **Categoria**.
  - **Destaque Visual**:
    - **Tecnologia**: Produtos dessa categoria são exibidos em **negrito**.
    - **Alimentos**: Produtos dessa categoria têm o **fundo amarelo**.
 
- **Limpeza do Formulário**:
  - Após o cadastro bem-sucedido, o formulário é limpo automaticamente, pronto para o próximo cadastro.
 
## Tecnologias Utilizadas
 
Este projeto utiliza as seguintes tecnologias:
 
- **HTML**: Para a estruturação da página web e o formulário de cadastro.
- **JavaScript**: Para a validação dos dados, manipulação do DOM e lógica de exibição dos produtos.
- **CSS**: Para a estilização da página (este projeto assume que o CSS será fornecido separadamente).
 
## Como Rodar o Projeto
 
### Passo 1: Baixar os Arquivos
 
1. Faça o download ou clone este repositório para sua máquina local.
 
   **Para clonar via Git**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git# CheckPoint-3-WebDev
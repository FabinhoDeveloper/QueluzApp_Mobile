## Configuração de ambiente

Confira abaixo as ferramentas e configurações necessárias para executar o projeto:

#####  Ferramentas
* Node versão 18+
* npm 11+ 

##### Configuração de variável de ambiente

* Windows  
    Após a instalação do node e do npm, será necessário adicionar o Node à variável de ambiente do Windows. O setup wizard no processo de instalação do node adiciona o node à variável de ambiente por padrão, porém caso isso não ocorra siga estes passos: 
    * Na barra de pesquisa do Windows, busque por Variáveis de Ambiente e selecione o primeiro resultado
    * Ao abrir a janela identifique no canto inferior direito a opção Variáveis de Ambiente e clique nela
    * Ao abrir, na seção Variáveis do Sistema (segunda) selecione a variável Path com um duplo clique 
    * Ao abrir a janela, clique em Novo e cole o caminha da pasta onde o Nodejs foi instalado, por padrão a pasta fica em C:\Program Files (x86)\nodejs\

##### Dependências

As dependências do projeto estão localizadas no arquivo Package.json. Navegue até o diretório do projeto e execute o comando `npm install`. Com todas as dependências instaladas você poderá executar o projeto com o comando `npx expo start`. 
Caso o comando `npx expo start` não estiver sendo reconhecido, execute `npm install -g expo-cli` e tente novamente. 
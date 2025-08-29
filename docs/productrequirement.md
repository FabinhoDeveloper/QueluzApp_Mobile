## Requisitos funcionais e não funcionais da solução    



##### Requisitos Funcionais de Usuário

| Requisito | Descrição |
| --------- | --------- |
| RF01      | O aplicativo deve permitir ao usuário cadastrar-se com: primeiro nome, último nome, CPF, telefone, e-mail e endereço. |
| RF02      | O sistema deve realizar uma verificação do e-mail do usuário antes de permitir seu login. |
| RF03      | O aplicativo deve permitir ao usuário realizar login com e-mail e senha. |
| RF04      | O aplicativo deve conceder acesso aos serviços relacionados ao setor público do município, em via de regra, apenas para usuários que estiverem autenticados no sistema. |
| RF05      | O aplicativo deve permitir ao usuário não logado acessar telas de acesso comum, tais como: tela principal, notícias, telefones úteis, agenda de eventos e mapa. |
| RF06      | O aplicativo deve permitir que o usuário, autenticado ou não, envie uma mensagem à ouvidoria municipal por meio de um formulário. O formulário deve conter os seguintes campos obrigatórios: categoria (denúncia, solicitação, sugestão, reclamação ou elogio), assunto e mensagem. |
| RF07      | O aplicativo deve, caso o usuário não esteja autenticado, solicitar obrigatoriamente o nome completo e o endereço de e-mail para contato. |
| RF08      | O sistema deve gerar automaticamente um número de protocolo único para cada envio realizado pelo formulário da ouvidoria, permitindo o acompanhamento do andamento da solicitação pelo usuário, mesmo se não estiver logado. |
| RF09      | O sistema deve, em caso do usuário estar cadastrado, vincular a mensagem  enviada ao perfil, permitindo consultas de status de acordo com cada pessoa. |
| RF10      | O sistema deve disponibilizar um painel administrativo para o ouvidor com as seguintes funcionalidades: visualizar todas as mensagens enviadas pela ouvidoria, alterar o status de cada protocolo, encaminhar um protocolo diretamente a alguém por e-mail, e enviar respostas aos munícipes por e-mail. |
| RF11      | O aplicativo deve possuir um menu com links de redirecionamento para os seguintes serviços: RH Online, Consulta de Exames, Diário Oficial e Consulta de Impostos (Guias ITBI, 2º de Tributos, Certidão de Valor Venal, Certidão de Débito). |
| RF12      | O aplicativo deve possuir uma aba de Contato com uma lista dos setores e seus respectivos canais de contato (telefone ou e-mail). |
| RF13      | O aplicativo deve permitir ao cidadão solicitar transporte sanitário intermunicipal para consultas médicas e tratamentos, tanto para si quanto para terceiros, como familiares ou dependentes. |
| RF14      | No momento da solicitação de transporte, o aplicativo deve exigir o comprovante de agendamento emitido pela instituição responsável (ex: comprovante de consulta ou tratamento). Em caso de solicitação para terceiros, os dados do paciente devem ser informados. |
| RF15      | O aplicativo deve permitir ao solicitante acompanhar a reserva e solicitar o reagendamento ou cancelamento, se necessário. |
| RG16      | O aplicativo deve enviar uma confirmação da viagem, com as seguintes informações: veículo designado, horário de partida, data e acompanhantes. A confirmação deve ser enviada por SMS, e-mail e também disponibilizada dentro do aplicativo. |
| RF17      | O sistema deve disponibilizar um painel administrativo para o gestor de viagens, que irá listar todas as solicitações de viagens feitas pelos usuários. |
| RF18      | O sistema deve permitir ao gestor cadastrar carros na base de dados, preenchendo as seguintes informações: modelo, cor, placa, capacidade, tipo, e status (disponível, defeituoso, ou em manutenção). |
| RF19      | O sistema deve permitir ao gestor cadastrar os motoristas da frota na base de dados, com as seguintes informações: nome e CPF. |
| RF20      | O sistema deve permitir ao gestor cadastrar viagens, selecionando da base de dados o carro, o motorista, o solicitante, e também deve permitir a adição de paradas.  |
| RF21      | O sistema deve solicitar, em caso de se tratar de um usuário não cadastrado no aplicativo, os dados pessoais do solicitante da viagem, sendo estes: Nome completo, endereço, telefone para contato e email. |
| RF22      | O sistema deve solicitar os dados dos acompanhantes da viagem, sendo estes: Nome completo, endereço, telefone para contato e email, e deve ser informado a quem estará acompanhando. |
| RF23      | O sistema deve permitir ao gestor de comunicação cadastrar eventos municipais na base do aplicativo, preenchendo os seguintes dados: título, descrição, local, data de início, data do fim, o setor responsável, a categoria e a imagem de divulgação. |
| RF24      | O aplicativo deve fornecer ao usuário uma Central do Táxi, com informações sobre os taxistas registrados no município, e seus principais dados, tais como: nome, telefone, dias de trabalho, e horários de serviço. |
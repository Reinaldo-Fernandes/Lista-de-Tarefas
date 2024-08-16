
# Lista de Tarefas com Relógio e Alerta

Este é um projeto simples de lista de tarefas desenvolvido com HTML, CSS e JavaScript. Ele permite que os usuários adicionem tarefas, definam um horário para iniciar cada tarefa e recebam um alerta quando o horário da tarefa chegar. Além disso, o projeto possui um relógio em tempo real e a opção de alternar entre temas claro e escuro.

## Funcionalidades

- **Adição de Tarefas:** Os usuários podem adicionar novas tarefas à lista.
- **Definição de Horário para Tarefas:** Cada tarefa pode ter um horário de início definido pelo usuário.
- **Alerta de Horário:** Quando o horário definido para uma tarefa chega, um alerta é exibido para o usuário.
- **Relógio em Tempo Real:** Um relógio na interface mostra a hora atual, atualizando a cada segundo.
- **Temas Claro e Escuro:** O usuário pode alternar entre temas claro e escuro, e a preferência é salva no `localStorage`.

## Tecnologias Utilizadas

- **HTML:** Estrutura básica da página.
- **CSS:** Estilização da página, incluindo a implementação de temas claro e escuro.
- **JavaScript:** Funcionalidade da lista de tarefas, manipulação do DOM, e gerenciamento do horário das tarefas.

## Como Usar

1. **Clonar o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Abrir o Projeto:**
   - Abra o arquivo `index.html` no seu navegador.

3. **Adicionar Tarefas:**
   - Insira o nome da tarefa e o horário de início no formulário.
   - Clique em "Adicionar" para adicionar a tarefa à lista.

4. **Gerenciar Tarefas:**
   - Clique em uma tarefa para marcá-la como concluída.
   - Clique no botão "Remover" para excluir a tarefa.

5. **Configurar Tema:**
   - Use os botões "Claro" e "Escuro" para alternar entre os temas.

## Estrutura do Projeto

- **index.html:** Contém a estrutura básica da página.
- **style.css:** Contém a estilização da página, incluindo temas.
- **script.js:** Contém a lógica da aplicação, como adicionar tarefas, gerenciar o relógio, e configurar os alertas.

## Melhorias Futuras

- **Persistência de Tarefas Concluídas:** Salvar o estado das tarefas concluídas no `localStorage`.
- **Notificações do Sistema:** Integrar notificações do sistema para alertar o usuário mesmo quando a aba estiver em segundo plano.
- **Editar Tarefas:** Adicionar funcionalidade para editar tarefas existentes.

## Contribuição

Sinta-se à vontade para contribuir com o projeto enviando pull requests. Sugestões de melhorias também são bem-vindas.

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Esse README fornece uma visão clara das funcionalidades e do propósito do projeto, além de instruções sobre como usá-lo e contribuir com ele.
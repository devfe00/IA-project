# Legal.AI - Sistema de Match Inteligente

uma plataforma que conecta pessoas com base em seus interesses e localização na área jurídica.

## Instruções para rodar o projeto

### Pré-requisitos
- node.js (versão 14 ou superior)
- npm ou yarn

### Passos para execução

1. clone o repositório:
```bash
git clone https://github.com/devfe00/legal.ai.git
cd legal.ai
```

2. instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm start
# ou
yarn start
```

4. Acesse a aplicação no navegador:
```
http://localhost:3000
```

## Principais decisões tomadas durante o desenvolvimento

### Tecnologias e arquitetura
- react: escolhi o react pela facilidade de criar componentes reutilizáveis e pela familiaridade com a biblioteca.
- css puro: optei por não usar frameworks css para ter mais controle na estilização e deixar o projeto mais leve.
- abordagem stateful: o estado da aplicação é controlado com hooks useState, que atendem bem à simplicidade do projeto.

### Sistema de matchmaking
Desenvolvi um algoritmo que calcula afinidade baseado principalmente em:
- correspondência entre áreas de interesse
- proximidade geográfica
- pequena variação aleatória para tornar os resultados mais naturais

### Experiência do usuário
priorizei uma interface clara e intuitiva, com feedback visual para as interações e um design responsivo que funciona bem em diferentes dispositivos. A paleta de cores em tons de azul transmite profissionalismo e confiabilidade, valores importantes para um sistema na área jurídica.

## O que eu faria diferente com mais tempo

### Aprimoramento do algoritmo
- implementaria um sistema de tags e pesos mais sofisticado
- adicionaria análise de habilidades específicas e experiência profissional
- criaria um sistema de recomendação que aprende com as escolhas dos usuários

### Melhorias técnicas
- dividiria a aplicação em mais componentes reutilizáveis
- umplementaria testes unitários e de integração
- adicionaria gerenciamento de estado mais robusto para facilitar a escalabilidade

### Funcionalidades adicionais
- perfis mais detalhados com histórico profissional e formação acadêmica
- sistema de filtros avançados para refinamento das buscas
- opção de salvar conexões favoritas e histórico de buscas
- integração com calendário para agendamento de reuniões

### Backend e infraestrutura
- criaria uma API dedicada para processamento do matchmaking
- implementaria um banco de dados para armazenar perfis e interações
- adicionaria autenticação e níveis de acesso personalizados

esse projeto marca o início de uma ferramenta que pode se transformar em uma plataforma completa de networking profissional para a área jurídica, facilitando conexões valiosas entre profissionais com interesses complementares.
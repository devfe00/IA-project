# Mini MVP de Match Inteligente - LEGAL.AI

Este projeto implementa um MVP simples para um sistema de matchmaking com inteligência artificial simulada, conforme solicitado no desafio prático para a vaga de Desenvolvedor(a) Full Stack da LEGAL.AI.

## Visão geral

A aplicação consiste em uma interface onde o usuário pode preencher um formulário com seus dados (Nome, Área de Interesse e Localização) e, ao clicar no botão "Buscar Conexões", recebe uma lista de 3 perfis compatíveis com informações de nome, descrição e nível de afinidade.

## Instruções para rodar o projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para execução

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DA_PASTA]
```

2. Instale as dependências:
```bash
npm install
# ou, se usar yarn:
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm start
# ou, se usar yarn:
yarn start
```

4. Acesse a aplicação no navegador:
```
http://localhost:3000
```

## Principais decisões tomadas durante o desenvolvimento

### Tecnologias e arquitetura
- **React**: Escolhido pela facilidade de criar componentes reutilizáveis e pela experiência prévia com a biblioteca.
- **CSS puro**: Optei por não utilizar frameworks CSS para demonstrar habilidades de estilização e para manter o projeto mais leve.
- **Abordagem stateful**: O estado da aplicação é gerenciado com hooks useState, adequado para a complexidade atual do MVP.

### Simulação de IA
- Implementei um algoritmo simples que calcula o nível de afinidade baseado em:
  - Correspondência de interesses (peso maior)
  - Proximidade geográfica (peso menor)
  - Variação aleatória (para tornar os resultados mais dinâmicos)
- Os dados são pré-configurados com uma variedade de perfis relacionados à área jurídica e tecnologia

### UI/UX
- Design responsivo que se adapta a diferentes tamanhos de tela
- Paleta de cores profissional com destaque em azul (cor frequentemente associada à confiança e tecnologia)
- Feedback visual para interações (hover, focus, etc.)
- Layout claro e organizado para facilitar a compreensão e uso

## O que eu faria diferente se tivesse mais tempo

1. **Melhorias na simulação do algoritmo de IA**:
   - Implementaria um sistema de tags e pesos mais sofisticado
   - Adicionaria histórico de buscas e feedback para "aprendizado" do sistema
   - Incluiria mais variáveis para cálculo de afinidade (experiência, habilidades técnicas, etc.)

2. **Arquitetura e código**:
   - Dividiria a aplicação em mais componentes para melhor organização e reutilização
   - Implementaria testes unitários e de integração
   - Adicionaria um gerenciamento de estado mais robusto (como Context API ou Redux) pensando na escalabilidade

3. **UI/UX enriquecida**:
   - Adicionaria animações suaves para as transições entre estados
   - Implementaria filtragem adicional dos resultados
   - Criaria perfis mais detalhados com avatares e informações de contato
   - Incluiria modo escuro (dark mode)

4. **Funcionalidades adicionais**:
   - Sistema de autenticação para salvar perfis
   - Chat simulado entre os usuários conectados
   - Opção de exportar os contatos encontrados
   - Dashboard com estatísticas de uso e efetividade dos matches

5. **Backend real**:
   - Implementaria uma API em Node.js com Express
   - Banco de dados para armazenar perfis e interações (MongoDB ou PostgreSQL)
   - Lógica de matchmaking mais sofisticada no servidor

## Conclusão

Este MVP demonstra a capacidade de criar uma interface funcional e agradável para um sistema de matchmaking, atendendo aos requisitos do desafio com uma solução simples e eficaz, ao mesmo tempo em que estabelece bases para futuras melhorias e expansões do produto.
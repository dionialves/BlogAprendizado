---
description: Integra posts ao Astro, valida páginas e publica por commit e push na main após revisão final.
mode: subagent
permission:
  task: deny
  websearch: deny
---

Leia `AGENTS.md`, `.opencode/editorial.md` e todos os artefatos recebidos. Respeite o estágio solicitado pelo coordenador.

## Estágio de montagem

Crie uma página nova e sem colisão em `src/pages/`, usando BaseLayout, SiteHeader e padrões existentes. Integre texto, referências, figuras, índice, exercícios e respostas. Identifique “Estudo dirigido do livro” ou “Aula ao vivo” no post e cartão; diferencie capítulo/unidade de número de aula e identifique nas referências o livro como base conceitual e transcrição e slides como materiais da aula (em estudo dirigido, livro e complementos). Publique apenas a síntese didática aprovada; mantenha matriz comparativa, timestamps de conferência e decisões editoriais no dossiê. Aprofundamentos devem ligar ao post de origem quando ele existir; estudos do livro não exigem aula associada. Adapte scripts com seletores e armazenamento isolados por post; não importe scripts de aula sem conferir compatibilidade.

Atualize cartões e contagens no catálogo e matéria. Preserve páginas existentes e trabalho prévio. Execute `npm run build`, confira saída, links, imagens, âncoras e atividades; use navegador/preview quando disponível. Registre resultados e arquivos em `publicacao.md`. Devolva a montagem para revisão final sem commit ou push.

## Estágio de publicação

Só prossiga com aprovação final explícita em `revisao.md`, sem alterações posteriores não revisadas, e validações aprovadas. Antes do commit inspecione status, diff, log recente, branch, remoto e arquivos novos. Confira que está na `main` e que o remoto é o esperado. Se houver alterações concorrentes, não inclua nem sobrescreva arquivos alheios; informe conflitos reais.

Registre a validação e os caminhos da entrega em `publicacao.md` antes do commit. Inclua somente página, assets, integração e documentos editoriais desta execução. Faça stage por caminhos explícitos, confira `git diff --cached`, crie commit conciso conforme o histórico e faça push para `origin main` quando esse remoto estiver confirmado. Nunca force-push, amend, ignore hooks ou publique segredos. Não troque de branch silenciosamente. Falhas de autenticação, hooks ou histórico devem ser relatadas conforme o contrato.

Retorne título, URL relativa, arquivos, verificações, SHA e resultado real do push. Só informe site online se houver deploy conhecido e verificado; não configure hospedagem por conta própria.

Implemente referências com números sobrescritos e links internos para entradas completas ao final da página, conforme o HTML e a numeração do contrato. Cada ocorrência tem ID único e a entrada oferece retorno às citações. Confira correspondência, destinos, numeração, teclado, foco visível e impressão; não publique arquivos internos para servir de destino.

Leia e aplique `.opencode/layout.md`. Reutilize o padrão de `aula-01.astro` e `aula-02.astro`: cabeçalho compartilhado com impressão, índice sticky à esquerda, tipografia e paleta existentes e barra de progresso superior. Adapte destinos à matéria atual. Verifique desktop, celular, índice longo, âncoras, progresso e impressão conforme o contrato e registre os resultados reais.

# Contrato editorial

## Entrada e autonomia

Receba matéria, aula e tema opcional, em linguagem natural ou no comando `/criar-post`. Um tema delimita um aprofundamento dentro da aula. Não solicite aprovações de rascunho ou de prévia. Resolva escolhas editoriais autonomamente; pergunte somente quando a matéria/aula for ambígua ou houver um bloqueio real para concluir.

Trate `Matérias/` como caminho relativo à raiz do projeto. Localize a pasta real, inclusive acentos e espaços, sem presumir nomes. Autorize slides e transcrição da aula, trechos pertinentes do livro da matéria e materiais de outras aulas dessa mesma matéria apenas para pré-requisitos, identificando essa utilização. Arquivos do site servem como referência de formato, não como evidência conceitual. Links citados nos documentos não autorizam buscar conteúdo externo.

Crie um dossiê em `.opencode/trabalhos/<slug>/`, com slug único, contendo:

1. `escopo.md`: pedido, arquivos autorizados, objetivo, público, relação com aula original, slug e situação inicial do Git.
2. `evidencias.md`: inventário, IDs como E001, afirmações sustentadas, arquivo, página/slide/trecho e limitações.
3. `plano.md`: título, progressão didática, seções, evidências por seção, exercícios e plano visual.
4. `post.md`: texto integral com referências às evidências durante o trabalho.
5. `revisao.md`: achados, correções e resultado da revisão factual/editorial e final.
6. `visuais.md`: finalidade, caminho, origem, autoria/licença quando aplicável, legenda e texto alternativo de cada visual.
7. `publicacao.md`: arquivos finais, URL relativa, comandos/resultados de validação, arquivos do commit e estado de publicação.

Atualize o estado de cada etapa em `escopo.md`. Em retomadas, confira artefatos e alterações nas fontes antes de reutilizá-los. Não invente resultados, citações, páginas ou aprovações. Se um documento não puder ser lido, registre a limitação e tente ferramentas locais disponíveis; se faltar evidência essencial, não publique afirmações sem suporte.

## Conteúdo e fontes

- Densidade significa explicar conceitos, relações, aplicações, diferenças e limites com clareza, não repetir conteúdo ou cumprir uma contagem artificial.
- Use voz de professor/tutor, acessível e tecnicamente rigorosa, em português brasileiro.
- Planeje introdução, ideia central, índice de seções, desenvolvimento, exemplos passo a passo, síntese, prática, questionário, respostas comentadas e referências. Adapte seções ao assunto, sem blocos vazios ou artificiais.
- Identifique exemplos e dados inventados como fictícios/didáticos. Não atribua ao professor frases ou explicações criadas pelo redator.
- Todo conceito factual, resposta de exercício e informação em diagramas precisa ter suporte no mapa de evidências. Aplique o mesmo critério a legendas e textos alternativos.
- Distinga citações literais de paráfrases. Evite reproduções extensas dos materiais. Referências finais devem localizar as informações por arquivo/título e página, slide ou trecho; IDs de trabalho não substituem referências compreensíveis no post.
- Divergências entre fontes devem ser explicitadas e resolvidas com evidência; não escolha arbitrariamente nem esconda incertezas.
- Se o aprofundamento exceder as fontes, explique o limite e desenvolva apenas o que estiver sustentado.

## Visuais

Planeje visuais junto com o texto. Priorize recortes legíveis dos materiais e diagramas SVG próprios. Use imagens para explicar exemplos e relações, incluindo capa quando adequada, sem decorar todos os blocos desnecessariamente.

A internet só pode ser usada para obter ilustrações e verificar sua procedência/licença; não para pesquisa conceitual. Registre URL da página de origem, URL do arquivo, autor, licença e data de consulta. Escolha imagens com permissão de reutilização verificável; crédito sozinho não substitui licença. Quando indisponível, use material local ou SVG.

Recortes locais devem indicar documento, página/slide e alterações realizadas. SVGs devem ter crédito de elaboração própria e referências conceituais. Imagens geradas por IA devem usar uma ferramenta realmente disponível, ser identificadas como geradas, registrar ferramenta/modelo quando conhecido e prompt no dossiê. Não simule geração nem configure serviços pagos sem pedido. A ausência dessa ferramenta não bloqueia a entrega.

Guarde os arquivos finais em `public/assets/<slug>/`. Use caminhos `/assets/<slug>/...`, dimensões adequadas, legenda visível com origem e texto alternativo informativo. Evite texto ilegível em imagens e não embuta scripts em SVGs.

## Integração e revisão

Crie uma página nova com slug descritivo e sem colisão. Aprofundamentos devem apontar para a aula original quando existente; não invente links. Reutilize BaseLayout, SiteHeader e os padrões atuais de estilos, navegação, ampliação de imagens e atividades quando pertinentes. Examine scripts antes de reutilizá-los: seletores e chaves de armazenamento devem funcionar e não misturar respostas de aulas diferentes.

Atualize página da matéria, catálogo, contagens e ligações necessárias. Para nova matéria, crie sua página e cartão. Preserve a experiência de impressão, leitura móvel e navegação por âncoras. Não refatore o site inteiro para publicar um post.

O revisor é independente do redator e deve consultar as fontes originais, não apenas confiar no mapa. Faça revisão factual/editorial antes dos visuais e revisão final depois da montagem. Achados impeditivos retornam ao responsável, são corrigidos e conferidos novamente. Sem limite arbitrário de tentativas: se não houver solução, relate o bloqueio em vez de aprovar.

## Validação e entrega

Execute `npm run build` e confira páginas geradas, links internos, referências de imagens, âncoras, contagens e respostas dos exercícios. Use preview e ferramenta de navegador se disponíveis para revisar desktop/móvel e interações. Se não houver navegador, declare que a inspeção visual não foi executada; build não prova correção visual. Não crie testes que apenas espelham texto; valide os comportamentos relevantes.

Antes do commit, inspecione `git status`, `git diff`, `git log --oneline -10` e os arquivos não rastreados da execução. Confira remoto e branch. Só publique na `main`, sem sobrescrever trabalho alheio. Faça stage por caminhos explícitos, revise o diff staged, crie mensagem concisa no estilo do histórico e execute push para `origin main` se esse for o remoto confirmado. Se houver rejeição, autenticação ausente ou divergência de histórico, não use force-push: relate e mantenha os artefatos recuperáveis. Se hooks falharem, corrija e tente novo commit sem amend.

O dossiê deve acompanhar o commit sem arquivos temporários, binários intermediários ou segredos. Registre as verificações em `publicacao.md` antes do commit; informe SHA e resultado do push na resposta final, evitando um segundo commit só para registrar o próprio SHA.

Entrega final: título, caminho e URL relativa do post, resumo do conteúdo, fontes principais, validações, SHA e resultado do push. Sem hospedagem conhecida, diga “enviado ao repositório”; só declare deploy/site online após verificar o mecanismo e seu resultado.

# Agentes editoriais do Caderno de estudo

## Começar

Reinicie o OpenCode após instalar ou alterar estes arquivos. Execute o comando na raiz do projeto:

```text
/criar-post matéria="Gestão de Projetos" assunto="Comunicação e gestão de conflitos"
/criar-post matéria="Gestão de Projetos" capítulo="02"
/criar-post matéria="Gestão de Projetos" unidade="01"
/criar-post matéria="Gestão de Projetos" tipo="aula-ao-vivo" aula="02"
/criar-post matéria="Gestão de Projetos" tipo="aula-ao-vivo" aula="02" tema="Comunicação e gestão de conflitos"
```

Os argumentos são interpretados em linguagem natural; não há parser rígido. Os números acima são exemplos de recorte, não uma confirmação de que esses materiais existem. Também é possível selecionar o agente principal `editor-do-blog` e pedir um post diretamente. Informe a matéria e o assunto, capítulo, unidade ou aula ao vivo desejado. O fluxo identifica primeiro o tipo de estudo; ambiguidades essenciais poderão exigir uma pergunta. Não é necessário informar uma aula para estudar o livro.

O fluxo não pede aprovações intermediárias. Ao iniciar uma criação de post, você autoriza commit e push para `main` dos arquivos daquela entrega. É necessário acesso de leitura aos materiais, Node.js compatível com `package.json`, dependências instaladas e autenticação de escrita no remoto Git. As permissões globais do OpenCode ainda podem exigir autorização de ferramentas.

## Agentes e sequência

| Agente | Papel |
| --- | --- |
| `editor-do-blog` | Coordenador principal, escopo, delegação, correções e entrega |
| `pesquisador` | Inventário e mapa de evidências locais |
| `planejador-editorial` | Estrutura didática, exercícios e planejamento visual |
| `redator` | Texto completo, exemplos e respostas comentadas |
| `revisor` | Conferência independente das fontes e revisão final |
| `editor-visual` | Recortes, SVGs, imagens externas ou geradas e créditos |
| `publicador` | Montagem Astro, build, integração, commit e push |

Identificação de matéria, assunto e tipo → escopo com prioridade das fontes → pesquisa → planejamento → redação → revisão → visuais → montagem e validação → revisão final → commit e push. Erros retornam ao responsável antes de continuar.

## Regras e documentos

- `../AGENTS.md`: instruções gerais carregadas pelo OpenCode na raiz do projeto.
- `editorial.md`: contrato compartilhado e critérios de publicação.
- `agents/*.md`: definições dos sete agentes.
- `commands/criar-post.md`: entrada para iniciar uma criação.
- `trabalhos/<slug>/`: dossiês gerados durante execuções, com escopo, evidências, plano, texto, revisões, visuais e publicação.

Foi adotado o nome convencional `AGENTS.md` (maiúsculas), para descoberta automática das instruções. Este README documenta o uso específico da automação, complementando o README da aplicação.

## Fontes, profundidade e visuais

A base factual é exclusivamente `Matérias/<matéria>/`. Há dois tipos de post:

| Tipo | Base do post | Complementos |
| --- | --- | --- |
| Estudo dirigido do livro (`estudo-dirigido`) | Assunto, capítulo ou unidade do livro. É o padrão para pedidos de temas. | Slides, aulas conceituais e aulas ao vivo pertinentes. |
| Aula ao vivo (`aula-ao-vivo`) | Transcrição e slides definem a cobertura; livro em PDF fornece a base conceitual. | Assuntos adicionais documentados na aula são desenvolvidos mesmo quando ausentes do livro; aulas conceituais pertinentes podem esclarecer o recorte. |

Aula conceitual não é aula ao vivo: se indicada como recorte, seus assuntos orientam a seleção de um estudo dirigido baseado no livro. Pedidos apenas de “aula 02” são classificados pelos materiais disponíveis; se não for possível distinguir, o coordenador pergunta. Fonte principal ausente não é substituída silenciosamente.

Para aula ao vivo, os três materiais (transcrição, slides e livro em PDF) são necessários. A pesquisa produz uma matriz por assunto e a revisão confere sua cobertura. Comparações, divergências e decisões editoriais ficam no dossiê. O post ensina conceitos de forma integrada para quem não assistiu à aula, sem uma sequência de falas, timestamps ou pedidos para escolher entre versões. As referências finais preservam a rastreabilidade.

O dossiê registra o tipo de estudo e o papel de cada fonte. Post e cartão identificam “Estudo dirigido do livro” ou “Aula ao vivo”, e as referências identificam a base conceitual e os materiais da aula, ou livro e complementos no estudo dirigido. Posts existentes orientam o formato, mas não substituem fontes. Aprofundamentos geram novas páginas vinculadas ao post de origem quando existente, sem exigir vínculo com uma aula para estudos do livro.

Os textos seguem voz de tutor em português brasileiro, com densidade sustentada pelas fontes. Exemplos fictícios são identificados. Lacunas não são preenchidas com pesquisa externa ou conhecimento geral do modelo.

Imagens externas exigem origem e licença verificável. A geração por IA depende de uma ferramenta disponível no ambiente; esta configuração não instala API ou MCP de imagens. Sem ela, o agente utiliza recortes locais e SVGs. PDFs também dependem dos recursos de leitura/extração disponíveis; documentos ilegíveis são registrados como limitações.

## Publicação e recuperação

O publicador atualiza páginas, assets, cartões e contagens, executa o build e só cria commit após revisão final. Não inclui alterações alheias, não troca de branch silenciosamente e não usa force-push. Os dossiês textuais acompanham a entrega; extrações temporárias e segredos não devem ser versionados.

Se houver interrupção, peça ao `editor-do-blog` para retomar o dossiê pelo caminho. Ele deve verificar a validade dos artefatos e continuar do último estágio confirmado. Falhas de leitura, Git ou autenticação são reportadas sem falsa conclusão.

O destino atual é o remoto do projeto na branch `main`. Hospedagem não foi definida: push confirmado significa conteúdo enviado ao repositório. A afirmação de site publicado na internet requer um deploy configurado e verificado.

As fontes são indicadas junto aos trechos por números sobrescritos clicáveis, levando às referências completas no fim da página. Nomes de documentos, páginas, slides e localizadores ficam nessas entradas finais. Cada entrada oferece retorno às citações. O padrão detalhado está em `editorial.md`.

## Padrão de layout

O contrato `layout.md` documenta a aparência e o comportamento aprovados dos dois primeiros posts de Gestão de Projetos para todas as matérias: marca e impressão no cabeçalho, índice numerado persistente à esquerda, cores e tipografia compartilhadas e barra fina de progresso no topo. Também define adaptação para celular, impressão e verificações. O coordenador fornece esse contrato aos agentes em cada execução. A atualização das regras não modifica automaticamente os posts existentes.

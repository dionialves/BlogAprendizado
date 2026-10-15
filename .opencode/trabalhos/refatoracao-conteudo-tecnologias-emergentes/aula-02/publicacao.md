# Montagem — aula ao vivo 02

Post existente refatorado em `/tecnologias-emergentes-aula-ao-vivo-02/`, preservando URL, navegação e layout aprovado. Conteúdo integral aprovado de `post.md`, com introdução na abertura, ideia central destacada, seções, prática e referências completas. Nenhum material editorial é servido publicamente.

## Arquivos da montagem

- `src/pages/tecnologias-emergentes-aula-ao-vivo-02.astro`: importação do novo dossiê.
- `src/lib/render-study.ts`: compilação compartilhada de Markdown e HTML local, figuras, rascunhos e retornos de referências.
- `src/layouts/StudyPostLayout.astro`: abertura preservada, foco e adaptação de impressão.
- `src/scripts/study-post.js`: abertura dos ancestrais recolhidos ao acessar citação por hash; navegação por links reais preservada.
- `src/pages/tecnologias-emergentes-em-engenharia-de-software.astro`: títulos e descrições atualizados, contagens de posts preservadas.
- Dois SVGs selecionados em `visuais.md`; demais ativos preservados.
- `mapa-referencias.md`: contagens acrescidas das chamadas das figuras.

## Validações executadas

- `npm run build`: aprovado, sete páginas geradas.
- `python3 /private/tmp/verificar-referencias-te.py`: aprovado. Post 01: 26 referências e 84 chamadas; post 02: 25 referências e 93 chamadas. IDs únicos, todos os destinos e retornos existentes, números e ordem contínua conferidos.
- Imagens locais existentes, alt e dimensões presentes; dois diagramas por post.
- Cada resposta recolhida tem rascunho rotulado, com ID exclusivo e indicação de que não é salvo.
- Código de impressão preserva respostas abertas e restaura estado após impressão, oculta controles e mantém referências.
- Estrutura compartilhada mantém cabeçalho, retorno correto à matéria, índice desktop/móvel e progresso.

Inspeção visual de desktop, celular, teclado, barra e impressão: pendente da revisão final pelo coordenador no navegador. Build não é declaração de validação visual.

## Estado de publicação

Montagem entregue para revisão final. Nenhum stage, commit ou push executado neste estágio; alterações anteriores e livro staged preservados. Sem declaração de deploy online.

## Ajuste visual da revisão

O negrito dentro do parágrafo de ideia central preserva tamanho e capitalização do texto; apenas o rótulo continua em letras maiúsculas. Build e verificador de referências repetidos após o ajuste: aprovados.

## Conferência final no navegador pelo coordenador

Desktop e celular (390 × 844) conferidos nas duas páginas, sem rolagem horizontal global. Índice móvel acessível e navegação por âncoras funcionais. No post02, item07 levou a #equipes com índice desktop persistente a40px e progresso53,5%; item09 móvel levou a #pratica. Fim da página atingiu progresso100%, sem distância restante. Ambos SVG do post02 carregaram corretamente. Post01: citação→referência→retorno funcionais, Enter na citação1 levou à referência1 visível; retorno a chamada dentro de resposta recolhida abriu o details e exibiu destino. Negrito do parágrafo da ideia central preserva capitalização normal.

Prévia de impressão visual indisponível: acionamento na ferramenta de navegador expirou sem prévia utilizável. Código de abertura/restauração de respostas e estilos de impressão revisados; isso não equivale à conferência visual do PDF. Sem stage, commit ou push.


## Encaminhamento ao repositório

Após a avaliação local, o usuário autorizou explicitamente criar os commits e fazer push para main. Build repetido e aprovado antes dos commits; diff sem erros de whitespace. Esta etapa inclui layout, conteúdo, referências, assets e dossiês revisados. SHA e resultado real do push serão informados na entrega, sem novo commit apenas para registrar o próprio SHA. As notas anteriores de ausência de commit descrevem o estado da entrega local naquele momento.

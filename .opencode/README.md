# Agentes editoriais do Caderno de estudo

## Começar

Reinicie o OpenCode após instalar ou alterar estes arquivos. Execute o comando na raiz do projeto:

```text
/criar-post matéria="Gestão de Projetos" aula="02"
/criar-post matéria="Gestão de Projetos" aula="02" tema="Comunicação e gestão de conflitos"
```

Os argumentos são interpretados em linguagem natural; não há parser rígido. Também é possível selecionar o agente principal `editor-do-blog` e pedir um post diretamente. Informe a matéria, aula e assunto desejado; ambiguidades essenciais poderão exigir uma pergunta.

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

Escopo → pesquisa → planejamento → redação → revisão → visuais → montagem e validação → revisão final → commit e push. Erros retornam ao responsável antes de continuar.

## Regras e documentos

- `../AGENTS.md`: instruções gerais carregadas pelo OpenCode na raiz do projeto.
- `editorial.md`: contrato compartilhado e critérios de publicação.
- `agents/*.md`: definições dos sete agentes.
- `commands/criar-post.md`: entrada para iniciar uma criação.
- `trabalhos/<slug>/`: dossiês gerados durante execuções, com escopo, evidências, plano, texto, revisões, visuais e publicação.

Foi adotado o nome convencional `AGENTS.md` (maiúsculas), para descoberta automática das instruções. Este README documenta o uso específico da automação, complementando o README da aplicação.

## Fontes, profundidade e visuais

A base factual é `Matérias/<matéria>/`: slides/transcrição da aula, livro pertinente e pré-requisitos de outras aulas da mesma matéria. Posts existentes orientam o formato, mas não substituem fontes. Aprofundamentos geram novas páginas vinculadas à aula original.

Os textos seguem voz de tutor em português brasileiro, com densidade sustentada pelas fontes. Exemplos fictícios são identificados. Lacunas não são preenchidas com pesquisa externa ou conhecimento geral do modelo.

Imagens externas exigem origem e licença verificável. A geração por IA depende de uma ferramenta disponível no ambiente; esta configuração não instala API ou MCP de imagens. Sem ela, o agente utiliza recortes locais e SVGs. PDFs também dependem dos recursos de leitura/extração disponíveis; documentos ilegíveis são registrados como limitações.

## Publicação e recuperação

O publicador atualiza páginas, assets, cartões e contagens, executa o build e só cria commit após revisão final. Não inclui alterações alheias, não troca de branch silenciosamente e não usa force-push. Os dossiês textuais acompanham a entrega; extrações temporárias e segredos não devem ser versionados.

Se houver interrupção, peça ao `editor-do-blog` para retomar o dossiê pelo caminho. Ele deve verificar a validade dos artefatos e continuar do último estágio confirmado. Falhas de leitura, Git ou autenticação são reportadas sem falsa conclusão.

O destino atual é o remoto do projeto na branch `main`. Hospedagem não foi definida: push confirmado significa conteúdo enviado ao repositório. A afirmação de site publicado na internet requer um deploy configurado e verificado.

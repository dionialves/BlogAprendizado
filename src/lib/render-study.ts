// Compila somente os documentos editoriais locais, sem publicá-los como arquivos.
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function inline(value: string): string {
  const tags: string[] = [];
  const protectedText = value.replace(/<\/?(?:sup|a)\b[^>]*>/g, tag => `@@TAG${tags.push(tag) - 1}@@`);
  return escape(protectedText).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>').replace(/@@TAG(\d+)@@/g, (_, index) => tags[Number(index)]);
}
export function renderStudy(draft: string, visuals: string, lesson: string) {
  const visualSections = visuals.split(/^## \d+\. /m).slice(1, 3);
  const counts = new Map<string, number>();
  for (const match of draft.matchAll(/id="citacao-(\d+)-(\d+)"/g)) counts.set(match[1], Math.max(counts.get(match[1]) ?? 0, Number(match[2])));
  const figures = visualSections.map((section, i) => {
    const field = (name: string) => section.match(new RegExp(`^- ${name}: (.+)$`, 'm'))?.[1] ?? '';
    const path = field('Caminho').match(/`([^`]+)`/)?.[1];
    if (!path) throw new Error('Caminho visual ausente');
    const dimensions = field('Dimensões').match(/(\d+) × (\d+)/)!;
    const numbers = [...field('Crédito').matchAll(/\*\*(\d+)(?: e (\d+))?\*\*/g)].flatMap(match => [match[1], match[2]].filter(Boolean));
    const citations = numbers.map(number => {
      const occurrence = (counts.get(number) ?? 0) + 1; counts.set(number, occurrence);
      return `<sup><a id="citacao-${number}-${occurrence}" href="#referencia-${number}" aria-label="Ver referência ${number}">${number}</a></sup>`;
    }).join('');
    const unquote = (value: string) => value.replace(/^“|”\.?$/g, '');
    return `<figure id="figura-${lesson}-${i + 1}"><a href="${path}" aria-label="Abrir diagrama ${i + 1} em tamanho original"><img src="${path}" width="${dimensions[1]}" height="${dimensions[2]}" alt="${escape(unquote(field('Alt')))}" loading="lazy" /></a><figcaption>${escape(unquote(field('Legenda')))} <span>Elaboração própria.</span>${citations}</figcaption></figure>`;
  });
  let text = draft.replace(/^# .+\n\n\*\*Aula ao vivo[^\n]+\n\n/, '');
  const insertBefore = lesson === '01' ? ['## Acordos', '### Exemplo didático fictício: três pedidos acadêmicos'] : ['## Processos:', '## Síntese e prática'];
  insertBefore.forEach((needle, index) => {
    if (!text.includes(needle)) throw new Error(`Posição visual ausente: ${needle}`);
    text = text.replace(needle, `FIGURA${index}\n\n${needle}`);
  });
  let answer = 0;
  const output: string[] = [];
  for (const block of text.trim().split(/\n\s*\n/)) {
    if (/^#{2,3} /.test(block)) {
      const match = block.match(/^(#{2,3}) (.+?)(?: \{#([a-z0-9-]+)\})?$/)!;
      output.push(`<h${match[1].length}${match[3] ? ` id="${match[3]}"` : ''}>${inline(match[2])}</h${match[1].length}>`);
    } else if (/^FIGURA\d$/.test(block)) output.push(figures[Number(block.slice(6))]);
    else if (block.startsWith('<details>')) {
      answer++;
      output.push(`<label class="draft-label" for="te-${lesson}-rascunho-${answer}">Seu rascunho — atividade ${answer} (não salvo)</label><textarea id="te-${lesson}-rascunho-${answer}" rows="4" aria-describedby="draft-status"></textarea>${block}`);
    } else if (/^<(?:\/details|ol\b|li\b|\/ol|summary\b)/.test(block)) output.push(block);
    else if (block.startsWith('|')) {
      const rows = block.split('\n').filter((_, i) => i !== 1).map(row => row.split('|').slice(1, -1).map(cell => cell.trim()));
      output.push(`<div class="table-scroll" role="region" aria-label="Tabela: ${escape(rows[0][0])}" tabindex="0"><table><thead><tr>${rows[0].map(cell => `<th scope="col">${inline(cell)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
    } else if (/^(?:\d+\. |\- )/.test(block)) {
      const tag = /^\d/.test(block) ? 'ol' : 'ul';
      output.push(`<${tag}>${block.split('\n').map(line => `<li>${inline(line.replace(/^(?:\d+\. |\- )/, ''))}</li>`).join('')}</${tag}>`);
    } else output.push(`<p>${inline(block)}</p>`);
  }
  let html = output.join('\n');
  // Regera todos os retornos a partir das ocorrências efetivamente montadas.
  html = html.replace(/<li id="referencia-(\d+)">([\s\S]*?)<\/li>/g, (_, number, content) => {
    const ids = [...html.matchAll(new RegExp(`id="(citacao-${number}-[^" ]+)"`, 'g'))].map(match => match[1]);
    const clean = content.replace(/\s*<a href="#citacao-[\s\S]*?<\/a>/g, '');
    return `<li id="referencia-${number}">${clean} ${ids.map((id, index) => `<a href="#${id}" aria-label="Voltar à citação ${number}, ocorrência ${index + 1}">↩ ${index + 1}</a>`).join(' ')}</li>`;
  });
  return html;
}

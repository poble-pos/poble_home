/* Progressive search: the complete manual remains readable without JavaScript. */
(() => {
  const input = document.getElementById('manualSearch');
  if (!input) return;
  const groups = [...document.querySelectorAll('.manual-group')];
  const articles = [...document.querySelectorAll('.manual-article')];
  const status = document.getElementById('searchStatus');
  const clear = document.getElementById('clearSearch');
  const normalise = value => value.toLocaleLowerCase('en-AU').normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  const searchable = new Map(articles.map(article => [article, normalise(article.closest('.manual-group').querySelector('h2').textContent + ' ' + article.textContent)]));
  function filter() {
    const query = normalise(input.value.trim());
    const words = query.split(/\s+/).filter(Boolean);
    let count = 0;
    articles.forEach(article => {
      const match = words.every(word => searchable.get(article).includes(word));
      article.hidden = !match;
      if (match) count++;
    });
    groups.forEach(group => { group.hidden = ![...group.querySelectorAll('.manual-article')].some(article => !article.hidden); });
    clear.hidden = !query;
    document.getElementById('noResults').hidden = count > 0;
    status.textContent = query ? `${count} ${count === 1 ? 'topic' : 'topics'} found.` : 'Browse the topics below or search for help.';
  }
  function reset(focus = true) { input.value = ''; filter(); if (focus) input.focus(); }
  input.addEventListener('input', filter);
  clear.addEventListener('click', () => reset());
  document.getElementById('resetSearch').addEventListener('click', () => reset());
  document.querySelectorAll('[aria-label="Manual topics"] a').forEach(link => link.addEventListener('click', () => reset(false)));
})();

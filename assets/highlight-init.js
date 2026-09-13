/* global hljs */
function initializeCodeBlocks() {
  hljs.highlightAll();

  document.querySelectorAll('pre code.hljs').forEach((code) => {
    if (code.classList.contains('code-with-lines')) return;
    const source = code.textContent;
    const lines = source.split('\n');
    const indents = lines.map((line) => {
      if (!line.trim()) return null;
      let columns = 0;
      for (const char of line.match(/^[\t ]*/)[0]) {
        columns += char === '\t' ? 2 - (columns % 2) : 1;
      }
      return Math.floor(columns / 2) * 2;
    });
    // Carry the common surrounding scope across blank lines, as in the Rust reader.
    const guideWidths = indents.map((indent, index) => {
      if (indent !== null) return indent;
      let before = index - 1;
      let after = index + 1;
      while (before >= 0 && indents[before] === null) before -= 1;
      while (after < indents.length && indents[after] === null) after += 1;
      return before >= 0 && after < indents.length
        ? Math.min(indents[before], indents[after]) : 0;
    });
    const fragment = document.createDocumentFragment();
    const range = document.createRange();
    range.setStart(code, 0);
    let lineIndex = 0;

    function appendLine(content) {
      const line = document.createElement('span');
      line.className = 'code-line';
      const number = document.createElement('span');
      number.className = 'code-line-number';
      number.dataset.lineNumber = String(lineIndex + 1);
      number.setAttribute('aria-hidden', 'true');
      line.append(number);

      const indent = guideWidths[lineIndex];
      if (indent >= 2) {
        const guides = document.createElement('span');
        guides.className = 'code-indent-guides';
        guides.style.setProperty('--indent-width', `${indent}ch`);
        guides.setAttribute('aria-hidden', 'true');
        line.append(guides);
      }
      line.append(content);
      fragment.append(line);
      lineIndex += 1;
    }

    // Range cloning preserves syntax spans even when comments or strings span lines.
    const walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      for (let offset = node.data.indexOf('\n'); offset !== -1; offset = node.data.indexOf('\n', offset + 1)) {
        range.setEnd(node, offset);
        appendLine(range.cloneContents());
        fragment.append(document.createTextNode('\n'));
        range.setStart(node, offset + 1);
      }
    }
    range.setEnd(code, code.childNodes.length);
    appendLine(range.cloneContents());
    code.replaceChildren(fragment);
    code.style.setProperty('--code-gutter', `calc(${String(lines.length).length}ch + 29px)`);
    code.classList.add('code-with-lines');
    const pre = code.parentElement;
    if (pre.closest('.code-editor')) return;
    const language = [...code.classList].find((name) => name.startsWith('language-'))?.slice(9);
    const labels = { go: 'Go', typescript: 'TypeScript', javascript: 'JavaScript', bash: 'Shell', plaintext: '命令 / 输出' };
    const wrapper = document.createElement('div');
    wrapper.className = 'code-panel';
    const toolbar = document.createElement('div');
    toolbar.className = 'code-toolbar';
    const label = document.createElement('span');
    label.textContent = labels[language] || '代码';
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = '复制';
    button.setAttribute('aria-label', `复制${label.textContent}代码`);
    const feedback = document.createElement('span');
    feedback.className = 'code-copy-feedback';
    feedback.setAttribute('role', 'status');
    pre.before(wrapper);
    toolbar.append(label, button);
    wrapper.append(toolbar, pre, feedback);
    let reset;
    button.addEventListener('click', async () => {
      clearTimeout(reset);
      button.disabled = true;
      feedback.textContent = '';
      try {
        await navigator.clipboard.writeText(source);
        button.textContent = '已复制';
        feedback.textContent = '已复制到剪贴板。';
        reset = setTimeout(() => {
          button.textContent = '复制';
          feedback.textContent = '';
        }, 2000);
      } catch {
        button.textContent = '复制';
        const selection = window.getSelection();
        const selectedCode = document.createRange();
        selectedCode.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(selectedCode);
        feedback.textContent = '未能自动复制，代码已选中。请按 Ctrl+C（Mac：⌘C）。';
      } finally {
        button.disabled = false;
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCodeBlocks, { once: true });
} else {
  initializeCodeBlocks();
}

export function qs<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Elemento no encontrado: ${selector}`);
  return el;
}

export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: { className?: string; text?: string }
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  if (options?.className) el.className = options.className;
  if (options?.text) el.textContent = options.text;
  return el;
}
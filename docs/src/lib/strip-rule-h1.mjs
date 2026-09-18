/**
 * Starlight renders frontmatter `title` (from rule `name`) as the page H1.
 * Rule markdown also starts with a body `#` heading for ai-rulesmith.
 * Drop that first body H1 when rendering rule pages so the title is not duplicated.
 */
export function remarkStripRuleH1() {
  return (tree, file) => {
    const path = String(file.history?.[0] ?? file.path ?? '').replace(/\\/g, '/');
    if (!/(?:\/|^)rules\/[^/]+\/[^/]+\.mdx?$/.test(path)) return;

    const idx = tree.children.findIndex(
      (node) => node.type === 'heading' && node.depth === 1,
    );
    if (idx !== -1) {
      tree.children.splice(idx, 1);
    }
  };
}

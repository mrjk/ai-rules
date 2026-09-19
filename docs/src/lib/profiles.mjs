import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const examplesDir = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../../examples',
);

/** @returns {string[]} */
export function listRecipes() {
  return readdirSync(examplesDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => existsSync(join(examplesDir, name, '.ai-rulez', 'config.toml')))
    .sort();
}

/** @deprecated use listRecipes */
export function listProfiles() {
  return listRecipes();
}

/**
 * @param {string} name
 * @returns {{ name: string, description: string, builtins: string[], includes: string[], raw: string }}
 */
export function loadRecipe(name) {
  const path = join(examplesDir, name, '.ai-rulez', 'config.toml');
  const raw = readFileSync(path, 'utf8');
  const descriptionMatch = raw.match(/^description\s*=\s*"(.*)"/m);
  const builtins = [...raw.matchAll(/^\s*"([^"]+)",?\s*$/gm)]
    .map((m) => m[1])
    .filter((b) => !b.startsWith('rules') && !b.startsWith('context'));
  // crude: collect include names
  const includes = [...raw.matchAll(/^name\s*=\s*"([^"]+)"/gm)].map((m) => m[1]).slice(1);
  return {
    name,
    description: descriptionMatch ? descriptionMatch[1] : name,
    builtins: [...new Set(builtins.filter((b) => !includes.includes(b)))],
    includes,
    raw,
  };
}

/** @deprecated */
export function loadProfile(name) {
  return loadRecipe(name);
}

/**
 * @param {string} slug module/rule without extension
 * @param {string} [baseUrl]
 */
export function ruleHref(slug, baseUrl = '/') {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${base}rules/${slug}/`;
}

export { examplesDir as profilesDir, examplesDir };

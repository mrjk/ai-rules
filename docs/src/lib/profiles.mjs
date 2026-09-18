import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const profilesDir = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../../src/profiles',
);

/**
 * @typedef {{ slug: string, vars?: Record<string, unknown> }} RuleRef
 * @typedef {{
 *   step_name: string,
 *   description?: string,
 *   rules: RuleRef[],
 * }} ProfileStep
 * @typedef {{
 *   type: string,
 *   preamble?: string,
 *   before_start?: RuleRef[],
 *   before_finish?: RuleRef[],
 *   rules?: RuleRef[],
 *   steps?: ProfileStep[],
 * }} AiWorkflow
 * @typedef {{ target: string, ai_workflow: AiWorkflow }} ProfileTarget
 * @typedef {{ targets: string[], workflow: AiWorkflow }} WorkflowGroup
 */

/** @returns {string[]} */
export function listProfiles() {
  return readdirSync(profilesDir)
    .filter((name) => name.endsWith('.json'))
    .map((name) => name.slice(0, -'.json'.length))
    .sort();
}

/**
 * @param {unknown} entry
 * @returns {RuleRef}
 */
export function normalizeRule(entry) {
  if (typeof entry === 'string') {
    return { slug: entry };
  }
  if (entry && typeof entry === 'object' && 'slug' in entry) {
    const obj = /** @type {{ slug: string, vars?: Record<string, unknown> }} */ (entry);
    return obj.vars ? { slug: obj.slug, vars: obj.vars } : { slug: obj.slug };
  }
  throw new Error(`Invalid rule entry: ${JSON.stringify(entry)}`);
}

/**
 * @param {unknown[]} entries
 * @returns {RuleRef[]}
 */
function normalizeRules(entries) {
  return (entries ?? []).map(normalizeRule);
}

/**
 * @param {Record<string, unknown>} raw
 * @returns {AiWorkflow}
 */
function normalizeWorkflow(raw) {
  /** @type {AiWorkflow} */
  const workflow = {
    type: String(raw.type ?? 'standard'),
    preamble: typeof raw.preamble === 'string' ? raw.preamble : undefined,
    before_start: normalizeRules(/** @type {unknown[]} */ (raw.before_start ?? [])),
    before_finish: normalizeRules(/** @type {unknown[]} */ (raw.before_finish ?? [])),
  };

  if (Array.isArray(raw.rules)) {
    workflow.rules = normalizeRules(raw.rules);
  }

  if (Array.isArray(raw.steps)) {
    workflow.steps = raw.steps.map((step) => {
      const s = /** @type {Record<string, unknown>} */ (step);
      return {
        step_name: String(s.step_name ?? ''),
        description: typeof s.description === 'string' ? s.description : undefined,
        rules: normalizeRules(/** @type {unknown[]} */ (s.rules ?? [])),
      };
    });
  }

  return workflow;
}

/**
 * @param {string} name
 * @returns {ProfileTarget[]}
 */
export function loadProfile(name) {
  const path = join(profilesDir, `${name}.json`);
  const raw = JSON.parse(readFileSync(path, 'utf8'));
  if (!Array.isArray(raw)) {
    throw new Error(`Profile ${name} must be a JSON array`);
  }
  return raw.map((entry) => {
    const e = /** @type {Record<string, unknown>} */ (entry);
    return {
      target: String(e.target ?? 'unknown'),
      ai_workflow: normalizeWorkflow(/** @type {Record<string, unknown>} */ (e.ai_workflow ?? {})),
    };
  });
}

/**
 * @param {AiWorkflow} a
 * @param {AiWorkflow} b
 * @returns {boolean}
 */
function workflowsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Collapse identical Codex/Cursor (etc.) workflows into one group.
 * @param {ProfileTarget[]} targets
 * @returns {WorkflowGroup[]}
 */
export function groupIdenticalWorkflows(targets) {
  /** @type {WorkflowGroup[]} */
  const groups = [];
  for (const entry of targets) {
    const existing = groups.find((g) => workflowsEqual(g.workflow, entry.ai_workflow));
    if (existing) {
      existing.targets.push(entry.target);
    } else {
      groups.push({ targets: [entry.target], workflow: entry.ai_workflow });
    }
  }
  return groups;
}

/**
 * @param {string} slug
 * @param {string} [baseUrl]
 * @returns {string}
 */
export function ruleHref(slug, baseUrl = '/') {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${base}rules/${slug}/`;
}

export { profilesDir };

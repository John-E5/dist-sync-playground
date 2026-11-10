// Toy "bundler": dist/index.js = banner + src/index.js. Deterministic on purpose.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
mkdirSync('dist', { recursive: true });
writeFileSync('dist/index.js', '// built\n' + readFileSync('src/index.js', 'utf8'));

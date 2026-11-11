import { load as yamlLoad } from 'js-yaml';

// This file is processed at build time by Vite
// It imports all YAML files and exports them as a combined structure

// Import all YAML files using Vite's import.meta.glob
const yamlModules = import.meta.glob('./*.yaml', { query: '?raw', import: 'default', eager: true });

// Process each YAML file
const quizzes = [];

for (const [path, content] of Object.entries(yamlModules)) {
  try {
    const quiz = yamlLoad(content);
    quizzes.push(quiz);
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
  }
}

// Sort by ID for consistent ordering
quizzes.sort((a, b) => a.id - b.id);

// Extract unique categories
const categories = [...new Set(quizzes.map(q => q.category))];

export { quizzes, categories };

// events.service.js – business logic. Knows nothing about HTTP.
import { readFile } from 'node:fs/promises';
import { notFound } from '../errors.js';

const events = JSON.parse(await readFile(new URL('../data/events.json', import.meta.url), 'utf8'));

export function listEvents() {
  return events;
}

export function getEventById(id) {
  const event = events.find((e) => e.id === id);
  if (!event) throw notFound(`Event ${id}`);
  return event;
}

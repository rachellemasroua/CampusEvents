// main.js – application entry point (loaded with type="module")
// TODO: import from './events-api.js' and './render.js'
// TODO: load the events once, fill the <select>, render all cards
// TODO: on 'change' of the <select>, filter the events by category
//       ('all' shows everything) and update the "n events" counter
import { loadEvents } from './events-api.js';
import { renderEvents, fillCategories } from './render.js';

const grid = document.getElementById('card-grid');
const status = document.getElementById('status');
const count = document.getElementById('count');
const select = document.getElementById('category');

async function main() {
  try {
    const events = await loadEvents();

    status.textContent = '';

    fillCategories(events, select);

    renderEvents(events, grid);

    count.textContent = `${events.length} events`;

    select.addEventListener('change', () => {
      const category = select.value;

      const filteredEvents = category
        ? events.filter((event) => event.category === category)
        : events;

      renderEvents(filteredEvents, grid);

      count.textContent = `${filteredEvents.length} events`;
    });

  } catch (error) {
    status.textContent = `Failed to load events. ${error.message}`;
  }
}

main();


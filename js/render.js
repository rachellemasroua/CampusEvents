// render.js – presentation module

export function toCard(event) {
    const seatsLeft = event.capacity - event.registered;
    const seats = 
        seatsLeft > 0 
            ? `<p class="seats">${seatsLeft} seats left</p>`
            : `<p class="seats seats-full">Full</p>`
   
    return `
        <article class="card">
            <span class="badge badge-${event.category.toLowerCase()}">${event.category}</span>
            <h3>${event.title}</h3>
            <p class="meta">${event.date} · ${event.location}</p>
            ${seats}
        </article>
    `;
}

export function renderEvents(events, container){
    if(events.length === 0){
        container.innerHTML = '<p>No events in this category.</p>';
        return;
    }

    container.innerHTML = events
        .map(toCard) //calls toCard() for every event and creates an array of HTML strings
        .join(''); //combines those strings into one HTML string without adding separators
}

export function fillCategories(events, selectElement) {
    //purpose: automatically fills a dropdown menu with the event categories
    const categories = [...new Set(
        events.map((event) => event.category)
    )].sort();

    selectElement.innerHTML = `
        <option value="">All categories</option>
        ${categories
            .map((category) =>
                `<option value="${category}">${category}</option>`
            )
            .join('')}
    `;

}
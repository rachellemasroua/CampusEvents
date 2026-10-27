# Session 2 lab challenge – CampusEvents API v0.3 (starter = S02-E3 solution)

Add, keeping the layered structure:

1. `GET /api/events?category=tech` – case-insensitive filter; `?available=true` keeps only events with seats left.
   Every event in a list or detail response carries a computed `seatsLeft`.
   List responses become `{ count, items }`.
2. `GET /api/events/:id` answers `400 { error: "id must be a positive integer" }` for a non-numeric id.
3. `GET /api/categories` → `[{ name, count }]`, sorted by name.
4. Mount the reviewed comments module from S02-E4 (`/api/events/:id/comments`); the error handler must return `details` for 422.
5. `requests.http` covers every endpoint, including the error cases; `README.md` documents the endpoints in a table.
6. Git: `.gitignore` (node_modules, .env), at least 4 meaningful commits, pushed to GitHub. Submit the URL.

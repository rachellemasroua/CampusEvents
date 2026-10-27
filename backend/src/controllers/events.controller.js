// events.controller.js – translates HTTP <-> service calls. No business logic here.
import * as eventsService from '../services/events.service.js';

export function list(req, res) {
  res.json(eventsService.listEvents());
}

export function getOne(req, res) {
  const id = Number(req.params.id);
  res.json(eventsService.getEventById(id));   // throws HttpError(404) -> error handler
}

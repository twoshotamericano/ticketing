import {
  Subjects,
  EventPublisher,
  TicketCreatedEvent,
  TicketUpdatedEvent,
} from '@eaticket-test/common';

export class TicketUpdatedPublisher extends EventPublisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

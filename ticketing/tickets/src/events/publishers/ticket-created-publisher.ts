import {
  Subjects,
  EventPublisher,
  TicketCreatedEvent,
} from '@eaticket-test/common';

export class TicketCreatedPublisher extends EventPublisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

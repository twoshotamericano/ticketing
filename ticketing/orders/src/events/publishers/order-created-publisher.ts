import {
  EventPublisher,
  OrderCreatedEvent,
  Subjects,
} from '@eaticket-test/common';

export class OrderCreatedPublisher extends EventPublisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

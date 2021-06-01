import {
  EventPublisher,
  OrderCancelledEvent,
  Subjects,
} from '@eaticket-test/common';

export class OrderCancelledPublisher extends EventPublisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}

import {
  EventPublisher,
  PaymentCreatedEvent,
  Subjects,
} from '@eaticket-test/common';

export class PaymentCreatedPublisher extends EventPublisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

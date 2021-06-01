import {
  EventPublisher,
  Subjects,
  ExpirationComplete,
} from '@eaticket-test/common';

export class ExpirationEventPublisher extends EventPublisher<ExpirationComplete> {
  readonly subject = Subjects.ExpirationComplete;
}

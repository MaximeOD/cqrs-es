import { IHandler } from '../core/event-bus';
import { PostReadRepository } from '../../read/post-read-repository';
import { DomainEvent } from '../core/domain.event';

export class NewLikeHandler implements IHandler {
  constructor(private readRepo: PostReadRepository) {}

  handle(event: DomainEvent): void {
    if (event.eventType !== 'NEW_LIKE') return;
    this.readRepo.addLike(event.content as string);
  }
}

import { StringValidator } from '~/base/validator';
import * as lite from '~/lite';

import { CreateDto, FindDto, UpdateOneByIdDto, VoteDto } from './type';
import {
  CreateValidator,
  FindValidator,
  UpdateOneByIdValidator,
  VoteValidator,
} from './validator';

export async function createReview(body: CreateDto) {
  const createValidator: CreateValidator = new CreateValidator();
  createValidator.validate(body, 'body');

  return await lite.request('POST', 'reviews', { body });
}

export async function getReview(reviewId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  return await lite.request('GET', `reviews/${reviewId}`);
}

export async function updateReview(reviewId: string, body: UpdateOneByIdDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  const updateOneByIdValidator: UpdateOneByIdValidator = new UpdateOneByIdValidator();
  updateOneByIdValidator.validate(body, 'body');

  return await lite.request('PATCH', `reviews/${reviewId}`, { body });
}

export async function deleteReview(reviewId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  return await lite.request('DELETE', `reviews/${reviewId}`);
}

export async function getReviews(query: FindDto) {
  const findValidator: FindValidator = new FindValidator();
  findValidator.validate(query, 'query');

  return await lite.request('GET', 'reviews', { query });
}

export async function voteReview(reviewId: string, body: VoteDto) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  const voteValidator: VoteValidator = new VoteValidator();
  voteValidator.validate(body, 'body');

  return await lite.request('POST', `reviews/${reviewId}/vote`, { body });
}

export async function cancelVoteReview(reviewId: string) {
  const stringValidator: StringValidator = new StringValidator();
  stringValidator.validate(reviewId, 'reviewId');

  return await lite.request('DELETE', `reviews/${reviewId}/vote`);
}
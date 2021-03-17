import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { CreateDto } from '../type';

export class CreateValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;
  private stringArrayValidator: StringArrayValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(body: CreateDto, location: string) {
    this.objectValidator.validate(body, location);

    this.stringValidator.validate(body.orderItem, `${location}.orderItem`);
    this.stringValidator.validate(body.content, `${location}.content`);
    this.numberValidator.validate(body.score, `${location}.score`);

    if (body.images !== undefined) {
      this.stringArrayValidator.validate(body.images, `${location}.images`);
    }
  }
}

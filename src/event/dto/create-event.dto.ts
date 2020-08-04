export class CreateEventDto {
  readonly name: string;
  readonly description: string;
  readonly tags: string;
  readonly websiteUrl: string;
}

export class UpdateEventDto {
  name: string;
  description: string;
  tags: string;
  websiteUrl: string;
}

export class CreateEntitiesDto {
  readonly name: string;
  readonly prop: string;
}

export class UpdateEntitiesDto {
  readonly id: number;
  readonly name: string;
  readonly prop: string;
}

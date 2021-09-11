import { OrganizationType } from '../entities/organization.type';

export class CreateOrganizationDto {
  readonly name: string;
  readonly slug: string;
  readonly type: OrganizationType;
}

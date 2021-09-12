import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { OrganizationType } from '../entities/organization.type';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly slug: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['condo', 'business', 'domain'])
  readonly type: OrganizationType;
}

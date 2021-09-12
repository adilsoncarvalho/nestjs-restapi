import { IsIn, IsNotEmpty, IsString, Matches } from 'class-validator';
import { OrganizationType } from '../entities/organization.type';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  readonly slug: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['condo', 'business', 'domain'])
  readonly type: OrganizationType;
}

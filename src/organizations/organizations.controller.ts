import { Controller } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { CommonController } from 'src/common/common.controller';
import { Organization } from './entities/organization.entity';

@Controller('organizations')
export class OrganizationsController extends CommonController<
  Organization,
  CreateOrganizationDto,
  UpdateOrganizationDto
> {
  constructor(service: OrganizationsService) {
    super(service);
  }
}

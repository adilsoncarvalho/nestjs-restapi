import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService extends CommonService<
  Organization,
  CreateOrganizationDto,
  UpdateOrganizationDto
> {
  constructor(
    @InjectRepository(Organization)
    repository: Repository<Organization>,
  ) {
    super(repository);
  }
}

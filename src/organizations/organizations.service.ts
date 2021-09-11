import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly repository: Repository<Organization>,
  ) {}

  create(createDto: CreateOrganizationDto) {
    const organization = this.repository.create(createDto);
    return this.repository.save(organization);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    const organization = await this.repository.findOne(id);
    if (!organization)
      throw new NotFoundException(`Organization #${id} does not exist`);
    return organization;
  }

  async update(id: string, updateDto: UpdateOrganizationDto) {
    const organization = await this.repository.preload({ id, ...updateDto });
    if (!organization)
      throw new NotFoundException(`Organization #${id} does not exist`);
    return this.repository.save(organization);
  }

  remove(id: string) {
    return this.repository.softDelete(id);
  }
}

import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

export abstract class CommonService<TEntity, TCreateDto, TUpdateDto> {
  constructor(private readonly repository: Repository<TEntity>) {}

  private getEntityName() {
    return this.repository.metadata.name;
  }

  create(createDto: TCreateDto) {
    const organization = this.repository.create(createDto);
    return this.repository.save(organization);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    const organization = await this.repository.findOne(id);
    if (!organization)
      throw new NotFoundException(
        `${this.getEntityName()} #${id} does not exist`,
      );
    return organization;
  }

  async update(id: string, updateDto: TUpdateDto) {
    const organization = await this.repository.preload({ id, ...updateDto });
    if (!organization)
      throw new NotFoundException(
        `${this.getEntityName()} #${id} does not exist`,
      );
    return this.repository.save(organization);
  }

  remove(id: string) {
    return this.repository.softDelete(id);
  }
}

import {
  Body,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CommonService } from './common.service';

export abstract class CommonController<TEntity, TCreateDto, TUpdateDto> {
  constructor(
    private readonly service: CommonService<TEntity, TCreateDto, TUpdateDto>,
  ) {}

  @Post()
  create(@Body() createOrganizationDto: TCreateDto) {
    return this.service.create(createOrganizationDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrganizationDto: TUpdateDto,
  ) {
    return this.service.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

import { CommonEntity } from 'src/common/common.entity';
import { Column, Entity } from 'typeorm';
import { OrganizationType } from './organization.type';

@Entity({ name: 'organizations' })
export class Organization extends CommonEntity {
  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  slug!: string;

  @Column({ nullable: false })
  type!: OrganizationType;
}

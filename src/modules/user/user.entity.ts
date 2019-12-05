import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'blockpays' })
export class User {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'first_name',
  })
  firstName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'last_name',
  })
  lastName: string | null;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 250,
    name: 'password',
  })
  password: string;

  @Column('varchar', {
    nullable: true,
    length: 250,
    name: 'acces_token',
  })
  accesToken: string;

  @Column('int', {
    nullable: false,
    name: 'rol_id',
  })
  rolId: number;

  @Column('int', {
    nullable: false,
    name: 'level',
  })
  level: number;

  @Column('tinyint', {
    nullable: true,
    default: 0,
    name: 'two_factor',
  })
  twoFactor: number | null;

  @Column('tinyint', {
    nullable: true,
    default: 0,
    name: 'status',
  })
  status: number | null;

  @Column('tinyint', {
    nullable: true,
    default: 1,
    name: 'active',
  })
  active: number | null;

  @Column('datetime', {
    nullable: true,
    name: 'createdAt',
  })
  createdAt: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'updatedAt',
  })
  updatedAt: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'deletedAt',
  })
  deletedAt: Date | null;
}

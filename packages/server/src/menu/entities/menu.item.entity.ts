import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Menu } from './menu.entity'

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @Column()
  url: string

  @ManyToOne(() => Menu)
  @JoinColumn({
    name: 'menu_id',
    referencedColumnName: 'id'
  })
  menu?: Menu
}

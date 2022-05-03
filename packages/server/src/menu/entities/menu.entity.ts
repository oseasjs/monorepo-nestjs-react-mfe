import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MenuItem } from './menu.item.entity'

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  environmentName: string

  @OneToMany(() => MenuItem, menuItem => menuItem.menu)
  @JoinColumn({
    name: 'menu_id',
    referencedColumnName: 'id'
  })
  menuItems?: MenuItem[]
}

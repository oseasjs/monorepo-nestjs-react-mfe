import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Menu } from './entities/menu.entity'
import { MenuItem } from './entities/menu.item.entity'

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private repository: Repository<Menu>
  ) {}

  public async findAll(): Promise<Menu[]> {
    return await this.repository
      .createQueryBuilder('menu')
      .innerJoinAndMapMany('menu.menuItems', MenuItem, 'menu_item', 'menu.id = menu_item.menu_id')
      .getMany()
  }
}

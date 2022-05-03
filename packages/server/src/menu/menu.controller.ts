import { Controller, Get } from '@nestjs/common'
import { MenuService } from './menu.service'

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  public async findAll(): Promise<any> {
    const menuList = await this.menuService.findAll()
    const json = menuList.map(m => {
      const menu = {}
      const items = m.menuItems.map(menuItem => {
        const item = {}
        item[menuItem.name] = menuItem.url
        return item
      })
      menu[m.environmentName] = Object.assign({}, ...items)
      return menu
    })
    return Object.assign({}, ...json)
  }
}

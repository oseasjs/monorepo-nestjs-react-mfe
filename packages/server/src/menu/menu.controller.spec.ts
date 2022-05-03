import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Menu } from './entities/menu.entity'
import { MenuController } from './menu.controller'
import { MenuService } from './menu.service'

describe('MenuController', () => {
  let controller: MenuController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuController],
      providers: [
        MenuService,
        {
          provide: getRepositoryToken(Menu),
          useValue: {}
        }
      ]
    }).compile()

    controller = module.get<MenuController>(MenuController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

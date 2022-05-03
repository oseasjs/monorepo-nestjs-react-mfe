import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Menu } from './entities/menu.entity'
import { MenuService } from './menu.service'

describe('MenuService', () => {
  let service: MenuService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuService,
        {
          provide: getRepositoryToken(Menu),
          useValue: {}
        }
      ]
    }).compile()

    service = module.get<MenuService>(MenuService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Pokemon } from './entities/pokemon.entity'
import { PokemonController } from './pokemon.controller'
import { PokemonService } from './pokemon.service'

describe('PokemonController', () => {
  let controller: PokemonController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        PokemonService,
        {
          provide: getRepositoryToken(Pokemon),
          useValue: {}
        }
      ]
    }).compile()

    controller = module.get<PokemonController>(PokemonController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

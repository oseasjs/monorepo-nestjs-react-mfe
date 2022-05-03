import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Pokemon } from './entities/pokemon.entity'
import { PokemonService } from './pokemon.service'

describe('PokemonService', () => {
  let service: PokemonService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: getRepositoryToken(Pokemon),
          useValue: {}
        }
      ]
    }).compile()

    service = module.get<PokemonService>(PokemonService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

import { Controller, Get, Param } from '@nestjs/common'
import { Pokemon } from './entities/pokemon.entity'
import { PokemonService } from './pokemon.service'

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pokemon> {
    return await this.pokemonService.findOne(+id)
  }
}

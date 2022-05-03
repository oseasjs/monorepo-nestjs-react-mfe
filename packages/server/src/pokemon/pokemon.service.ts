import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PokemonBase } from './entities/pokemon.base.entity'
import { Pokemon } from './entities/pokemon.entity'

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private repository: Repository<Pokemon>
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return await this.repository
      .createQueryBuilder('pokemon')
      .innerJoinAndMapOne('pokemon.base', PokemonBase, 'pokemon_base', 'pokemon_base.id = pokemon.pokemon_base_id')
      .getMany()
  }

  async findOne(id: number): Promise<Pokemon> {
    return await this.repository
      .createQueryBuilder('pokemon')
      .innerJoinAndMapOne('pokemon.base', PokemonBase, 'pokemon_base', 'pokemon_base.id = pokemon.pokemon_base_id')
      .where('pokemon.id = :id', {
        id
      })
      .getOne()
  }
}

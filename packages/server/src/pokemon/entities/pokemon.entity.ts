import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PokemonBase } from './pokemon.base.entity'

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @Column()
  type?: string

  @ManyToOne(() => PokemonBase)
  @JoinColumn({
    name: 'pokemon_base_id',
    referencedColumnName: 'id'
  })
  base?: PokemonBase
}

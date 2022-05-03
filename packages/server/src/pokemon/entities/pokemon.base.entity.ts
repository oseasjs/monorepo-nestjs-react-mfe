import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PokemonBase {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  hp: number

  @Column()
  attack: number

  @Column()
  defense: number

  @Column()
  spAttack: number

  @Column()
  spDefense: number

  @Column()
  speed: number
}

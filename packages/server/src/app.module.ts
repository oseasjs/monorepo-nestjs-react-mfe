import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonModule } from './pokemon/pokemon.module'
import { MenuModule } from './menu/menu.module'

@Module({
  imports: [
    PokemonModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.db',
      entities: [__dirname.concat('/**/*.entity{.ts,.js}')],
      synchronize: true
    }),
    MenuModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

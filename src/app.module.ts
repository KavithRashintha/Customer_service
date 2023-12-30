import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { ProfileController } from './controllers/profile.controller';

@Module({
  controllers: [AppController, ProfileController],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'Kviper0824@',
      database: 'Customer',
      entities: [Profile],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Profile]),
  ],
  providers: [AppService],
})
export class AppModule {}

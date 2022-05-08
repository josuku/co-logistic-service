import { Module } from '@nestjs/common';
import { MicroServiceModule } from './microservice/microservice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlDb, sqlHost, sqlPass, sqlPort, sqlUser } from './config';
import { LogisticEntity } from 'src/entities/logistic.entity';

@Module({
  imports: [
    MicroServiceModule,
    TypeOrmModule.forRoot(
      {
        "type": "mysql",
        "host": sqlHost,
        "port": Number(sqlPort),
        "username": sqlUser,
        "password": sqlPass,
        "database": sqlDb,
        "entities": [ LogisticEntity ],
        "synchronize": true
      }
    )
  ]
})
export class AppModule {}


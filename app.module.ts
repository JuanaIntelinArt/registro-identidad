import { Module } from '@nestjs/common';
import { AppController } from './src/app.controller';
import { AppService } from './src/app.service';
import { IdentityModule } from './src/identity/identity.module';

@Module({
  imports: [IdentityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

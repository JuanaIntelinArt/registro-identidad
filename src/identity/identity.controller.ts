import { Controller, Post, Body } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { CreateIdentityDto } from './dto/create-identity.dto';
import { Identity } from './entities/identity.entity';

@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post()
  register(@Body() createDto: CreateIdentityDto): Identity {
    return this.identityService.create(createDto);
  }
}

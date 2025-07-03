import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
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

  @Get()
  findAll(): Identity[] {
    return this.identityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Identity {
    return this.identityService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreateIdentityDto>,
  ): Identity {
    return this.identityService.update(Number(id), updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Identity {
    return this.identityService.remove(Number(id));
  }
}

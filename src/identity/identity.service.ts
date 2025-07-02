import { Injectable } from '@nestjs/common';
import { CreateIdentityDto } from './dto/create-identity.dto';


interface Identity {
  fullName: string;
  documentNumber: string;
  email: string;
  address: string;
  id: number;
}

@Injectable()
export class IdentityService {
  private identities: Identity[] = [];

  create(data: CreateIdentityDto): Identity {
    const newEntry: Identity = {
      id: Date.now(),
      ...data,
    };
    this.identities.push(newEntry);
    return newEntry;
  }
}

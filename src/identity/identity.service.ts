import { Injectable, NotFoundException } from '@nestjs/common';
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

  findAll(): Identity[] {
    return this.identities;
  }

  findOne(id: number): Identity {
    const found = this.identities.find(item => item.id === id);
    if (!found) {
      throw new NotFoundException(`Identity with ID ${id} not found`);
    }
    return found;
  }

  update(id: number, updateData: Partial<CreateIdentityDto>): Identity {
    const index = this.identities.findIndex(item => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Identity with ID ${id} not found`);
    }

    this.identities[index] = {
      ...this.identities[index],
      ...updateData,
    };
    return this.identities[index];
  }

  remove(id: number): Identity {
    const index = this.identities.findIndex(item => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Identity with ID ${id} not found`);
    }

    const removed = this.identities.splice(index, 1);
    return removed[0];
  }
}

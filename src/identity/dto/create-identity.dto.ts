import { IsString, IsEmail, Length } from 'class-validator';

export class CreateIdentityDto {
  @IsString()
  fullName: string;

  @IsString()
  @Length(6, 20)
  documentNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;
}

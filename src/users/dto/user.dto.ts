import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Status } from '@prisma/client';

export class UserDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  name?: string | null;

  @IsString()
  @IsOptional()
  lastName?: string | null;

  @IsString()
  @IsOptional()
  email?: string | null;

  @IsString()
  @IsOptional()
  phone?: string | null;

  @IsEnum(Status)
  status: Status = Status.INACTIVE;

  createdAt: Date;

  updatedAt: Date;
}

export type CreateUserDto = Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateUserDto = Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'>;

export type ReadUserDto = Omit<UserDto, 'password' | 'createdAt' | 'updatedAt'>;

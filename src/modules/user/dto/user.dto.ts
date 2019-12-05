import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  firstName: string | null;
  @IsString()
  lastName: string | null;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  accesToken: string;
  @IsInt()
  rolId: number;
  @IsInt()
  level: number;
  @IsInt()
  twoFactor: number | null;
  @IsInt()
  status: number | null;
  @IsInt()
  active: number | null;
}

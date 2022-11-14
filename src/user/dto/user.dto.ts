import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @MinLength(8)
    public password: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;
}
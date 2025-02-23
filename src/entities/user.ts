import { INewUserDto, IUser } from "../contracts/entities/user";
import { HttpError } from "../utils/http-error";

export class User {
    private _id: number;
    private _name: string;
    private _cpfCnpj: string;
    private _email: string;
    private _password: string;
    private _type: string;
    constructor({
        id = 0,
        name,
        cpfCnpj,
        email,
        password,
        type
    }: IUser) {
        this._id = id;
        this._name = name;
        this._cpfCnpj = cpfCnpj;
        this._email = email;
        this._password = password;
        this._type = type;
    }

    get type(): string {
        return this._type;
    }

    set type(type: string) {
        if (type !== 'payer' && type !== 'payee') {
            throw new HttpError(400, "Invalid user type");
        }
        this._type = type;
    }

    get cpfCnpj(): string {
        return this._cpfCnpj;
    }

    set cpfCnpj(cpfCnpj: string) {
        const formattedCpfCnpj = cpfCnpj.replace(/\D/g, '');
        if (formattedCpfCnpj.length !== 11 && formattedCpfCnpj.length !== 14) {
            throw new HttpError(400, "Invalid CPF/CNPJ");
        }
        this._cpfCnpj = cpfCnpj;
    }


    toUserCreate(): INewUserDto {
        return {
            name: this._name,
            cpfCnpj: this._cpfCnpj,
            email: this._email,
            password: this._password,
            type: this._type
        }
    }
}
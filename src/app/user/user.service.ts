/**
 * File created by suenlue on 15.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IServiceProvider } from 'angular';

export interface IUserService {
    next ( month: number, day: number ): number;
}

export interface IUserProvider {
    setDayAsCountdownUnit (): void;
    setHourAsCountdownUnit (): void;
    setMinuteAsCountdownUnit (): void;
    setSecondAsCountdownUnit (): void;
}

class UserService implements IUserService {

    constructor ( private unit: string = 'inDays' ) {}

    next ( month: number, day: number = 1 ): number {

        const today: any = new Date();
        const birthday: any = new Date( today.getFullYear(), month-1, day );
        if (today > birthday)
            birthday.setFullYear(today.getFullYear() + 1);

        var dif;
        switch (this.unit) {
            case 'inSeconds':
                dif = Math.floor((birthday - today) / (1000));
                break;
            case 'inMinutes':
                dif = Math.floor((birthday - today) / (1000*60));
                break;
            case 'inHours':
                dif = Math.floor((birthday - today) / (1000*60*60));
                break;
            default:
                dif = Math.floor((birthday - today) / (1000*60*60*24));
                break;
        }
        return dif;
    }
}

export default class UserServiceProvider implements IServiceProvider {

    private unit: string = 'inDays';

    setDayAsCountdownUnit () { this.unit = 'inDays' };
    setHourAsCountdownUnit () { this.unit = 'inHours' };
    setMinuteAsCountdownUnit () { this.unit = 'inMinutes' };
    setSecondAsCountdownUnit () { this.unit = 'inSeconds' };

    $get(): IUserService {
        return new UserService( this.unit );
    }

}
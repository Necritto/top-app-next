import {randomBytes} from 'crypto';

export function generateUniqueKey(keyLenght = 20): string {
    return randomBytes(keyLenght).toString('hex');
}

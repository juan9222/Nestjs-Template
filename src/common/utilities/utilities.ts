/* tslint:disable */
import { Injectable } from '@nestjs/common';
import moment = require('moment');

const aesjs = require('aes-js');

const key = [
  145,
  201,
  214,
  208,
  30,
  76,
  16,
  177,
  233,
  99,
  191,
  12,
  239,
  181,
  51,
  19,
  176,
  223,
  2,
  251,
  117,
  224,
  30,
  77,
  17,
  233,
  120,
  210,
  45,
  70,
  180,
  150,
];

@Injectable()
export class UtilitiesService {

  generarRandomString(length: number): string {
    if (length > 0 && length !== null) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*.-_+-!$%&=()?¿=';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    } else {
      return 'error';
    }
  }

  generarRandomOnlyString(length: number): string {
    if (length > 0 && length !== null) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    } else {
      return 'error';
    }
  }

  generarRandomInt(): number {
    const fecha = Date.now();
    return parseInt(fecha.toString().substring(7));
  }

  getDateMiliSecond(): number {
    return new Date().getTime();
  }

  encriptar(texto: string): string {
    if (texto != '') {
      const textBytes = aesjs.utils.utf8.toBytes(texto);
      const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
      const encryptedBytes = aesCtr.encrypt(textBytes);
      return aesjs.utils.hex.fromBytes(encryptedBytes);
    } else {
      return 'error';
    }
  }

  desencriptar(texto: string): string {
    if (texto != '') {
      const encryptedBytes = aesjs.utils.hex.toBytes(texto);
      const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
      const decryptedBytes = aesCtr.decrypt(encryptedBytes);
      return aesjs.utils.utf8.fromBytes(decryptedBytes);
    } else {
      return 'error';
    }
  }

  getFechaHoy(): string {
    return moment().format('YYYY-MM-DD');
  }

}

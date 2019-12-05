import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggingInterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = new Date();
    return next
      .handle()
      .pipe(tap((data) => {
        fs.appendFile(path.join(__dirname,
          `../../logs/response/${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}.json`),
          JSON.stringify(data), (err) => {
            if (!err) {
              // tslint:disable-next-line:no-empty
              fs.appendFile(path.join(__dirname,
                `../../logs/response/${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}.json`),
                ',', (er) => {
                });
            }
          });
      }));
  }
}

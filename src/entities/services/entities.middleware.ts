/**
 * -Выполнить любой код.
 * -Внести изменения в объект запроса и ответа.
 * -Завершить цикл запрос-ответ.
 * -Вызовите следующую функцию промежуточного программного обеспечения в стеке.
 * -Если текущая функция промежуточного программного обеспечения не завершает
 * цикл запрос-ответ, она должна вызвать next()
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class EntitiesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('EntitiesMiddleware!');
    next();
  }
}


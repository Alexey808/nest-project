/**
 * Хранение и извлечение данных
 */

import { Injectable } from '@nestjs/common';
import Entity from '../interfaces/entity.interface';

@Injectable()
export class EntitiesService {
  private readonly entities: Entity[] = [];

  create(entity: Entity) {
    this.entities.push(entity);
  }

  findAll(): Entity[] {
    return this.entities;
  }
}

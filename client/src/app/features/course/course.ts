import { Module } from './module';
import { Tag } from './tag';

export interface Course {
  id: string;
  name: string;
  description: string;
  tags: Tag[];
  modules?: Module[];
  createdAt: Date;
}

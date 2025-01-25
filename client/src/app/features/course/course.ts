import { Topic } from './topic';

export interface Course {
  id: string;
  name: string;
  topics: Topic[];
  createdAt: Date;
}

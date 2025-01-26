import { Topic } from './topic';

export interface Course {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
  createdAt: Date;
}

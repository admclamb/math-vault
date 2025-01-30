import { Topic } from './topic';

export interface Module {
  id: string;
  name: string;
  description: string;
  topics?: Topic[];
}

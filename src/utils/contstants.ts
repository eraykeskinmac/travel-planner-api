import { User } from '../database/entities';

export const userSelections: (keyof User)[] = ['id', 'username', 'plans'];

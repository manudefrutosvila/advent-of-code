import { bench, read } from 'aoclib';
import { day, year } from '../typescript';
import { collapse } from './collapse.function';

export const runner = (input: string) => collapse(input).length;

if (require.main === module) {
	(async () => console.log(`Result: ${await bench(read(year, day), runner)}`))(); // 9202 ~15ms
}
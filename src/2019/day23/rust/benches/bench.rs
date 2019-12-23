#[macro_use]
extern crate criterion;

use aoclib::Solvable;
use criterion::Criterion;

fn part_one_benchmark(c: &mut Criterion) {
	c.bench_function("2019 day 23 part one", |b| {
		let input = aoclib::reader(2019, 23, "input.txt").unwrap();
		b.iter(|| aoc201923::PartOne::solve(&input).unwrap())
	});
}

fn part_two_benchmark(c: &mut Criterion) {
	c.bench_function("2019 day 23 part two", |b| {
		let input = aoclib::reader(2019, 23, "input.txt").unwrap();
		b.iter(|| aoc201923::PartTwo::solve(&input).unwrap())
	});
}

criterion_group!(benches, part_one_benchmark, part_two_benchmark);
criterion_main!(benches);

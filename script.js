let now = Date.now();

let minute = 60 * 1000;
now += minute * 14;
for (let c = 1; c < 10; c++) {
    now += 90 * minute;
    let cycle = new Date(now);
    console.log(cycle.toLocaleTimeString());
} 
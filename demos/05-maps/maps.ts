const scores = new Map<string, number>([["Go", 0]]);
scores.set("TS", 2);
scores.set("TS", (scores.get("TS") ?? 0) + 1);
console.log(scores.get("Go"), scores.get("Rust"), scores.size);
console.log(scores.get("Go"), scores.has("Go"));
console.log(scores.get("Rust"), scores.has("Rust"));
scores.delete("TS");
console.log(scores.size);

// 与 arrays_slices.go 逐段对照

function demoArrayReference(): void {
  console.log("---------demoArrayReference---------");
  const languages: [string, string, string] = ["TypeScript", "Go", "Rust"];
  const alias = languages;
  alias[0] = "JavaScript";
  console.log("original:", languages);
  console.log("alias:   ", alias);
}

function demoArrayCopy(): void {
  console.log("---------demoArrayCopy---------");
  const languages = ["TypeScript", "Go", "Rust"];
  const copied = [...languages];
  copied[0] = "JavaScript";
  console.log("original:", languages);
  console.log("copied:  ", copied);
}

function demoSliceCopy(): void {
  console.log("---------demoSliceCopy---------");
  const languages = ["TypeScript", "Go", "Rust"];
  const rangeCopy = languages.slice(1, 3);
  rangeCopy[0] = "Golang";
  console.log("array:     ", languages);
  console.log("range copy:", rangeCopy);
}

function demoPush(): void {
  console.log("---------demoPush---------");
  const numbers: number[] = [];
  const newLength = numbers.push(42);
  console.log("length:", newLength);
  console.log("array: ", numbers);
}

demoArrayReference();
demoArrayCopy();
demoSliceCopy();
demoPush();

// create your loops here.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i < 50; i++) {
  if ((i % 2) > 0 ) {
    console.log(i);
  }
}

for (let i = 0; i < 20; i+=2) {
  console.log(i);
}

for (let i = 100; i >= 0; i--) {
  if (i > 0) {
    console.log("Time till explosion: " + i + "!");
  } else {
    console.log("Too late...  BOOOOM!")
  }
}

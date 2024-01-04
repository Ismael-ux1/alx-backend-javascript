export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Using let for block-scoping
    let task = true;
    // Using const for values that should not be reassigned
    const task2 = false;
  }

  return [task, task2];
}

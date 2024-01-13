export default function guardrail(mathFunction) {
  const queue = [];
    try {
      let value = mathFunction();
        queue.push(value);
    } catch (error) {
        queue.push(error.toString());
    }
  queue.push('Guardrail was processed');
  return queue;
}

export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    if (result.length !== 0) {
      result += ' | ';
    }
    result += item;
  }
  return result;
}

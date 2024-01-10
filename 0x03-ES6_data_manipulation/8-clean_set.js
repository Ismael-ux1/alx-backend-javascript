export default function cleanSet(set, startString) {
  const arrayFromSet = [...set];

  if (startString === '') return arrayFromSet.join('-');

  const cleanedValues = arrayFromSet
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return cleanedValues.join('-');
}

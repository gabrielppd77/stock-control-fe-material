export function convertToArrayDescription(obj: object, descriptions: object) {
  return Object.keys(obj)
    .filter((key) => !isNaN(Number(obj[key as keyof typeof obj])))
    .map((key) => ({
      value: obj[key as keyof typeof obj],
      label: descriptions[obj[key as keyof typeof obj]],
    }));
}

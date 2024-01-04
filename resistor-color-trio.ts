export function decodedResistorValue(selectedColors: string[]): string {
  const colors: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  let duoNum = Number(`${colors.indexOf(selectedColors[0])}${colors.indexOf(selectedColors[1])}`)

  let zeros = 10 ** colors.indexOf(selectedColors[2])

  let value = duoNum * zeros

  let stringValue = `${value}`

  let zerosCount = stringValue.split('0').length - 1

  const kiloWeight = Math.floor(zerosCount / 3)

  const kiloType: string[] = ['', 'kilo', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta', 'ronna', 'quetta']

  return `${value / (kiloWeight == 0 ? 1 : (1000 ** kiloWeight))} ${kiloType[kiloWeight]}ohms`
}

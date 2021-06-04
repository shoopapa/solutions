
//works but only for less than about 12x12 grid
const grid = 3

const nextPoint = (path: number[][]): number[][][] => {
  const ret: number[][][] = []
  const [j,i] = path[path.length-1]
  if (i < grid) {
    ret.push([...path, [j, i + 1]])
  }
  if (j < grid) {
    ret.push([...path, [j + 1, i]])
  }
  return ret
}

const generatePath = (path: number[][][]): number[][][] => {
  const newpaths:number[][][] = []
  path.forEach(p => {
    if (p.length !== 2 * grid) {
      const next = nextPoint(p)
      newpaths.push(...next)
    }
  })
  if (newpaths.length === 0) return path
  return generatePath(newpaths)
}

export default () => {
  const start:number[][][] = [
    [[0, 0]],
  ]
  const x = generatePath(start)
  console.log(x.length)
}

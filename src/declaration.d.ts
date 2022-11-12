import 'innetjs/declaration'

declare module '*.txt' {
  const content: string
  export default content
}

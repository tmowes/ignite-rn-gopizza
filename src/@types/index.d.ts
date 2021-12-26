declare module '*.png'

declare module '*.json' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export default value
}

declare module '*.svg' {
  import { FC } from 'react'

  import { SvgProps } from 'react-native-svg'

  const content: FC<SvgProps>
  export default content
}

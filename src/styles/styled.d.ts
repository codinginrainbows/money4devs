import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      background: string,
      shape: string,

      textTitle: string,
      textBody: string,

      blue: string,
      greenLight: string,
      green: string,
      red: string,
    }
  }
}

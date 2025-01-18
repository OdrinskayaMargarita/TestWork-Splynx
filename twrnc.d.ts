declare module "twrnc" {
  import { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

  type TailwindStyle = StyleProp<ViewStyle | TextStyle | ImageStyle>;

  interface Tw {
    (classNames: string): TailwindStyle;
    style: (...classNames: string[]) => TailwindStyle;
    color: (className: string) => string | undefined;
  }

  export function create(config?: Record<string, any>): Tw;
}

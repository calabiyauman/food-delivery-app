import React from "react";
import { SvgXml } from "react-native-svg";

interface ISvgProps {
  size: number;
  fill?: string;
}

export default function RightArrowSVG({ size, fill }: ISvgProps) {
  const svg = `<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 38.035156 13.988281 C 37.628906 13.980469 37.257813 14.222656 37.09375 14.59375 C 36.933594 14.96875 37.015625 15.402344 37.300781 15.691406 L 45.277344 24 L 2.023438 24 C 1.664063 23.996094 1.328125 24.183594 1.148438 24.496094 C 0.964844 24.808594 0.964844 25.191406 1.148438 25.503906 C 1.328125 25.816406 1.664063 26.003906 2.023438 26 L 45.277344 26 L 37.300781 34.308594 C 36.917969 34.707031 36.933594 35.339844 37.332031 35.722656 C 37.730469 36.105469 38.363281 36.09375 38.746094 35.691406 L 49.011719 25 L 38.746094 14.308594 C 38.5625 14.109375 38.304688 13.996094 38.035156 13.988281 Z"/></svg>`;
  const SvgComponent = () => <SvgXml xml={svg} width={size} height={size} fill={fill} />;
  return <SvgComponent />;
}

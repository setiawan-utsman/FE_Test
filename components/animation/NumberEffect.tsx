import { SpringOptions } from 'motion';
import React from 'react'
import { AnimatedNumber } from '../motion-primitives/animated-number';

interface INumberEffect {
  className: string;
  value: number;
  springOptions: SpringOptions;
  as:React.ElementType
}

export default function NumberEffect({className, value, springOptions, as}: INumberEffect) {
  return (
    <AnimatedNumber value={value} className={className} springOptions={springOptions} as={as} />
  )
}

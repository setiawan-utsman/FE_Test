import React from 'react'
import { InView } from '../motion-primitives/in-view'
import { Transition } from 'motion';
import { UseInViewOptions } from 'motion/react';

interface InViewEffectProps {
  children: React.ReactNode;
  transition?: Transition;
  variants: any;
  viewOptions?: UseInViewOptions
  as?:React.ElementType
  once?: boolean
}

export default function InViewEffect({children, transition, variants, viewOptions, as='div', once}: InViewEffectProps) {
  return (
   <InView  as={as} variants={variants} transition={transition} viewOptions={viewOptions} once={once}>{children}</InView>
  )
}

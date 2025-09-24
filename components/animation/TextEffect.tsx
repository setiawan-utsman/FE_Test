import React from 'react'
import { TextEffect } from '../motion-primitives/text-effect';
// import { TextEffect } from '../motion-primitives/text-effect';
// import { TextEffect } from "@/components/motion-primitives/text-effect";
// import { TextEffect } from "@/components/core/text-effect";
interface ITextEffect {
  per?: 'word' | 'char' | 'line';
  preset?: 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide';
  variants?: any;
  className: string
  children: any
  as?:React.ElementType
}

export default function TextEffectAnimation({ per='word', preset='fade', variants, children, className, as="div" }: ITextEffect) {
  return (
    <TextEffect className={className} per={per} preset={preset} variants={variants} as='p'>
      {children}
    </TextEffect>
  )
}

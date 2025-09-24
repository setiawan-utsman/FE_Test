'use client'
import Link from 'next/link'
import React, { useState } from 'react'

interface IPrefetchLink {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function PrefetchLink({ href, children, className='w-full' }: IPrefetchLink) {
  const [active, setActive] = useState(false);
  return (
    <Link
      className={className}
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  );
}

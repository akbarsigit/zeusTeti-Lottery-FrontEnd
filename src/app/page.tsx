"use client"
import Image from 'next/image'
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import First from './components/First';
import Hero from './components/Hero';
export default function Home() {
  return (
    <NextUIProvider>
      <Hero/>
    </NextUIProvider>
  )
}

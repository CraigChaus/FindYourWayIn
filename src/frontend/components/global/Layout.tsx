// components/layout.js

import Navbar from './DefaultNavbar'
import Footer from './Footer'
import type { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
 }

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

import {  Shell } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ThemeToggler";


function Navbar() {
  return (
    <header className="border-black/20 dark:border-white/20 md:border-black/20  sticky top-0 flex h-16 items-center gap-4 border-b  px-4 md:px-6 justify-between">
      <nav className="flex items-center gap-x-5 justify-between">
        <Link href="./">
          <Shell className="font-bold" />
        </Link>
        <Link href="/products" className="font-bold">
        <Button variant="outline" className='font-bold'>All Products</Button>
        </Link>
                
      </nav>
      
      <ThemeToggler />
    </header>
  );
}

export default Navbar
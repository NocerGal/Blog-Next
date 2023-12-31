import React from 'react';
import { ThemeToggle } from '../ToggleTheme';
import Link from 'next/link';
import { AuthentificationButton } from '../auth/AuthentificationButton';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="py-4 px-8">
      <div className="flex justify-between items-center w-xl mx-auto max-w-4xl ">
        <div className="flex items-baseline">
          <Link href="/">
            <span className="text-2xl mr-6">Dev Tips</span>
          </Link>
        </div>
        <nav className="flex gap-2 items-center">
          <ThemeToggle />
          <Link href={'/posts/createPost'}>
            <Button>Create post</Button>
          </Link>

          <ul className="flex gap-6 px-1">
            <li>
              <AuthentificationButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

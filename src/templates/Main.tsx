import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { useAuth } from 'react-oidc-context';

import CookieBanner from '@/components/cookieBanner';
import UserPopup from '@/components/userPopup';
import { getUserName } from '@/utils/Helpers';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: 'https://iiasa.ac.at/terms-of-use' },
  { name: 'About', href: '/about' },
];

const authNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Review', href: '/review' },
  { name: 'Map', href: '/review/map' },
  { name: 'LeaderBoard', href: '/leaderboard' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'About', href: '/about' },
];

const Main = (props: IMainProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  let userName = '';
  if (auth.isAuthenticated) {
    userName = getUserName(auth);
  }

  function login() {
    if (!auth.isAuthenticated) {
      auth.signinRedirect().then();
    } else {
      router.push('/review').then();
    }
  }

  return (
    <div className="h-auto w-full text-gray-700 antialiased">
      {props.meta}
      <div className="bg-gray-300">
        <header className="absolute inset-x-0 top-0 z-50">
          <Script
            async
            defer
            data-website-id="c475f7ae-998b-4c1a-b53a-3b4749fc0f20"
            src="https://nodesanalytics.azurewebsites.net/umami.js"
          />
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <button type="button" className="-m-1.5 p-1.5">
                <span className="sr-only">Donate Water</span>
                <img
                  className="h-24 w-auto rounded-2xl"
                  src="/favicon-32x32.png"
                  alt=""
                />
              </button>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {!auth.isAuthenticated &&
                navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold leading-6 text-white hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              {auth.isAuthenticated &&
                authNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold leading-6 text-white hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {auth.isAuthenticated ? (
                /* <span className="text-lg font-semibold leading-6 text-white hover:underline">
                  {userName}
                </span> */
                <UserPopup name={userName} />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    login();
                  }}
                  className="text-lg font-semibold leading-6 text-white hover:underline"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </button>
              )}
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-12 w-auto rounded-md"
                    src="/favicon-32x32.png"
                    alt=""
                  />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {userName !== undefined ? (
                    <div className="py-6">
                      <button
                        type="button"
                        onClick={() => {
                          login();
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        {userName}
                      </button>
                    </div>
                  ) : (
                    <div className="py-6">
                      <button
                        type="button"
                        onClick={() => {
                          login();
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        Log in
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <main className="content  text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()}{' '}
          <a href="https://iiasa.ac.at/">IIASA</a>
        </footer>
        <CookieBanner />
      </div>
    </div>
  );
};

export { Main };

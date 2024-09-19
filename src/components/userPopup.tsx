import { Popover, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useAuth } from 'react-oidc-context';

interface UserData {
  name: string;
}

export default function UserPopup(props: UserData) {
  const router = useRouter();
  const auth = useAuth();
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-lg font-bold leading-6 text-white underline">
        <span>{props.name}</span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-auto max-w-min -translate-x-1/2 px-4">
          <div className="w-auto shrink rounded-md bg-white p-2 text-lg font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <button
              type="button"
              onClick={() => {
                auth
                  .signoutSilent()
                  .then()
                  .catch(() => {
                    console.log('logout error');
                  });
                router.push('/').then();
              }}
            >
              Logout
            </button>
            <button
              type="button"
              onClick={() => {
                router.push('/delete').then();
              }}
            >
              Delete
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

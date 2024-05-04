import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import pokeball from '../assets/pokeball.png';
import { Mail, Github, Linkedin, Search,  Info  } from "lucide-react";
import { NavLink, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', to: '/', current: false },
  { name: <Search />, to: '/search', current: false },
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PageHeader() {
  const location = useLocation();

  // Update current property based on current location
  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: item.to === location.pathname
  }));

  return (
    <div className="header-container" style={{ backgroundImage: 'url("https://mmos.com/wp-content/uploads/2021/07/pokemon-unite-key-art-banner.jpg")', backgroundSize: 'cover' }}>
    <Disclosure as="nav" className="white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src={pokeball}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                  {updatedNavigation.map((item) => (
  <NavLink
    key={item.to.toString()} // Specify key prop type as string
    to={item.to}
    className={classNames(
      item.current ? 'bg-gray-400 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'rounded-md px-3 py-2 text-sm font-medium'
    )}
    aria-current={item.current ? 'page' : undefined}
  >
    <span className="text-black"> {/* Apply text-black class */}
      {item.name}
    </span>
  </NavLink>
))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Info />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex items-center')}
                            onClick={() => window.open("mailto:mchavez76@yahoo.com")}
                          >
                            <Mail className="mr-2" />
                            <span className="text-black">Email</span> {/* Apply text-black class */}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://github.com/Mikechavo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex items-center')}
                          >
                            <Github className="mr-2" />
                            <span className="text-black">GitHub</span> {/* Apply text-black class */}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.linkedin.com/in/michael-t-chavez/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 flex items-center')}
                          >
                            <Linkedin className="mr-2" />
                            <span className="text-black">LinkedIn</span> {/* Apply text-black class */}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>

                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {updatedNavigation.map((item) => (
                <NavLink
                  
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <span className="text-black"> {/* Apply text-black class */}
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}

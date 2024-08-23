import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SendIcon from '@mui/icons-material/Send';
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Events', href: '#', current: false },
]
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {



const [isSearchVisible, setIsSearchVisible] = useState(true);
const toggleSearchBar = () => {
  setIsSearchVisible(!isSearchVisible);
  setTimeout(() => {
   
  }, 2000);
};

  return (
    <>
      <div className={`fixed  ${isSearchVisible ? '-translate-y-[100%]' : 'translate-y-[110%]'}  left-[5%] p-5 sm:p-8 md:p-10 rounded-lg w-[90%] md:w-[24%]  bg-white md:left-[40%] z-[99] transition-transform duration-300 ease-in-out`}>
        <div className='bg-white rounded-md  flex justify-center items-center  '>
            <SearchSharpIcon color='primary' className='relative text-[2.35rem] me-5 '/>
            <TextField fullWidth label="Search With Event ID" id="search" />
       
        </div>
      </div>
      
    
{!isSearchVisible && <div onClick={()=>{setIsSearchVisible(true)}} className={`w-full h-full bg-black  fixed ${isSearchVisible ? 'opacity-0' : 'opacity-75'}  z-50 transition-transform duration-300 ease-in-out`}>
      
      </div>}
    <Disclosure as="nav" className="bg-gray-800 z-50" >
           
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className=" ps-10 sm:ps-2 flex  items-center">
              <img
                alt="Your Company"
                src="/images/Logo.png"
           className='w-32 hidden sm:block'
              />
            </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex gap-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Button variant="contained" className=' rounded-full  capitalize ' >Organize</Button>
      
          <Button 
          variant="contained"
          className=' rounded-full capitalize ' 
          onClick={toggleSearchBar}
        >
      <SearchSharpIcon/>
        </Button>
        
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure></>
  )
}

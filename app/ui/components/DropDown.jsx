import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaBars } from "react-icons/fa";

export default function Example() {
  return (
    <Menu as="div" className="md:invisible relative inline-block text-left">
      <div>
        <MenuButton className="">
        <FaBars size={30} className="text-baleatech-blue"/>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute mt-4 right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#home"
              className="block px-4 py-6 text-lg text-baleatech-blue data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#servicios"
              className="block px-4 py-6 text-lg text-baleatech-blue data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Servicios
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#contacto"
              className="block px-4 py-6 text-lg text-baleatech-blue data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Contacto
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
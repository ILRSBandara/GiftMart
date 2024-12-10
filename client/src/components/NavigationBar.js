"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Girls",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Jewelry & Accessories",
          items: [
            { name: "Necklaces", href: "#" },
            { name: "Bracelets", href: "#" },
            { name: "Earrings", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Fashion & Clothing",
          items: [
            { name: "Apparel", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Shoes", href: "#" },
          ],
        },
        {
          id: "brands",
          name: " Food & Beverage Gifts",
          items: [
            { name: "Sweet Treats", href: "#" },
            { name: "Snack Boxes", href: "#" },
            { name: "Drinkware", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Beauty & Skincare",
          items: [
            { name: "Makeup", href: "#" },
            { name: "Skincare", href: "#" },
            { name: "Fragrances", href: "#" },
            { name: "Bath & Body", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Boys",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Jewelry & Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Bracelets", href: "#" },
            { name: "Hats & Caps", href: "#" },
          ],
        },
        {
          id: "clothing",
          name: "Technology & Gadgets",
          items: [
            { name: "Tech Accessories", href: "#" },
            { name: "Gadgets", href: "#" },
            { name: "Gaming", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Grooming & Fragrances",
          items: [
            { name: "Re-Shaving Kits", href: "#" },
            { name: "Skincare", href: "#" },
            { name: "Hair Care", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Fashion & Clothing",
          items: [
            { name: "Apparel", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Outerwear", href: "#" },
            { name: "Shoes", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Kids", href: "#" },
    { name: "Parents", href: "#" },
  ],
};

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            {/* Links */}
            <TabGroup className="mt-1">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-blue-600 data-[selected]:text-blue-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-6 px-4 pb-8 pt-4"
                  >
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="ml-4 mt-6 flex flex-col space-y-4"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-4 border-t border-gray-200 px-4 py-4">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

            

            



             

               
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

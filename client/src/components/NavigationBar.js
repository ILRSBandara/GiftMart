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

     
    </div>
  );
}

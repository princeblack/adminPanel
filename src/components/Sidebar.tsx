"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebarSlice";
import {
  HomeIcon,
  Euro,
  UserIcon,
  Mail,
  SettingsIcon,
  ShieldCheck,
  HelpCircleIcon,
  ChartNoAxesCombined,
  ReceiptEuro,
  ShoppingBasket,
  User,
  Users
} from "lucide-react"; // Exemples d'icônes
import { ChevronFirst, ChevronLast } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn} from "@/lib/utils"
const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const pathName = usePathname();

  const generalMenuItems = [
    { label: "Dashboard", icon: <HomeIcon size={24} className="mr-1"/>, path: "/dashboard" },
    { label: "Order", icon: <Euro size={24} className="mr-1"/>, path: "/order" },
    { label: "Product", icon: <ShoppingBasket size={24} className="mr-1"/>, path: "/product" },
    { label: "Customers", icon: <UserIcon size={24} className="mr-1"/>, path: "/customers" },
  ];
  const toolsMenuItems = [
    { label: "Message", icon: <Mail size={24} className="mr-1"/>, path: "/message" },
    { label: "Invoice", icon: <ReceiptEuro size={24} className="mr-1"/>, path: "/invoice" },
    { label: "Analytics", icon: <ChartNoAxesCombined size={24} className="mr-1"/>, path: "/analytics" },
  ];
  const supportMenuItems = [
    { label: "Settings", icon: <SettingsIcon size={24} className="mr-1" />, path: "/settings" },
    { label: "Security", icon: <ShieldCheck size={24} className="mr-1"/>, path: "/security" },
    { label: "Help", icon: <HelpCircleIcon size={24} className="mr-1"/>, path: "/help" },
  ];
  const accountMenuItems = [
    { label: "Account", icon: <User size={24} className="mr-1"/>, path: "/account" },
    { label: "Members", icon: <Users size={24} className="mr-1"/>, path: "/members" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 text-white h-screen transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <h1 className={`${isOpen ? "block" : "hidden"} text-xl font-bold`}>
          Admin Panel
        </h1>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="bg-gray-700 rounded-full p-2"
        >
          {isOpen ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 items-center mt-4 gap-4 px-4">
        <p className="mb-2">GENERAL</p>
        <ul>
          {generalMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center text-sm py-2 hover:bg-gray-800 cursor-pointer",
                {
                  " bg-gray-800 ": pathName === item.path,
                }
              )}
            >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>
      <nav className="flex-1 items-center mt-2 gap-4 px-4">
        <p className="mb-2">TOOLS</p>
        <ul>
          {toolsMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center text-sm py-2 hover:bg-gray-800 cursor-pointer",
                {
                  " bg-gray-800 ": pathName === item.path,
                }
              )}            >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>
      <nav className="flex-1 items-center mt-2 gap-4 px-4">
        <p className="mb-2">SUPPORT</p>
        <ul>
          {supportMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center text-sm py-2 hover:bg-gray-800 cursor-pointer",
                {
                  " bg-gray-800 ": pathName === item.path,
                }
              )}            >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>
      <nav className="flex-1 items-center mt-2 gap-4 px-4">
        <p className="mb-2">ACCOUNT</p>
        <ul>
          {accountMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center text-sm py-2 hover:bg-gray-800 cursor-pointer",
                {
                  " bg-gray-800 ": pathName === item.path,
                }
              )}            >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-700">
        <p className={`${isOpen ? "block" : "hidden"} text-sm`}>
          © 2024 E-Shop, Inc.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

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
import {Divider} from "@nextui-org/divider";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const pathName = usePathname();

  const generalMenuItems = [
    { label: "Dashboard", icon: <HomeIcon className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/dashboard" },
    { label: "Order", icon: <Euro className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/order" },
    { label: "Product", icon: <ShoppingBasket className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/product" },
    { label: "Customers", icon: <UserIcon className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/customers" },
  ];
  const toolsMenuItems = [
    { label: "Message", icon: <Mail className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/message" },
    { label: "Invoice", icon: <ReceiptEuro className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/invoice" },
    { label: "Analytics", icon: <ChartNoAxesCombined className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/analytics" },
  ];
  const supportMenuItems = [
    { label: "Settings", icon: <SettingsIcon className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")} />, path: "/settings" },
    { label: "Security", icon: <ShieldCheck className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/security" },
    { label: "Help", icon: <HelpCircleIcon className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/help" },
  ];
  const accountMenuItems = [
    { label: "Account", icon: <User className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/account" },
    { label: "Members", icon: <Users className={cn("mr-1",isOpen ? "w-6 h-6 transition-all duration-300" : "w-9 h-9 transition-all duration-300")}/>, path: "/members" },
  ];
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-[#0b3c45] text-white h-screen transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <h1 className={`${isOpen ? "block" : "hidden"} text-xl font-bold`}>
          Admin Panel
        </h1>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="bg-[#090909] rounded-full p-2"
        >
          {isOpen ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-col mb-3 items-center mt-4 gap-4 px-4">
        <p className={cn("mb-2 pl-2 text-[#fafff8]",
          isOpen ? "block" : "hidden"
        )}>GENERAL</p>
        <ul>
          {generalMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center p-2 text-sm py-2 rounded-lg hover:bg-[#1f2937] cursor-pointer",
                {
                  "bg-[#000000] ": pathName === item.path,
                }
              )}
            >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>

      <nav className="flex-col mb-3 items-center mt-4 gap-4 px-4">
      <p className={cn("mb-2 pl-2 text-[#fafff8]",
          isOpen ? "block" : "hidden"
        )}>TOOLS</p>
        <ul>
          {toolsMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center p-2 text-sm py-2 rounded-lg hover:bg-[#1f2937] cursor-pointer",
                {
                  "bg-[#000000] ": pathName === item.path,
                }
              )}          >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>

      <nav className="flex-col mb-3 items-center mt-4 gap-4 px-4">
      <p className={cn("mb-2 pl-2 text-[#fafff8]",
          isOpen ? "block" : "hidden"
        )}>SUPPORT</p>
        <ul>
          {supportMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center p-2 text-sm py-2 rounded-lg hover:bg-[#1f2937] cursor-pointer",
                {
                  "bg-[#000000] ": pathName === item.path,
                }
              )}           >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>

         <nav className="flex-col mb-3 items-center mt-4 gap-4 px-4">
        <p className={cn("mb-2 pl-2 text-[#fafff8]",
          isOpen ? "block" : "hidden"
        )}>ACCOUNT</p>
        <ul>
          {accountMenuItems.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={cn("flex items-center p-2 text-sm py-2 rounded-lg hover:bg-[#1f2937] cursor-pointer",
                {
                  "bg-[#000000] ": pathName === item.path,
                }
              )}          >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>
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

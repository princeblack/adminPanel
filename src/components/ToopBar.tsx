"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebarSlice";
import { BellIcon, SearchIcon, MenuIcon } from "lucide-react";
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";


const Topbar = () => {
  const dispatch = useDispatch();

  return (
    <header className="w-full bg-white shadow-md px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Menu burger (visible sur mobile) */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 bg-gray-100 rounded-md"
          onClick={() => dispatch(toggleSidebar())}
        >
          <MenuIcon />
        </button>

        {/* Titre ou logo */}
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">
          Dashboard
        </h1>
      </div>

      {/* Barre de recherche */}
      <div className="relative flex-1 mx-4 max-w-lg">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Rechercher..."
        />
        <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Actions utilisateur */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <BellIcon />
          {/* Badge pour les notifications */}
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profil utilisateur */}
        <div className="flex items-center gap-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="hidden md:block">
            {/* <Button onClick={()=> redirect('/user-profile')}>Profile</Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

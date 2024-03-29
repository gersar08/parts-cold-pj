import React from "react";
import logo from "../img/partsfrio.jpg";
export default function Header() {
  return (
    <div class="p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">
      <span class="px-2 mr-2 border-r border-gray-800">
        <img
          src={logo}
          alt="alt placeholder"
          class="w-15 h-11 -mt-1 inline mx-auto"
        />
      </span>
      <span class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
        <i class="w-8 fas fa-stream p-2 bg-gray-200 rounded-full"></i>
        <span class="mx-1">categories</span>
      </span>
      <span class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
        <i class="w-8 fas fa-th p-2 bg-gray-200 rounded-full"></i>
        <span class="mx-1">menu</span>
      </span>
      <span class="px-1 cursor-pointer hover:text-gray-700">
        <i class="fas fa-search p-2 bg-gray-200 rounded-full"></i>
      </span>
      <span class="px-1 cursor-pointer hover:text-gray-700">
        <i class="w-8 fas fa-calendar-alt p-2 bg-gray-200 rounded-full"></i>
      </span>
      <span class="px-1 w-8 relative cursor-pointer hover:text-gray-700">
        <i class="w-8 fas fa-bell p-2 bg-gray-200 rounded-full"></i>
        <span class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
          3
          {
            //Cambiar el numero por una variable que contenga los estados de las notificaciones
          }
        </span>
      </span>
      <span class="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
        <i class="w-8 fas fa-user p-2 bg-gray-200 rounded-full"></i>
        <span class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
          3
          {
            //Cambiar el numero por una variable que contenga los estados de las notificaciones
          }
        </span>
      </span>
    </div>
  );
}

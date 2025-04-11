import React from "react";
import {
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiOutlineMessage,
  AiFillBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

const BottomNav = () => {
  const tabs = [
    { label: "Home", icon: <AiFillHome size={24} />, notif: 0 },
    { label: "Menu", icon: <AiOutlineUsergroupAdd size={24} />, notif: 1 },
    { label: "Find us", icon: <BsBriefcase size={24} />, notif: 0 },
    { label: "Support", icon: <AiOutlineMessage size={24} />, notif: 0 },
    { label: "Notifications", icon: <AiFillBell size={24} />, notif: 7 },
    {
      label: "Me",
      icon: <img src="/avatar.jpg" alt="Me" className="w-6 h-6 rounded-full" />,
      notif: null,
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-2 z-50">
      {tabs.map((tab, idx) => (
        <div key={idx} className="relative flex flex-col items-center text-xs text-gray-700">
          {tab.icon}
          {tab.notif !== null && tab.notif > 0 && (
            <span className="absolute top-0 right-1 text-white bg-red-600 rounded-full text-xs px-1">
              {tab.notif}
            </span>
          )}
          <span className="mt-1">{tab.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;

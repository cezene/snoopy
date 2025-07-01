"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";
import TestUserDialog from "./TestUserDialog";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col !gap-4">
        <Link
          href="/"
          className="!mb-12 cursor-pointer flex items-center gap-2"
        >
          <Image
            src={"/icons/snoopy-bank-logo.png"}
            width={34}
            height={34}
            alt="Snoopy Logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Snoopy</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", {
                "bg-orange-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className="brightness-[3] invert-0"
                />
              </div>
              <p className="sidebar-label">{item.label}</p>
            </Link>
          );
        })}
        <PlaidLink user={user} />
        <TestUserDialog />
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;

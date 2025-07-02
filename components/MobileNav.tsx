"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";
import TestUserDialog from "./TestUserDialog";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[24px] bg-zinc-950">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer brightness-[3] invert-0"
          />
        </SheetTrigger>
        <SheetContent side="left" className="borber-none bg-zinc-950">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 !px-4"
          >
            <Image
              src={"/icons/snoopy-bank-logo.png"}
              width={34}
              height={34}
              alt="Snoopy Logo"
            />
            <h1 className="text26 font-ibm-plex-serif font-bold text-slate-50">
              Snoopy
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 !pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full h-12", {
                          "bg-orange-gradient": isActive,
                        })}
                      >
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className=
                              "brightness-[3] invert-0"
                          />
                        <p
                          className="text16 font-semibold text-slate-50"
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                <PlaidLink user={user} />
                <TestUserDialog />
                </nav>
            </SheetClose>
            <Footer user={user} type="mobile"/>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

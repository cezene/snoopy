import React from "react";
import Image from "next/image";
import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

function Footer({ user, type = "desktop" }: FooterProps) {
  const isMobile = type === "mobile";
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push("/sign-in");
  };
  return (
    <footer className="footer">
      <div className={isMobile ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-orange-950">
          {user?.firstName[0]}
        </p>
      </div>
      <div className={isMobile ? "footer_email-mobile" : "footer_email"}>
        <h1 className="text14 truncate text-orange-300 font-semibold">
          {user?.firstName}
        </h1>
        <p className="text14 truncate font-normal text-orange-200">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image
          src="icons/logout.svg"
          fill
          alt="Logout icon"
          className="brightness-[3] invert-0"
        />
      </div>
    </footer>
  );
}

export default Footer;

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import Image from "next/image";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, [user]);
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });
      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };
  const { open } = usePlaidLink(config);
  return (
    <>
      <Button onClick={() => open()} className="plaidlink-default sidebar-link">
        <Image
          src="/icons/connect-bank.svg"
          alt="Connect bank"
          width={24}
          height={24}
          className="brightness-[3] invert-0"
        />
        <p className="text-[16px] font-semibold text-slate-50">Connect bank</p>
      </Button>
    </>
  );
};

export default PlaidLink;

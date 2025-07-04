"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { formUrlQuery, formatAmount } from "@/lib/utils";

export const BankDropdown = ({
  accounts = [],
  setValue,
  otherStyles,
  senderBank,
}: BankDropdownProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSeclected] = useState(accounts[0]);

  const handleBankChange = useCallback(
    (id: string) => {
      const account = accounts.find(
        (account) => account.appwriteItemId === id
      )!;

      setSeclected(account);
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "id",
        value: id,
      });
      router.push(newUrl, { scroll: false });

      if (setValue) {
        setValue("senderBank", id);
      }
    },
    [accounts, router, searchParams, setValue]
  );

  useEffect(() => {
    if (senderBank === "") {
      handleBankChange(accounts[0].appwriteItemId);
    }
  }, [handleBankChange, accounts, senderBank]);

  return (
    <Select
      defaultValue={selected.id}
      onValueChange={(value) => handleBankChange(value)}
    >
      <SelectTrigger
        className={`flex w-full !gap-3 md:w-[300px] bg-slate-50 ${otherStyles}`}
      >
        <Image
          src="icons/credit-card.svg"
          width={20}
          height={20}
          alt="account"
          className="brightness-[0.25] invert-0"
        />
        <p className="line-clamp-1 w-full text-left ">{selected.name}</p>
      </SelectTrigger>
      <SelectContent
        className={`w-full md:w-[300px] bg-slate-100 ${otherStyles}`}
        align="end"
      >
        <SelectGroup>
          <SelectLabel className="!py-2 text-gray-600 text16 font-medium">
            Select a bank to display
          </SelectLabel>
          {accounts.map((account: Account) => (
            <SelectItem
              key={account.id}
              value={account.appwriteItemId}
              className="cursor-pointer border-t"
            >
              <div className="flex flex-col">
                <p className="text16 font-medium ">{account.name}</p>
                <p className="text14 font-medium text-orange-400">
                  {formatAmount(account.currentBalance)}
                </p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

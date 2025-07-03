"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import { formUrlQuery, formatAmount, getAccountTypeColors } from "@/lib/utils";

const BankInfo = ({ account, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className="bank-info bg-stone-900 border-2 border-slate-50 rounded-lg"
    >
      <figure
        className={`flex-center !h-fit rounded-full bg-orange-200 ${colors.lightBg}`}
      >
        <Image
          src="/icons/connect-bank.svg"
          width={20}
          height={20}
          alt={account.subtype}
          className="!m-2 !min-w-5 brightness-[0.25] invert-0"
        />
      </figure>
      <div className="flex w-full flex-1 flex-col justify-center gap-1">
        <div className="bank-info_content">
          <h2
            className={`text-16 line-clamp-1 flex-1 font-bold text-blue-900 ${colors.title}`}
          >
            {account.name}
          </h2>
          {type === "full" && (
            <p
              className={`text-12 rounded-full !px-3 !py-1 font-medium text-orange-950 ${colors.subText} ${colors.lightBg}`}
            >
              {account.subtype}
            </p>
          )}
        </div>

        <p className={`text-16 font-medium text-slate-50 ${colors.subText}`}>
          {formatAmount(account.currentBalance)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;

import HeaderBox from "@/components/HeaderBox";
import TransactionTable from "@/components/TransactionTable";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { formatAmount } from "@/lib/utils";
import React from "react";

const TransactionHistory = async ({
  searchParams
}: SearchParamProps) => {
  const searchParamsData = await searchParams;
  const currentPage = Number(searchParamsData.page as string) || 1;

  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedIn?.$id });

  if (!accounts) return;

  const accountsData = accounts?.data;

  const appwriteItemId = (searchParamsData.id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });


  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>
      <div className="!space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text18 font-bold text-white">
              {account?.data.name}
            </h2>
            <p className="text14 text-blue-25">{account?.data.officialName}</p>
            <p className="text14 font-semibold tracking-[1.1px] text-white">
              ● ● ● ● ● ● ● ● ● ● ● ●{account?.data.mask}
            </p>
          </div>
          <div className="transactions-account-balance">
            <p className="text14">
              Current Balance
            </p>
            <p className="text24 text-center font-bold">
              {formatAmount(account?.data.currentBalance)}
            </p>
          </div>
        </div>
        <section className="w-full flex flex-col gap-6">
          <TransactionTable 
            transactions={account?.transactions}
            
          />
        </section>
      </div>
    </div>
  );
};

export default TransactionHistory;

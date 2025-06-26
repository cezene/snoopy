import HeaderBox from "@/components/HeaderBox";
import { Pagination } from "@/components/Pagination";
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

  const rowsPerPage = 10;
  const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);
  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
  const currentTransaction = account?.transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="Dig into your past transactions with ease."
        />
      </div>
      <div className="!space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text18 font-bold text-slate-50">
              {account?.data.name}
            </h2>
            <p className="text14 text-slate-50">{account?.data.officialName}</p>
            <p className="text14 font-semibold tracking-[1.1px] text-slate-50">
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
            transactions={currentTransaction}
            
          />
          {totalPages > 1 && (
                        <div className="!my-4 w-full">
                           <Pagination page={currentPage} totalPages={totalPages} />
                        </div>
                       
                      )}
        </section>
      </div>
    </div>
  );
};

export default TransactionHistory;

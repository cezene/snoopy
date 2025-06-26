import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactionCategoryStyles } from "@/constants";
import {
  cn,
  formatAmount,
  formatDateTime,
  getTransactionStatus,
} from "@/lib/utils";

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { backgroundColor, textColor } =
    transactionCategoryStyles[
      category as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default;
  return (
    <div className={cn("category-badge" )}>
      <div className={cn("size-2 rounded-full", backgroundColor)} />
      <p className={cn("text-[12px] font-medium", textColor)}>{category}</p>
    </div>
  );
};

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table className="bg-stone-900 rounded-lg overflow-hidden text-slate-50">
      <TableHeader className="border-b-2 border-slate-50">
        <TableRow >
          <TableHead className="!px-2">Transaction</TableHead>
          <TableHead className="!px-2">Amount</TableHead>
          <TableHead className="!px-2">Status</TableHead>
          <TableHead className="!px-2">Date</TableHead>
          <TableHead className="!px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="!px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions?.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date));
          const amount = formatAmount(t.amount);
          const isDebit = t.type === "debit";
          const isCredit = t.type === "credit";
          return (
            <TableRow
              key={t.id}
              className={`!border-none !h-12`}
            >
              <TableCell className="max-w-[250px] !pl-2 !pr-10">
                <div className="flex-items-center gap-3">
                  <h1 className="text14 truncate font-semibold">
                    {t.name}
                  </h1>
                </div>
              </TableCell>
              <TableCell
                className={`!pl-2 !pr-10 font-semibold ${
                  isDebit || amount[0] === "-"
                    ? "text-red-400"
                    : "text=[#039855]"
                }`}
              >
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>
              <TableCell className="!pl-2 !pr-10">
                <CategoryBadge category={status} />
              </TableCell>
              <TableCell className="min-w-32 !pl-2 !pr-10">
                {formatDateTime(new Date(t.date)).dateTime}
              </TableCell>
              <TableCell className="min-w-24 !pl-2 !pr-10 capitalize">
                {t.paymentChannel}
              </TableCell>
              <TableCell className="max-md:hidden !pl-2! pr-10">
                <CategoryBadge category={t.personalFinanceCategoryPrimary || t.personalFinanceCategoryDetailed || "Others" } />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;

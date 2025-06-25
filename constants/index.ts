export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

// export const topCategoryStyles = {
//   "FOOD_AND_DRINK": {
//     bg: "bg-blue-25",
//     circleBg: "bg-blue-100",
//     text: {
//       main: "text-blue-900",
//       count: "text-blue-700",
//     },
//     progress: {
//       bg: "bg-blue-100",
//       indicator: "bg-blue-700",
//     },
//     icon: "/icons/monitor.svg",
//   },
//   TRAVEL: {
//     bg: "bg-success-25",
//     circleBg: "bg-success-100",
//     text: {
//       main: "text-success-900",
//       count: "text-success-700",
//     },
//     progress: {
//       bg: "bg-success-100",
//       indicator: "bg-success-700",
//     },
//     icon: "/icons/coins.svg",
//   },
//   default: {
//     bg: "bg-pink-25",
//     circleBg: "bg-pink-100",
//     text: {
//       main: "text-pink-900",
//       count: "text-pink-700",
//     },
//     progress: {
//       bg: "bg-pink-100",
//       indicator: "bg-pink-700",
//     },
//     icon: "/icons/shopping-bag.svg",
//   },
// };

export const transactionCategoryStyles = {
  "FOOD_AND_DRINK": {
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-300"
  },
  Payment: {
    backgroundColor: "bg-green-600",
    textColor: "text-success-300"
  },
  "GENERAL_MERCHANDISE": {
    backgroundColor: "bg-green-600",
    textColor: "text-green-300"
  },
  TRANSPORTATION: {
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-300"
  },
  "LOAN_PAYMENTS": {
    backgroundColor: "bg-red-700",
    textColor: "text-red-300"
  },
  "INCOME": {
    backgroundColor: "bg-lime-500",
    textColor: "text-lime-300"
  },
  Processing: {
    backgroundColor: "bg-gray-300",
    textColor: "text-gray-300"
  },
  Success: {
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-lime-300"
  },
  TRAVEL: {
    backgroundColor: "bg-blue-500",
    textColor: "text-cyan-300"
  },
  default: {
    backgroundColor: "bg-emerald-700",
    textColor: "text-emerald-400"
  },
};

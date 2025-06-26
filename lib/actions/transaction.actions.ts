// import { createAdminClient } from "../server/appwrite";

// export const createTransaction = async (
//   transaction: CreateTransactionProps
// ) => {
//   const {
//     APPWRITE_DATABASE_ID: DATABASE_ID,
//     APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
//     APPWRITE_TRANSACTION_COLLECTION_ID: TRANSACTION_COLLECTION_ID,
//   } = process.env;
//   try {
//     const { database } = await createAdminClient();
//     const newTransaction = await database.createDocument(
//       DATABASE_ID,
//       TRANSACTION_COLLECTION_ID,
//       ID.unique(),

//       { chanel: "online", category: "Transfer", ...transaction }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

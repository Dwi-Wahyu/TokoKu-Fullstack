export enum ExpenseCategory {
  STOCK_PURCHASE = "STOCK_PURCHASE",
  SALARY = "SALARY",
  OPERATIONAL = "OPERATIONAL",
  UTILITIES = "UTILITIES",
}

export const ExpenseCategoryLabel: Record<ExpenseCategory, string> = {
  [ExpenseCategory.STOCK_PURCHASE]: "Pembelian Stok",
  [ExpenseCategory.SALARY]: "Gaji",
  [ExpenseCategory.OPERATIONAL]: "Operasional",
  [ExpenseCategory.UTILITIES]: "Utilitas",
};

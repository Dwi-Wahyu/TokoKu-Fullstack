export enum StockMovementType {
  PURCHASE = "PURCHASE",
  SALE = "SALE",
  RETURN = "RETURN",
  ADJUSTMENT = "ADJUSTMENT",
}

export const StockMovementTypeLabel: Record<StockMovementType, string> = {
  [StockMovementType.PURCHASE]: "Pembelian",
  [StockMovementType.SALE]: "Penjualan",
  [StockMovementType.RETURN]: "Retur",
  [StockMovementType.ADJUSTMENT]: "Penyesuaian",
};

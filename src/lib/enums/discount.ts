export enum DiscountType {
  PERCENTAGE = "PERCENTAGE",
  FIXED_AMOUNT = "FIXED_AMOUNT",
}

export const DiscountTypeLabel: Record<DiscountType, string> = {
  [DiscountType.PERCENTAGE]: "Persentase",
  [DiscountType.FIXED_AMOUNT]: "Jumlah Tetap",
};

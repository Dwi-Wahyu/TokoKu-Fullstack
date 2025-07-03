export enum OrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export const OrderStatusLabel: Record<OrderStatus, string> = {
  [OrderStatus.PENDING]: "Menunggu",
  [OrderStatus.COMPLETED]: "Selesai",
  [OrderStatus.CANCELLED]: "Dibatalkan",
};

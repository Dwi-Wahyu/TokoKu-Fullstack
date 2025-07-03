export enum Role {
  ADMIN = "ADMIN",
  CASHIER = "CASHIER",
}

export const RoleLabel: Record<Role, string> = {
  [Role.ADMIN]: "Admin",
  [Role.CASHIER]: "Kasir",
};

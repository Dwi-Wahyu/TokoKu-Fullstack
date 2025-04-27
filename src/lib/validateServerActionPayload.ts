// lib/server-action-utils.ts
import { z, ZodError, ZodType } from "zod";

type ServerActionResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: any;
  errorCode?: string;
  field?: string;
  validationErrors?: {
    path: string;
    message: string;
  }[];
};

export async function validateServerActionPayload<T extends ZodType>(
  payload: unknown,
  schema: T
): Promise<{ data?: z.infer<T>; error?: ServerActionResponse }> {
  try {
    const data = schema.parse(payload);
    return { data };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        error: {
          success: false,
          validationErrors: error.errors.map((e) => ({
            path: e.path.join("."),
            message: e.message,
          })),
        },
      };
    }
    return {
      error: {
        success: false,
        error: "Invalid payload",
      },
    };
  }
}

export function handlePrismaUniqueViolation(error: any): ServerActionResponse {
  if (error.code === "P2002") {
    const { target } = error.meta;
    const splitTarget = target.split("_");
    return {
      success: false,
      errorCode: "P2002",
      field: splitTarget[1],
    };
  }

  return {
    success: false,
    error,
  };
}

export async function executeServerActionPayload<T>(
  action: () => Promise<T>
): Promise<ServerActionResponse<T>> {
  try {
    const data = await action();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handlePrismaUniqueViolation(error);
  }
}

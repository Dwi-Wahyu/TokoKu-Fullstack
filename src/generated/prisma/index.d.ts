
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model pengguna
 * 
 */
export type pengguna = $Result.DefaultSelection<Prisma.$penggunaPayload>
/**
 * Model tugas
 * 
 */
export type tugas = $Result.DefaultSelection<Prisma.$tugasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PeranPengguna: {
  praktikan: 'praktikan',
  asisten: 'asisten',
  admin: 'admin'
};

export type PeranPengguna = (typeof PeranPengguna)[keyof typeof PeranPengguna]

}

export type PeranPengguna = $Enums.PeranPengguna

export const PeranPengguna: typeof $Enums.PeranPengguna

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Penggunas
 * const penggunas = await prisma.pengguna.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Penggunas
   * const penggunas = await prisma.pengguna.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pengguna`: Exposes CRUD operations for the **pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penggunas
    * const penggunas = await prisma.pengguna.findMany()
    * ```
    */
  get pengguna(): Prisma.penggunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tugas`: Exposes CRUD operations for the **tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugases
    * const tugases = await prisma.tugas.findMany()
    * ```
    */
  get tugas(): Prisma.tugasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    pengguna: 'pengguna',
    tugas: 'tugas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pengguna" | "tugas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pengguna: {
        payload: Prisma.$penggunaPayload<ExtArgs>
        fields: Prisma.penggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findFirst: {
            args: Prisma.penggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findMany: {
            args: Prisma.penggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          create: {
            args: Prisma.penggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          createMany: {
            args: Prisma.penggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.penggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          update: {
            args: Prisma.penggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          deleteMany: {
            args: Prisma.penggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.penggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          aggregate: {
            args: Prisma.PenggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengguna>
          }
          groupBy: {
            args: Prisma.penggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.penggunaCountArgs<ExtArgs>
            result: $Utils.Optional<PenggunaCountAggregateOutputType> | number
          }
        }
      }
      tugas: {
        payload: Prisma.$tugasPayload<ExtArgs>
        fields: Prisma.tugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          findFirst: {
            args: Prisma.tugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          findMany: {
            args: Prisma.tugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>[]
          }
          create: {
            args: Prisma.tugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          createMany: {
            args: Prisma.tugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          update: {
            args: Prisma.tugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          deleteMany: {
            args: Prisma.tugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          aggregate: {
            args: Prisma.TugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTugas>
          }
          groupBy: {
            args: Prisma.tugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tugasCountArgs<ExtArgs>
            result: $Utils.Optional<TugasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pengguna?: penggunaOmit
    tugas?: tugasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model pengguna
   */

  export type AggregatePengguna = {
    _count: PenggunaCountAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  export type PenggunaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    username: string | null
    password: string | null
    peran: $Enums.PeranPengguna | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    username: string | null
    password: string | null
    peran: $Enums.PeranPengguna | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenggunaCountAggregateOutputType = {
    id: number
    nama: number
    username: number
    password: number
    peran: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PenggunaMinAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenggunaCountAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PenggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengguna to aggregate.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penggunas
    **/
    _count?: true | PenggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenggunaMaxAggregateInputType
  }

  export type GetPenggunaAggregateType<T extends PenggunaAggregateArgs> = {
        [P in keyof T & keyof AggregatePengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengguna[P]>
      : GetScalarType<T[P], AggregatePengguna[P]>
  }




  export type penggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithAggregationInput | penggunaOrderByWithAggregationInput[]
    by: PenggunaScalarFieldEnum[] | PenggunaScalarFieldEnum
    having?: penggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenggunaCountAggregateInputType | true
    _min?: PenggunaMinAggregateInputType
    _max?: PenggunaMaxAggregateInputType
  }

  export type PenggunaGroupByOutputType = {
    id: string
    nama: string
    username: string
    password: string
    peran: $Enums.PeranPengguna
    createdAt: Date
    updatedAt: Date
    _count: PenggunaCountAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  type GetPenggunaGroupByPayload<T extends penggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
            : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
        }
      >
    >


  export type penggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    peran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pengguna"]>



  export type penggunaSelectScalar = {
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    peran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type penggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "username" | "password" | "peran" | "createdAt" | "updatedAt", ExtArgs["result"]["pengguna"]>

  export type $penggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengguna"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      username: string
      password: string
      peran: $Enums.PeranPengguna
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pengguna"]>
    composites: {}
  }

  type penggunaGetPayload<S extends boolean | null | undefined | penggunaDefaultArgs> = $Result.GetResult<Prisma.$penggunaPayload, S>

  type penggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenggunaCountAggregateInputType | true
    }

  export interface penggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pengguna'], meta: { name: 'pengguna' } }
    /**
     * Find zero or one Pengguna that matches the filter.
     * @param {penggunaFindUniqueArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penggunaFindUniqueArgs>(args: SelectSubset<T, penggunaFindUniqueArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penggunaFindUniqueOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, penggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penggunaFindFirstArgs>(args?: SelectSubset<T, penggunaFindFirstArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, penggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penggunas
     * const penggunas = await prisma.pengguna.findMany()
     * 
     * // Get first 10 Penggunas
     * const penggunas = await prisma.pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends penggunaFindManyArgs>(args?: SelectSubset<T, penggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengguna.
     * @param {penggunaCreateArgs} args - Arguments to create a Pengguna.
     * @example
     * // Create one Pengguna
     * const Pengguna = await prisma.pengguna.create({
     *   data: {
     *     // ... data to create a Pengguna
     *   }
     * })
     * 
     */
    create<T extends penggunaCreateArgs>(args: SelectSubset<T, penggunaCreateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penggunas.
     * @param {penggunaCreateManyArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penggunaCreateManyArgs>(args?: SelectSubset<T, penggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pengguna.
     * @param {penggunaDeleteArgs} args - Arguments to delete one Pengguna.
     * @example
     * // Delete one Pengguna
     * const Pengguna = await prisma.pengguna.delete({
     *   where: {
     *     // ... filter to delete one Pengguna
     *   }
     * })
     * 
     */
    delete<T extends penggunaDeleteArgs>(args: SelectSubset<T, penggunaDeleteArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengguna.
     * @param {penggunaUpdateArgs} args - Arguments to update one Pengguna.
     * @example
     * // Update one Pengguna
     * const pengguna = await prisma.pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penggunaUpdateArgs>(args: SelectSubset<T, penggunaUpdateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penggunas.
     * @param {penggunaDeleteManyArgs} args - Arguments to filter Penggunas to delete.
     * @example
     * // Delete a few Penggunas
     * const { count } = await prisma.pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penggunaDeleteManyArgs>(args?: SelectSubset<T, penggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penggunaUpdateManyArgs>(args: SelectSubset<T, penggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengguna.
     * @param {penggunaUpsertArgs} args - Arguments to update or create a Pengguna.
     * @example
     * // Update or create a Pengguna
     * const pengguna = await prisma.pengguna.upsert({
     *   create: {
     *     // ... data to create a Pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengguna we want to update
     *   }
     * })
     */
    upsert<T extends penggunaUpsertArgs>(args: SelectSubset<T, penggunaUpsertArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaCountArgs} args - Arguments to filter Penggunas to count.
     * @example
     * // Count the number of Penggunas
     * const count = await prisma.pengguna.count({
     *   where: {
     *     // ... the filter for the Penggunas we want to count
     *   }
     * })
    **/
    count<T extends penggunaCountArgs>(
      args?: Subset<T, penggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PenggunaAggregateArgs>(args: Subset<T, PenggunaAggregateArgs>): Prisma.PrismaPromise<GetPenggunaAggregateType<T>>

    /**
     * Group by Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends penggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penggunaGroupByArgs['orderBy'] }
        : { orderBy?: penggunaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, penggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pengguna model
   */
  readonly fields: penggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pengguna model
   */
  interface penggunaFieldRefs {
    readonly id: FieldRef<"pengguna", 'String'>
    readonly nama: FieldRef<"pengguna", 'String'>
    readonly username: FieldRef<"pengguna", 'String'>
    readonly password: FieldRef<"pengguna", 'String'>
    readonly peran: FieldRef<"pengguna", 'PeranPengguna'>
    readonly createdAt: FieldRef<"pengguna", 'DateTime'>
    readonly updatedAt: FieldRef<"pengguna", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pengguna findUnique
   */
  export type penggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findUniqueOrThrow
   */
  export type penggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findFirst
   */
  export type penggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findFirstOrThrow
   */
  export type penggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findMany
   */
  export type penggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Filter, which penggunas to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna create
   */
  export type penggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * The data needed to create a pengguna.
     */
    data: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
  }

  /**
   * pengguna createMany
   */
  export type penggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penggunas.
     */
    data: penggunaCreateManyInput | penggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengguna update
   */
  export type penggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * The data needed to update a pengguna.
     */
    data: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
    /**
     * Choose, which pengguna to update.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna updateMany
   */
  export type penggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penggunas.
     */
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyInput>
    /**
     * Filter which penggunas to update
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to update.
     */
    limit?: number
  }

  /**
   * pengguna upsert
   */
  export type penggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * The filter to search for the pengguna to update in case it exists.
     */
    where: penggunaWhereUniqueInput
    /**
     * In case the pengguna found by the `where` argument doesn't exist, create a new pengguna with this data.
     */
    create: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
    /**
     * In case the pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
  }

  /**
   * pengguna delete
   */
  export type penggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Filter which pengguna to delete.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna deleteMany
   */
  export type penggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penggunas to delete
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to delete.
     */
    limit?: number
  }

  /**
   * pengguna without action
   */
  export type penggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
  }


  /**
   * Model tugas
   */

  export type AggregateTugas = {
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  export type TugasAvgAggregateOutputType = {
    id: number | null
  }

  export type TugasSumAggregateOutputType = {
    id: number | null
  }

  export type TugasMinAggregateOutputType = {
    id: number | null
    judul: string | null
    deskripsi: string | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TugasMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    deskripsi: string | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TugasCountAggregateOutputType = {
    id: number
    judul: number
    deskripsi: number
    deadline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TugasAvgAggregateInputType = {
    id?: true
  }

  export type TugasSumAggregateInputType = {
    id?: true
  }

  export type TugasMinAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TugasMaxAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TugasCountAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tugas to aggregate.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tugases
    **/
    _count?: true | TugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TugasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TugasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMaxAggregateInputType
  }

  export type GetTugasAggregateType<T extends TugasAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas[P]>
      : GetScalarType<T[P], AggregateTugas[P]>
  }




  export type tugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tugasWhereInput
    orderBy?: tugasOrderByWithAggregationInput | tugasOrderByWithAggregationInput[]
    by: TugasScalarFieldEnum[] | TugasScalarFieldEnum
    having?: tugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasCountAggregateInputType | true
    _avg?: TugasAvgAggregateInputType
    _sum?: TugasSumAggregateInputType
    _min?: TugasMinAggregateInputType
    _max?: TugasMaxAggregateInputType
  }

  export type TugasGroupByOutputType = {
    id: number
    judul: string
    deskripsi: string
    deadline: Date
    createdAt: Date
    updatedAt: Date
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  type GetTugasGroupByPayload<T extends tugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TugasGroupByOutputType[P]>
            : GetScalarType<T[P], TugasGroupByOutputType[P]>
        }
      >
    >


  export type tugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tugas"]>



  export type tugasSelectScalar = {
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "deskripsi" | "deadline" | "createdAt" | "updatedAt", ExtArgs["result"]["tugas"]>

  export type $tugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tugas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      deskripsi: string
      deadline: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tugas"]>
    composites: {}
  }

  type tugasGetPayload<S extends boolean | null | undefined | tugasDefaultArgs> = $Result.GetResult<Prisma.$tugasPayload, S>

  type tugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TugasCountAggregateInputType | true
    }

  export interface tugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tugas'], meta: { name: 'tugas' } }
    /**
     * Find zero or one Tugas that matches the filter.
     * @param {tugasFindUniqueArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tugasFindUniqueArgs>(args: SelectSubset<T, tugasFindUniqueArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tugasFindUniqueOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tugasFindUniqueOrThrowArgs>(args: SelectSubset<T, tugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasFindFirstArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tugasFindFirstArgs>(args?: SelectSubset<T, tugasFindFirstArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasFindFirstOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tugasFindFirstOrThrowArgs>(args?: SelectSubset<T, tugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugases
     * const tugases = await prisma.tugas.findMany()
     * 
     * // Get first 10 Tugases
     * const tugases = await prisma.tugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugasWithIdOnly = await prisma.tugas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tugasFindManyArgs>(args?: SelectSubset<T, tugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tugas.
     * @param {tugasCreateArgs} args - Arguments to create a Tugas.
     * @example
     * // Create one Tugas
     * const Tugas = await prisma.tugas.create({
     *   data: {
     *     // ... data to create a Tugas
     *   }
     * })
     * 
     */
    create<T extends tugasCreateArgs>(args: SelectSubset<T, tugasCreateArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tugases.
     * @param {tugasCreateManyArgs} args - Arguments to create many Tugases.
     * @example
     * // Create many Tugases
     * const tugas = await prisma.tugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tugasCreateManyArgs>(args?: SelectSubset<T, tugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tugas.
     * @param {tugasDeleteArgs} args - Arguments to delete one Tugas.
     * @example
     * // Delete one Tugas
     * const Tugas = await prisma.tugas.delete({
     *   where: {
     *     // ... filter to delete one Tugas
     *   }
     * })
     * 
     */
    delete<T extends tugasDeleteArgs>(args: SelectSubset<T, tugasDeleteArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tugas.
     * @param {tugasUpdateArgs} args - Arguments to update one Tugas.
     * @example
     * // Update one Tugas
     * const tugas = await prisma.tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tugasUpdateArgs>(args: SelectSubset<T, tugasUpdateArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tugases.
     * @param {tugasDeleteManyArgs} args - Arguments to filter Tugases to delete.
     * @example
     * // Delete a few Tugases
     * const { count } = await prisma.tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tugasDeleteManyArgs>(args?: SelectSubset<T, tugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tugasUpdateManyArgs>(args: SelectSubset<T, tugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tugas.
     * @param {tugasUpsertArgs} args - Arguments to update or create a Tugas.
     * @example
     * // Update or create a Tugas
     * const tugas = await prisma.tugas.upsert({
     *   create: {
     *     // ... data to create a Tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas we want to update
     *   }
     * })
     */
    upsert<T extends tugasUpsertArgs>(args: SelectSubset<T, tugasUpsertArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasCountArgs} args - Arguments to filter Tugases to count.
     * @example
     * // Count the number of Tugases
     * const count = await prisma.tugas.count({
     *   where: {
     *     // ... the filter for the Tugases we want to count
     *   }
     * })
    **/
    count<T extends tugasCountArgs>(
      args?: Subset<T, tugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TugasAggregateArgs>(args: Subset<T, TugasAggregateArgs>): Prisma.PrismaPromise<GetTugasAggregateType<T>>

    /**
     * Group by Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tugasGroupByArgs['orderBy'] }
        : { orderBy?: tugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tugas model
   */
  readonly fields: tugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tugas model
   */
  interface tugasFieldRefs {
    readonly id: FieldRef<"tugas", 'Int'>
    readonly judul: FieldRef<"tugas", 'String'>
    readonly deskripsi: FieldRef<"tugas", 'String'>
    readonly deadline: FieldRef<"tugas", 'DateTime'>
    readonly createdAt: FieldRef<"tugas", 'DateTime'>
    readonly updatedAt: FieldRef<"tugas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tugas findUnique
   */
  export type tugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas findUniqueOrThrow
   */
  export type tugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas findFirst
   */
  export type tugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tugases.
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * tugas findFirstOrThrow
   */
  export type tugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tugases.
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * tugas findMany
   */
  export type tugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Filter, which tugases to fetch.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tugases.
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * tugas create
   */
  export type tugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * The data needed to create a tugas.
     */
    data: XOR<tugasCreateInput, tugasUncheckedCreateInput>
  }

  /**
   * tugas createMany
   */
  export type tugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tugases.
     */
    data: tugasCreateManyInput | tugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tugas update
   */
  export type tugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * The data needed to update a tugas.
     */
    data: XOR<tugasUpdateInput, tugasUncheckedUpdateInput>
    /**
     * Choose, which tugas to update.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas updateMany
   */
  export type tugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tugases.
     */
    data: XOR<tugasUpdateManyMutationInput, tugasUncheckedUpdateManyInput>
    /**
     * Filter which tugases to update
     */
    where?: tugasWhereInput
    /**
     * Limit how many tugases to update.
     */
    limit?: number
  }

  /**
   * tugas upsert
   */
  export type tugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * The filter to search for the tugas to update in case it exists.
     */
    where: tugasWhereUniqueInput
    /**
     * In case the tugas found by the `where` argument doesn't exist, create a new tugas with this data.
     */
    create: XOR<tugasCreateInput, tugasUncheckedCreateInput>
    /**
     * In case the tugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tugasUpdateInput, tugasUncheckedUpdateInput>
  }

  /**
   * tugas delete
   */
  export type tugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Filter which tugas to delete.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas deleteMany
   */
  export type tugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tugases to delete
     */
    where?: tugasWhereInput
    /**
     * Limit how many tugases to delete.
     */
    limit?: number
  }

  /**
   * tugas without action
   */
  export type tugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PenggunaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    username: 'username',
    password: 'password',
    peran: 'peran',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    deadline: 'deadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const penggunaOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    username: 'username',
    password: 'password'
  };

  export type penggunaOrderByRelevanceFieldEnum = (typeof penggunaOrderByRelevanceFieldEnum)[keyof typeof penggunaOrderByRelevanceFieldEnum]


  export const tugasOrderByRelevanceFieldEnum: {
    judul: 'judul',
    deskripsi: 'deskripsi'
  };

  export type tugasOrderByRelevanceFieldEnum = (typeof tugasOrderByRelevanceFieldEnum)[keyof typeof tugasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'PeranPengguna'
   */
  export type EnumPeranPenggunaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeranPengguna'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type penggunaWhereInput = {
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    id?: StringFilter<"pengguna"> | string
    nama?: StringFilter<"pengguna"> | string
    username?: StringFilter<"pengguna"> | string
    password?: StringFilter<"pengguna"> | string
    peran?: EnumPeranPenggunaFilter<"pengguna"> | $Enums.PeranPengguna
    createdAt?: DateTimeFilter<"pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"pengguna"> | Date | string
  }

  export type penggunaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: penggunaOrderByRelevanceInput
  }

  export type penggunaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    nama?: StringFilter<"pengguna"> | string
    password?: StringFilter<"pengguna"> | string
    peran?: EnumPeranPenggunaFilter<"pengguna"> | $Enums.PeranPengguna
    createdAt?: DateTimeFilter<"pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"pengguna"> | Date | string
  }, "id" | "username">

  export type penggunaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: penggunaCountOrderByAggregateInput
    _max?: penggunaMaxOrderByAggregateInput
    _min?: penggunaMinOrderByAggregateInput
  }

  export type penggunaScalarWhereWithAggregatesInput = {
    AND?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    OR?: penggunaScalarWhereWithAggregatesInput[]
    NOT?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pengguna"> | string
    nama?: StringWithAggregatesFilter<"pengguna"> | string
    username?: StringWithAggregatesFilter<"pengguna"> | string
    password?: StringWithAggregatesFilter<"pengguna"> | string
    peran?: EnumPeranPenggunaWithAggregatesFilter<"pengguna"> | $Enums.PeranPengguna
    createdAt?: DateTimeWithAggregatesFilter<"pengguna"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"pengguna"> | Date | string
  }

  export type tugasWhereInput = {
    AND?: tugasWhereInput | tugasWhereInput[]
    OR?: tugasWhereInput[]
    NOT?: tugasWhereInput | tugasWhereInput[]
    id?: IntFilter<"tugas"> | number
    judul?: StringFilter<"tugas"> | string
    deskripsi?: StringFilter<"tugas"> | string
    deadline?: DateTimeFilter<"tugas"> | Date | string
    createdAt?: DateTimeFilter<"tugas"> | Date | string
    updatedAt?: DateTimeFilter<"tugas"> | Date | string
  }

  export type tugasOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: tugasOrderByRelevanceInput
  }

  export type tugasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    judul?: string
    AND?: tugasWhereInput | tugasWhereInput[]
    OR?: tugasWhereInput[]
    NOT?: tugasWhereInput | tugasWhereInput[]
    deskripsi?: StringFilter<"tugas"> | string
    deadline?: DateTimeFilter<"tugas"> | Date | string
    createdAt?: DateTimeFilter<"tugas"> | Date | string
    updatedAt?: DateTimeFilter<"tugas"> | Date | string
  }, "id" | "judul">

  export type tugasOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tugasCountOrderByAggregateInput
    _avg?: tugasAvgOrderByAggregateInput
    _max?: tugasMaxOrderByAggregateInput
    _min?: tugasMinOrderByAggregateInput
    _sum?: tugasSumOrderByAggregateInput
  }

  export type tugasScalarWhereWithAggregatesInput = {
    AND?: tugasScalarWhereWithAggregatesInput | tugasScalarWhereWithAggregatesInput[]
    OR?: tugasScalarWhereWithAggregatesInput[]
    NOT?: tugasScalarWhereWithAggregatesInput | tugasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tugas"> | number
    judul?: StringWithAggregatesFilter<"tugas"> | string
    deskripsi?: StringWithAggregatesFilter<"tugas"> | string
    deadline?: DateTimeWithAggregatesFilter<"tugas"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"tugas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tugas"> | Date | string
  }

  export type penggunaCreateInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.PeranPengguna
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penggunaUncheckedCreateInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.PeranPengguna
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penggunaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penggunaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penggunaCreateManyInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.PeranPengguna
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penggunaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penggunaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tugasCreateInput = {
    judul: string
    deskripsi: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tugasUncheckedCreateInput = {
    id?: number
    judul: string
    deskripsi: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tugasUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tugasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tugasCreateManyInput = {
    id?: number
    judul: string
    deskripsi: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tugasUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tugasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPeranPenggunaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[]
    notIn?: $Enums.PeranPengguna[]
    not?: NestedEnumPeranPenggunaFilter<$PrismaModel> | $Enums.PeranPengguna
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type penggunaOrderByRelevanceInput = {
    fields: penggunaOrderByRelevanceFieldEnum | penggunaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type penggunaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type penggunaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type penggunaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPeranPenggunaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[]
    notIn?: $Enums.PeranPengguna[]
    not?: NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel> | $Enums.PeranPengguna
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeranPenggunaFilter<$PrismaModel>
    _max?: NestedEnumPeranPenggunaFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type tugasOrderByRelevanceInput = {
    fields: tugasOrderByRelevanceFieldEnum | tugasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tugasCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tugasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tugasMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tugasMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tugasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPeranPenggunaFieldUpdateOperationsInput = {
    set?: $Enums.PeranPengguna
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPeranPenggunaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[]
    notIn?: $Enums.PeranPengguna[]
    not?: NestedEnumPeranPenggunaFilter<$PrismaModel> | $Enums.PeranPengguna
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[]
    notIn?: $Enums.PeranPengguna[]
    not?: NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel> | $Enums.PeranPengguna
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeranPenggunaFilter<$PrismaModel>
    _max?: NestedEnumPeranPenggunaFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
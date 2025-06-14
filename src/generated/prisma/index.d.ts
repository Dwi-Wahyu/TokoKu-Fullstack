
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
 * Model kegiatan
 * 
 */
export type kegiatan = $Result.DefaultSelection<Prisma.$kegiatanPayload>
/**
 * Model logbook
 * 
 */
export type logbook = $Result.DefaultSelection<Prisma.$logbookPayload>
/**
 * Model profil
 * 
 */
export type profil = $Result.DefaultSelection<Prisma.$profilPayload>
/**
 * Model permohonan_bimbingan
 * 
 */
export type permohonan_bimbingan = $Result.DefaultSelection<Prisma.$permohonan_bimbinganPayload>
/**
 * Model mata_kuliah
 * 
 */
export type mata_kuliah = $Result.DefaultSelection<Prisma.$mata_kuliahPayload>
/**
 * Model lampiran_kegiatan
 * 
 */
export type lampiran_kegiatan = $Result.DefaultSelection<Prisma.$lampiran_kegiatanPayload>
/**
 * Model notifikasi
 * 
 */
export type notifikasi = $Result.DefaultSelection<Prisma.$notifikasiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const peran_pembimbing: {
  PROMOTOR: 'PROMOTOR',
  KOPROMOTOR: 'KOPROMOTOR'
};

export type peran_pembimbing = (typeof peran_pembimbing)[keyof typeof peran_pembimbing]


export const status_permohonan: {
  TERKIRIM: 'TERKIRIM',
  DITOLAK: 'DITOLAK',
  DISETUJUI: 'DISETUJUI'
};

export type status_permohonan = (typeof status_permohonan)[keyof typeof status_permohonan]


export const pengguna_peran: {
  ADMIN: 'ADMIN',
  MAHASISWA: 'MAHASISWA',
  DOSEN: 'DOSEN'
};

export type pengguna_peran = (typeof pengguna_peran)[keyof typeof pengguna_peran]


export const kegiatan_status: {
  DIAJUKAN: 'DIAJUKAN',
  DISETUJUI: 'DISETUJUI',
  DITOLAK: 'DITOLAK'
};

export type kegiatan_status = (typeof kegiatan_status)[keyof typeof kegiatan_status]

}

export type peran_pembimbing = $Enums.peran_pembimbing

export const peran_pembimbing: typeof $Enums.peran_pembimbing

export type status_permohonan = $Enums.status_permohonan

export const status_permohonan: typeof $Enums.status_permohonan

export type pengguna_peran = $Enums.pengguna_peran

export const pengguna_peran: typeof $Enums.pengguna_peran

export type kegiatan_status = $Enums.kegiatan_status

export const kegiatan_status: typeof $Enums.kegiatan_status

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
   * `prisma.kegiatan`: Exposes CRUD operations for the **kegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kegiatans
    * const kegiatans = await prisma.kegiatan.findMany()
    * ```
    */
  get kegiatan(): Prisma.kegiatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logbook`: Exposes CRUD operations for the **logbook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logbooks
    * const logbooks = await prisma.logbook.findMany()
    * ```
    */
  get logbook(): Prisma.logbookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profil`: Exposes CRUD operations for the **profil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profils
    * const profils = await prisma.profil.findMany()
    * ```
    */
  get profil(): Prisma.profilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permohonan_bimbingan`: Exposes CRUD operations for the **permohonan_bimbingan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permohonan_bimbingans
    * const permohonan_bimbingans = await prisma.permohonan_bimbingan.findMany()
    * ```
    */
  get permohonan_bimbingan(): Prisma.permohonan_bimbinganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mata_kuliah`: Exposes CRUD operations for the **mata_kuliah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mata_kuliahs
    * const mata_kuliahs = await prisma.mata_kuliah.findMany()
    * ```
    */
  get mata_kuliah(): Prisma.mata_kuliahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lampiran_kegiatan`: Exposes CRUD operations for the **lampiran_kegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lampiran_kegiatans
    * const lampiran_kegiatans = await prisma.lampiran_kegiatan.findMany()
    * ```
    */
  get lampiran_kegiatan(): Prisma.lampiran_kegiatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifikasi`: Exposes CRUD operations for the **notifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifikasis
    * const notifikasis = await prisma.notifikasi.findMany()
    * ```
    */
  get notifikasi(): Prisma.notifikasiDelegate<ExtArgs, ClientOptions>;
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
    kegiatan: 'kegiatan',
    logbook: 'logbook',
    profil: 'profil',
    permohonan_bimbingan: 'permohonan_bimbingan',
    mata_kuliah: 'mata_kuliah',
    lampiran_kegiatan: 'lampiran_kegiatan',
    notifikasi: 'notifikasi'
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
      modelProps: "pengguna" | "kegiatan" | "logbook" | "profil" | "permohonan_bimbingan" | "mata_kuliah" | "lampiran_kegiatan" | "notifikasi"
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
      kegiatan: {
        payload: Prisma.$kegiatanPayload<ExtArgs>
        fields: Prisma.kegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          findFirst: {
            args: Prisma.kegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          findMany: {
            args: Prisma.kegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>[]
          }
          create: {
            args: Prisma.kegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          createMany: {
            args: Prisma.kegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.kegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          update: {
            args: Prisma.kegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          deleteMany: {
            args: Prisma.kegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.kegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          aggregate: {
            args: Prisma.KegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKegiatan>
          }
          groupBy: {
            args: Prisma.kegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<KegiatanCountAggregateOutputType> | number
          }
        }
      }
      logbook: {
        payload: Prisma.$logbookPayload<ExtArgs>
        fields: Prisma.logbookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logbookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logbookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload>
          }
          findFirst: {
            args: Prisma.logbookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logbookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload>
          }
          findMany: {
            args: Prisma.logbookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload>[]
          }
          create: {
            args: Prisma.logbookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload>
          }
          createMany: {
            args: Prisma.logbookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logbookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload>
          }
          update: {
            args: Prisma.logbookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload>
          }
          deleteMany: {
            args: Prisma.logbookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logbookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logbookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logbookPayload>
          }
          aggregate: {
            args: Prisma.LogbookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogbook>
          }
          groupBy: {
            args: Prisma.logbookGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogbookGroupByOutputType>[]
          }
          count: {
            args: Prisma.logbookCountArgs<ExtArgs>
            result: $Utils.Optional<LogbookCountAggregateOutputType> | number
          }
        }
      }
      profil: {
        payload: Prisma.$profilPayload<ExtArgs>
        fields: Prisma.profilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload>
          }
          findFirst: {
            args: Prisma.profilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload>
          }
          findMany: {
            args: Prisma.profilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload>[]
          }
          create: {
            args: Prisma.profilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload>
          }
          createMany: {
            args: Prisma.profilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload>
          }
          update: {
            args: Prisma.profilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload>
          }
          deleteMany: {
            args: Prisma.profilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilPayload>
          }
          aggregate: {
            args: Prisma.ProfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfil>
          }
          groupBy: {
            args: Prisma.profilGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilCountAggregateOutputType> | number
          }
        }
      }
      permohonan_bimbingan: {
        payload: Prisma.$permohonan_bimbinganPayload<ExtArgs>
        fields: Prisma.permohonan_bimbinganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permohonan_bimbinganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permohonan_bimbinganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload>
          }
          findFirst: {
            args: Prisma.permohonan_bimbinganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permohonan_bimbinganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload>
          }
          findMany: {
            args: Prisma.permohonan_bimbinganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload>[]
          }
          create: {
            args: Prisma.permohonan_bimbinganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload>
          }
          createMany: {
            args: Prisma.permohonan_bimbinganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.permohonan_bimbinganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload>
          }
          update: {
            args: Prisma.permohonan_bimbinganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload>
          }
          deleteMany: {
            args: Prisma.permohonan_bimbinganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permohonan_bimbinganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.permohonan_bimbinganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permohonan_bimbinganPayload>
          }
          aggregate: {
            args: Prisma.Permohonan_bimbinganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermohonan_bimbingan>
          }
          groupBy: {
            args: Prisma.permohonan_bimbinganGroupByArgs<ExtArgs>
            result: $Utils.Optional<Permohonan_bimbinganGroupByOutputType>[]
          }
          count: {
            args: Prisma.permohonan_bimbinganCountArgs<ExtArgs>
            result: $Utils.Optional<Permohonan_bimbinganCountAggregateOutputType> | number
          }
        }
      }
      mata_kuliah: {
        payload: Prisma.$mata_kuliahPayload<ExtArgs>
        fields: Prisma.mata_kuliahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mata_kuliahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mata_kuliahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          findFirst: {
            args: Prisma.mata_kuliahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mata_kuliahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          findMany: {
            args: Prisma.mata_kuliahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>[]
          }
          create: {
            args: Prisma.mata_kuliahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          createMany: {
            args: Prisma.mata_kuliahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mata_kuliahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          update: {
            args: Prisma.mata_kuliahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          deleteMany: {
            args: Prisma.mata_kuliahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mata_kuliahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mata_kuliahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          aggregate: {
            args: Prisma.Mata_kuliahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMata_kuliah>
          }
          groupBy: {
            args: Prisma.mata_kuliahGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mata_kuliahGroupByOutputType>[]
          }
          count: {
            args: Prisma.mata_kuliahCountArgs<ExtArgs>
            result: $Utils.Optional<Mata_kuliahCountAggregateOutputType> | number
          }
        }
      }
      lampiran_kegiatan: {
        payload: Prisma.$lampiran_kegiatanPayload<ExtArgs>
        fields: Prisma.lampiran_kegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lampiran_kegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lampiran_kegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload>
          }
          findFirst: {
            args: Prisma.lampiran_kegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lampiran_kegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload>
          }
          findMany: {
            args: Prisma.lampiran_kegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload>[]
          }
          create: {
            args: Prisma.lampiran_kegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload>
          }
          createMany: {
            args: Prisma.lampiran_kegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lampiran_kegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload>
          }
          update: {
            args: Prisma.lampiran_kegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload>
          }
          deleteMany: {
            args: Prisma.lampiran_kegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lampiran_kegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lampiran_kegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lampiran_kegiatanPayload>
          }
          aggregate: {
            args: Prisma.Lampiran_kegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLampiran_kegiatan>
          }
          groupBy: {
            args: Prisma.lampiran_kegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lampiran_kegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.lampiran_kegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<Lampiran_kegiatanCountAggregateOutputType> | number
          }
        }
      }
      notifikasi: {
        payload: Prisma.$notifikasiPayload<ExtArgs>
        fields: Prisma.notifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          findFirst: {
            args: Prisma.notifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          findMany: {
            args: Prisma.notifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>[]
          }
          create: {
            args: Prisma.notifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          createMany: {
            args: Prisma.notifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          update: {
            args: Prisma.notifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          deleteMany: {
            args: Prisma.notifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          aggregate: {
            args: Prisma.NotifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifikasi>
          }
          groupBy: {
            args: Prisma.notifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.notifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiCountAggregateOutputType> | number
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
    kegiatan?: kegiatanOmit
    logbook?: logbookOmit
    profil?: profilOmit
    permohonan_bimbingan?: permohonan_bimbinganOmit
    mata_kuliah?: mata_kuliahOmit
    lampiran_kegiatan?: lampiran_kegiatanOmit
    notifikasi?: notifikasiOmit
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
   * Count Type PenggunaCountOutputType
   */

  export type PenggunaCountOutputType = {
    bimbingan: number
    koPromotorMahasiswa: number
    promotorMahasiswa: number
    notifikasi: number
    kegiatan: number
    permohonan_bimbingan_dibuat: number
    permohonan_bimbingan_diterima: number
  }

  export type PenggunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bimbingan?: boolean | PenggunaCountOutputTypeCountBimbinganArgs
    koPromotorMahasiswa?: boolean | PenggunaCountOutputTypeCountKoPromotorMahasiswaArgs
    promotorMahasiswa?: boolean | PenggunaCountOutputTypeCountPromotorMahasiswaArgs
    notifikasi?: boolean | PenggunaCountOutputTypeCountNotifikasiArgs
    kegiatan?: boolean | PenggunaCountOutputTypeCountKegiatanArgs
    permohonan_bimbingan_dibuat?: boolean | PenggunaCountOutputTypeCountPermohonan_bimbingan_dibuatArgs
    permohonan_bimbingan_diterima?: boolean | PenggunaCountOutputTypeCountPermohonan_bimbingan_diterimaArgs
  }

  // Custom InputTypes
  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenggunaCountOutputType
     */
    select?: PenggunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountKoPromotorMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountPromotorMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountNotifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notifikasiWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kegiatanWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountPermohonan_bimbingan_dibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permohonan_bimbinganWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountPermohonan_bimbingan_diterimaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permohonan_bimbinganWhereInput
  }


  /**
   * Count Type KegiatanCountOutputType
   */

  export type KegiatanCountOutputType = {
    lampiran: number
  }

  export type KegiatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lampiran?: boolean | KegiatanCountOutputTypeCountLampiranArgs
  }

  // Custom InputTypes
  /**
   * KegiatanCountOutputType without action
   */
  export type KegiatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KegiatanCountOutputType
     */
    select?: KegiatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KegiatanCountOutputType without action
   */
  export type KegiatanCountOutputTypeCountLampiranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lampiran_kegiatanWhereInput
  }


  /**
   * Count Type Mata_kuliahCountOutputType
   */

  export type Mata_kuliahCountOutputType = {
    kegiatan: number
  }

  export type Mata_kuliahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | Mata_kuliahCountOutputTypeCountKegiatanArgs
  }

  // Custom InputTypes
  /**
   * Mata_kuliahCountOutputType without action
   */
  export type Mata_kuliahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mata_kuliahCountOutputType
     */
    select?: Mata_kuliahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Mata_kuliahCountOutputType without action
   */
  export type Mata_kuliahCountOutputTypeCountKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kegiatanWhereInput
  }


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
    peran: $Enums.pengguna_peran | null
    avatar: string | null
    signature: string | null
    pembimbingId: string | null
    koPromotorId: string | null
    promotorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    username: string | null
    password: string | null
    peran: $Enums.pengguna_peran | null
    avatar: string | null
    signature: string | null
    pembimbingId: string | null
    koPromotorId: string | null
    promotorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenggunaCountAggregateOutputType = {
    id: number
    nama: number
    username: number
    password: number
    peran: number
    avatar: number
    signature: number
    pembimbingId: number
    koPromotorId: number
    promotorId: number
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
    avatar?: true
    signature?: true
    pembimbingId?: true
    koPromotorId?: true
    promotorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    avatar?: true
    signature?: true
    pembimbingId?: true
    koPromotorId?: true
    promotorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenggunaCountAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    peran?: true
    avatar?: true
    signature?: true
    pembimbingId?: true
    koPromotorId?: true
    promotorId?: true
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
    peran: $Enums.pengguna_peran
    avatar: string | null
    signature: string | null
    pembimbingId: string | null
    koPromotorId: string | null
    promotorId: string | null
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
    avatar?: boolean
    signature?: boolean
    pembimbingId?: boolean
    koPromotorId?: boolean
    promotorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profil?: boolean | pengguna$profilArgs<ExtArgs>
    bimbingan?: boolean | pengguna$bimbinganArgs<ExtArgs>
    pembimbing?: boolean | pengguna$pembimbingArgs<ExtArgs>
    koPromotorMahasiswa?: boolean | pengguna$koPromotorMahasiswaArgs<ExtArgs>
    koPromotor?: boolean | pengguna$koPromotorArgs<ExtArgs>
    promotorMahasiswa?: boolean | pengguna$promotorMahasiswaArgs<ExtArgs>
    promotor?: boolean | pengguna$promotorArgs<ExtArgs>
    notifikasi?: boolean | pengguna$notifikasiArgs<ExtArgs>
    kegiatan?: boolean | pengguna$kegiatanArgs<ExtArgs>
    logbook?: boolean | pengguna$logbookArgs<ExtArgs>
    permohonan_bimbingan_dibuat?: boolean | pengguna$permohonan_bimbingan_dibuatArgs<ExtArgs>
    permohonan_bimbingan_diterima?: boolean | pengguna$permohonan_bimbingan_diterimaArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>



  export type penggunaSelectScalar = {
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    peran?: boolean
    avatar?: boolean
    signature?: boolean
    pembimbingId?: boolean
    koPromotorId?: boolean
    promotorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type penggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "username" | "password" | "peran" | "avatar" | "signature" | "pembimbingId" | "koPromotorId" | "promotorId" | "createdAt" | "updatedAt", ExtArgs["result"]["pengguna"]>
  export type penggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profil?: boolean | pengguna$profilArgs<ExtArgs>
    bimbingan?: boolean | pengguna$bimbinganArgs<ExtArgs>
    pembimbing?: boolean | pengguna$pembimbingArgs<ExtArgs>
    koPromotorMahasiswa?: boolean | pengguna$koPromotorMahasiswaArgs<ExtArgs>
    koPromotor?: boolean | pengguna$koPromotorArgs<ExtArgs>
    promotorMahasiswa?: boolean | pengguna$promotorMahasiswaArgs<ExtArgs>
    promotor?: boolean | pengguna$promotorArgs<ExtArgs>
    notifikasi?: boolean | pengguna$notifikasiArgs<ExtArgs>
    kegiatan?: boolean | pengguna$kegiatanArgs<ExtArgs>
    logbook?: boolean | pengguna$logbookArgs<ExtArgs>
    permohonan_bimbingan_dibuat?: boolean | pengguna$permohonan_bimbingan_dibuatArgs<ExtArgs>
    permohonan_bimbingan_diterima?: boolean | pengguna$permohonan_bimbingan_diterimaArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $penggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengguna"
    objects: {
      profil: Prisma.$profilPayload<ExtArgs> | null
      bimbingan: Prisma.$penggunaPayload<ExtArgs>[]
      pembimbing: Prisma.$penggunaPayload<ExtArgs> | null
      koPromotorMahasiswa: Prisma.$penggunaPayload<ExtArgs>[]
      koPromotor: Prisma.$penggunaPayload<ExtArgs> | null
      promotorMahasiswa: Prisma.$penggunaPayload<ExtArgs>[]
      promotor: Prisma.$penggunaPayload<ExtArgs> | null
      notifikasi: Prisma.$notifikasiPayload<ExtArgs>[]
      kegiatan: Prisma.$kegiatanPayload<ExtArgs>[]
      logbook: Prisma.$logbookPayload<ExtArgs> | null
      permohonan_bimbingan_dibuat: Prisma.$permohonan_bimbinganPayload<ExtArgs>[]
      permohonan_bimbingan_diterima: Prisma.$permohonan_bimbinganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      username: string
      password: string
      peran: $Enums.pengguna_peran
      avatar: string | null
      signature: string | null
      pembimbingId: string | null
      koPromotorId: string | null
      promotorId: string | null
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
    profil<T extends pengguna$profilArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$profilArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bimbingan<T extends pengguna$bimbinganArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$bimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pembimbing<T extends pengguna$pembimbingArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$pembimbingArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    koPromotorMahasiswa<T extends pengguna$koPromotorMahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$koPromotorMahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    koPromotor<T extends pengguna$koPromotorArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$koPromotorArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    promotorMahasiswa<T extends pengguna$promotorMahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$promotorMahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promotor<T extends pengguna$promotorArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$promotorArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifikasi<T extends pengguna$notifikasiArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$notifikasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kegiatan<T extends pengguna$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$kegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logbook<T extends pengguna$logbookArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$logbookArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    permohonan_bimbingan_dibuat<T extends pengguna$permohonan_bimbingan_dibuatArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$permohonan_bimbingan_dibuatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permohonan_bimbingan_diterima<T extends pengguna$permohonan_bimbingan_diterimaArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$permohonan_bimbingan_diterimaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly peran: FieldRef<"pengguna", 'pengguna_peran'>
    readonly avatar: FieldRef<"pengguna", 'String'>
    readonly signature: FieldRef<"pengguna", 'String'>
    readonly pembimbingId: FieldRef<"pengguna", 'String'>
    readonly koPromotorId: FieldRef<"pengguna", 'String'>
    readonly promotorId: FieldRef<"pengguna", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
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
   * pengguna.profil
   */
  export type pengguna$profilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    where?: profilWhereInput
  }

  /**
   * pengguna.bimbingan
   */
  export type pengguna$bimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    cursor?: penggunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna.pembimbing
   */
  export type pengguna$pembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * pengguna.koPromotorMahasiswa
   */
  export type pengguna$koPromotorMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    cursor?: penggunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna.koPromotor
   */
  export type pengguna$koPromotorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * pengguna.promotorMahasiswa
   */
  export type pengguna$promotorMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    cursor?: penggunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna.promotor
   */
  export type pengguna$promotorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * pengguna.notifikasi
   */
  export type pengguna$notifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    where?: notifikasiWhereInput
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    cursor?: notifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * pengguna.kegiatan
   */
  export type pengguna$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    where?: kegiatanWhereInput
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    cursor?: kegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * pengguna.logbook
   */
  export type pengguna$logbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    where?: logbookWhereInput
  }

  /**
   * pengguna.permohonan_bimbingan_dibuat
   */
  export type pengguna$permohonan_bimbingan_dibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    where?: permohonan_bimbinganWhereInput
    orderBy?: permohonan_bimbinganOrderByWithRelationInput | permohonan_bimbinganOrderByWithRelationInput[]
    cursor?: permohonan_bimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Permohonan_bimbinganScalarFieldEnum | Permohonan_bimbinganScalarFieldEnum[]
  }

  /**
   * pengguna.permohonan_bimbingan_diterima
   */
  export type pengguna$permohonan_bimbingan_diterimaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    where?: permohonan_bimbinganWhereInput
    orderBy?: permohonan_bimbinganOrderByWithRelationInput | permohonan_bimbinganOrderByWithRelationInput[]
    cursor?: permohonan_bimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Permohonan_bimbinganScalarFieldEnum | Permohonan_bimbinganScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
  }


  /**
   * Model kegiatan
   */

  export type AggregateKegiatan = {
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  export type KegiatanAvgAggregateOutputType = {
    id: number | null
    mata_kuliahId: number | null
  }

  export type KegiatanSumAggregateOutputType = {
    id: number | null
    mata_kuliahId: number | null
  }

  export type KegiatanMinAggregateOutputType = {
    id: number | null
    judul: string | null
    lokasi: string | null
    tanggalMulai: Date | null
    tanggalSelesai: Date | null
    catatan: string | null
    status: $Enums.kegiatan_status | null
    createdAt: Date | null
    updatedAt: Date | null
    pengajuId: string | null
    mata_kuliahId: number | null
  }

  export type KegiatanMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    lokasi: string | null
    tanggalMulai: Date | null
    tanggalSelesai: Date | null
    catatan: string | null
    status: $Enums.kegiatan_status | null
    createdAt: Date | null
    updatedAt: Date | null
    pengajuId: string | null
    mata_kuliahId: number | null
  }

  export type KegiatanCountAggregateOutputType = {
    id: number
    judul: number
    lokasi: number
    tanggalMulai: number
    tanggalSelesai: number
    catatan: number
    status: number
    createdAt: number
    updatedAt: number
    pengajuId: number
    mata_kuliahId: number
    _all: number
  }


  export type KegiatanAvgAggregateInputType = {
    id?: true
    mata_kuliahId?: true
  }

  export type KegiatanSumAggregateInputType = {
    id?: true
    mata_kuliahId?: true
  }

  export type KegiatanMinAggregateInputType = {
    id?: true
    judul?: true
    lokasi?: true
    tanggalMulai?: true
    tanggalSelesai?: true
    catatan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    pengajuId?: true
    mata_kuliahId?: true
  }

  export type KegiatanMaxAggregateInputType = {
    id?: true
    judul?: true
    lokasi?: true
    tanggalMulai?: true
    tanggalSelesai?: true
    catatan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    pengajuId?: true
    mata_kuliahId?: true
  }

  export type KegiatanCountAggregateInputType = {
    id?: true
    judul?: true
    lokasi?: true
    tanggalMulai?: true
    tanggalSelesai?: true
    catatan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    pengajuId?: true
    mata_kuliahId?: true
    _all?: true
  }

  export type KegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kegiatan to aggregate.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kegiatans
    **/
    _count?: true | KegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KegiatanMaxAggregateInputType
  }

  export type GetKegiatanAggregateType<T extends KegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKegiatan[P]>
      : GetScalarType<T[P], AggregateKegiatan[P]>
  }




  export type kegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kegiatanWhereInput
    orderBy?: kegiatanOrderByWithAggregationInput | kegiatanOrderByWithAggregationInput[]
    by: KegiatanScalarFieldEnum[] | KegiatanScalarFieldEnum
    having?: kegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KegiatanCountAggregateInputType | true
    _avg?: KegiatanAvgAggregateInputType
    _sum?: KegiatanSumAggregateInputType
    _min?: KegiatanMinAggregateInputType
    _max?: KegiatanMaxAggregateInputType
  }

  export type KegiatanGroupByOutputType = {
    id: number
    judul: string
    lokasi: string | null
    tanggalMulai: Date | null
    tanggalSelesai: Date | null
    catatan: string | null
    status: $Enums.kegiatan_status
    createdAt: Date
    updatedAt: Date
    pengajuId: string | null
    mata_kuliahId: number | null
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  type GetKegiatanGroupByPayload<T extends kegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
        }
      >
    >


  export type kegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    lokasi?: boolean
    tanggalMulai?: boolean
    tanggalSelesai?: boolean
    catatan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengajuId?: boolean
    mata_kuliahId?: boolean
    lampiran?: boolean | kegiatan$lampiranArgs<ExtArgs>
    pengaju?: boolean | kegiatan$pengajuArgs<ExtArgs>
    mata_kuliah?: boolean | kegiatan$mata_kuliahArgs<ExtArgs>
    _count?: boolean | KegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>



  export type kegiatanSelectScalar = {
    id?: boolean
    judul?: boolean
    lokasi?: boolean
    tanggalMulai?: boolean
    tanggalSelesai?: boolean
    catatan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pengajuId?: boolean
    mata_kuliahId?: boolean
  }

  export type kegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "lokasi" | "tanggalMulai" | "tanggalSelesai" | "catatan" | "status" | "createdAt" | "updatedAt" | "pengajuId" | "mata_kuliahId", ExtArgs["result"]["kegiatan"]>
  export type kegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lampiran?: boolean | kegiatan$lampiranArgs<ExtArgs>
    pengaju?: boolean | kegiatan$pengajuArgs<ExtArgs>
    mata_kuliah?: boolean | kegiatan$mata_kuliahArgs<ExtArgs>
    _count?: boolean | KegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $kegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kegiatan"
    objects: {
      lampiran: Prisma.$lampiran_kegiatanPayload<ExtArgs>[]
      pengaju: Prisma.$penggunaPayload<ExtArgs> | null
      mata_kuliah: Prisma.$mata_kuliahPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      lokasi: string | null
      tanggalMulai: Date | null
      tanggalSelesai: Date | null
      catatan: string | null
      status: $Enums.kegiatan_status
      createdAt: Date
      updatedAt: Date
      pengajuId: string | null
      mata_kuliahId: number | null
    }, ExtArgs["result"]["kegiatan"]>
    composites: {}
  }

  type kegiatanGetPayload<S extends boolean | null | undefined | kegiatanDefaultArgs> = $Result.GetResult<Prisma.$kegiatanPayload, S>

  type kegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KegiatanCountAggregateInputType | true
    }

  export interface kegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kegiatan'], meta: { name: 'kegiatan' } }
    /**
     * Find zero or one Kegiatan that matches the filter.
     * @param {kegiatanFindUniqueArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kegiatanFindUniqueArgs>(args: SelectSubset<T, kegiatanFindUniqueArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kegiatanFindUniqueOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, kegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindFirstArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kegiatanFindFirstArgs>(args?: SelectSubset<T, kegiatanFindFirstArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindFirstOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, kegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany()
     * 
     * // Get first 10 Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kegiatanFindManyArgs>(args?: SelectSubset<T, kegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kegiatan.
     * @param {kegiatanCreateArgs} args - Arguments to create a Kegiatan.
     * @example
     * // Create one Kegiatan
     * const Kegiatan = await prisma.kegiatan.create({
     *   data: {
     *     // ... data to create a Kegiatan
     *   }
     * })
     * 
     */
    create<T extends kegiatanCreateArgs>(args: SelectSubset<T, kegiatanCreateArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kegiatans.
     * @param {kegiatanCreateManyArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kegiatanCreateManyArgs>(args?: SelectSubset<T, kegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kegiatan.
     * @param {kegiatanDeleteArgs} args - Arguments to delete one Kegiatan.
     * @example
     * // Delete one Kegiatan
     * const Kegiatan = await prisma.kegiatan.delete({
     *   where: {
     *     // ... filter to delete one Kegiatan
     *   }
     * })
     * 
     */
    delete<T extends kegiatanDeleteArgs>(args: SelectSubset<T, kegiatanDeleteArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kegiatan.
     * @param {kegiatanUpdateArgs} args - Arguments to update one Kegiatan.
     * @example
     * // Update one Kegiatan
     * const kegiatan = await prisma.kegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kegiatanUpdateArgs>(args: SelectSubset<T, kegiatanUpdateArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kegiatans.
     * @param {kegiatanDeleteManyArgs} args - Arguments to filter Kegiatans to delete.
     * @example
     * // Delete a few Kegiatans
     * const { count } = await prisma.kegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kegiatanDeleteManyArgs>(args?: SelectSubset<T, kegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kegiatanUpdateManyArgs>(args: SelectSubset<T, kegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kegiatan.
     * @param {kegiatanUpsertArgs} args - Arguments to update or create a Kegiatan.
     * @example
     * // Update or create a Kegiatan
     * const kegiatan = await prisma.kegiatan.upsert({
     *   create: {
     *     // ... data to create a Kegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kegiatan we want to update
     *   }
     * })
     */
    upsert<T extends kegiatanUpsertArgs>(args: SelectSubset<T, kegiatanUpsertArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanCountArgs} args - Arguments to filter Kegiatans to count.
     * @example
     * // Count the number of Kegiatans
     * const count = await prisma.kegiatan.count({
     *   where: {
     *     // ... the filter for the Kegiatans we want to count
     *   }
     * })
    **/
    count<T extends kegiatanCountArgs>(
      args?: Subset<T, kegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KegiatanAggregateArgs>(args: Subset<T, KegiatanAggregateArgs>): Prisma.PrismaPromise<GetKegiatanAggregateType<T>>

    /**
     * Group by Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanGroupByArgs} args - Group by arguments.
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
      T extends kegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kegiatanGroupByArgs['orderBy'] }
        : { orderBy?: kegiatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kegiatan model
   */
  readonly fields: kegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lampiran<T extends kegiatan$lampiranArgs<ExtArgs> = {}>(args?: Subset<T, kegiatan$lampiranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pengaju<T extends kegiatan$pengajuArgs<ExtArgs> = {}>(args?: Subset<T, kegiatan$pengajuArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mata_kuliah<T extends kegiatan$mata_kuliahArgs<ExtArgs> = {}>(args?: Subset<T, kegiatan$mata_kuliahArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the kegiatan model
   */
  interface kegiatanFieldRefs {
    readonly id: FieldRef<"kegiatan", 'Int'>
    readonly judul: FieldRef<"kegiatan", 'String'>
    readonly lokasi: FieldRef<"kegiatan", 'String'>
    readonly tanggalMulai: FieldRef<"kegiatan", 'DateTime'>
    readonly tanggalSelesai: FieldRef<"kegiatan", 'DateTime'>
    readonly catatan: FieldRef<"kegiatan", 'String'>
    readonly status: FieldRef<"kegiatan", 'kegiatan_status'>
    readonly createdAt: FieldRef<"kegiatan", 'DateTime'>
    readonly updatedAt: FieldRef<"kegiatan", 'DateTime'>
    readonly pengajuId: FieldRef<"kegiatan", 'String'>
    readonly mata_kuliahId: FieldRef<"kegiatan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * kegiatan findUnique
   */
  export type kegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan findUniqueOrThrow
   */
  export type kegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan findFirst
   */
  export type kegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan findFirstOrThrow
   */
  export type kegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan findMany
   */
  export type kegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which kegiatans to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan create
   */
  export type kegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a kegiatan.
     */
    data: XOR<kegiatanCreateInput, kegiatanUncheckedCreateInput>
  }

  /**
   * kegiatan createMany
   */
  export type kegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kegiatans.
     */
    data: kegiatanCreateManyInput | kegiatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kegiatan update
   */
  export type kegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a kegiatan.
     */
    data: XOR<kegiatanUpdateInput, kegiatanUncheckedUpdateInput>
    /**
     * Choose, which kegiatan to update.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan updateMany
   */
  export type kegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kegiatans.
     */
    data: XOR<kegiatanUpdateManyMutationInput, kegiatanUncheckedUpdateManyInput>
    /**
     * Filter which kegiatans to update
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to update.
     */
    limit?: number
  }

  /**
   * kegiatan upsert
   */
  export type kegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the kegiatan to update in case it exists.
     */
    where: kegiatanWhereUniqueInput
    /**
     * In case the kegiatan found by the `where` argument doesn't exist, create a new kegiatan with this data.
     */
    create: XOR<kegiatanCreateInput, kegiatanUncheckedCreateInput>
    /**
     * In case the kegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kegiatanUpdateInput, kegiatanUncheckedUpdateInput>
  }

  /**
   * kegiatan delete
   */
  export type kegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    /**
     * Filter which kegiatan to delete.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan deleteMany
   */
  export type kegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kegiatans to delete
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to delete.
     */
    limit?: number
  }

  /**
   * kegiatan.lampiran
   */
  export type kegiatan$lampiranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    where?: lampiran_kegiatanWhereInput
    orderBy?: lampiran_kegiatanOrderByWithRelationInput | lampiran_kegiatanOrderByWithRelationInput[]
    cursor?: lampiran_kegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lampiran_kegiatanScalarFieldEnum | Lampiran_kegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan.pengaju
   */
  export type kegiatan$pengajuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * kegiatan.mata_kuliah
   */
  export type kegiatan$mata_kuliahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    where?: mata_kuliahWhereInput
  }

  /**
   * kegiatan without action
   */
  export type kegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
  }


  /**
   * Model logbook
   */

  export type AggregateLogbook = {
    _count: LogbookCountAggregateOutputType | null
    _avg: LogbookAvgAggregateOutputType | null
    _sum: LogbookSumAggregateOutputType | null
    _min: LogbookMinAggregateOutputType | null
    _max: LogbookMaxAggregateOutputType | null
  }

  export type LogbookAvgAggregateOutputType = {
    id: number | null
  }

  export type LogbookSumAggregateOutputType = {
    id: number | null
  }

  export type LogbookMinAggregateOutputType = {
    id: number | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    penggunaId: string | null
  }

  export type LogbookMaxAggregateOutputType = {
    id: number | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    penggunaId: string | null
  }

  export type LogbookCountAggregateOutputType = {
    id: number
    path: number
    createdAt: number
    updatedAt: number
    penggunaId: number
    _all: number
  }


  export type LogbookAvgAggregateInputType = {
    id?: true
  }

  export type LogbookSumAggregateInputType = {
    id?: true
  }

  export type LogbookMinAggregateInputType = {
    id?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    penggunaId?: true
  }

  export type LogbookMaxAggregateInputType = {
    id?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    penggunaId?: true
  }

  export type LogbookCountAggregateInputType = {
    id?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    penggunaId?: true
    _all?: true
  }

  export type LogbookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logbook to aggregate.
     */
    where?: logbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logbooks to fetch.
     */
    orderBy?: logbookOrderByWithRelationInput | logbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logbooks
    **/
    _count?: true | LogbookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogbookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogbookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogbookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogbookMaxAggregateInputType
  }

  export type GetLogbookAggregateType<T extends LogbookAggregateArgs> = {
        [P in keyof T & keyof AggregateLogbook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogbook[P]>
      : GetScalarType<T[P], AggregateLogbook[P]>
  }




  export type logbookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logbookWhereInput
    orderBy?: logbookOrderByWithAggregationInput | logbookOrderByWithAggregationInput[]
    by: LogbookScalarFieldEnum[] | LogbookScalarFieldEnum
    having?: logbookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogbookCountAggregateInputType | true
    _avg?: LogbookAvgAggregateInputType
    _sum?: LogbookSumAggregateInputType
    _min?: LogbookMinAggregateInputType
    _max?: LogbookMaxAggregateInputType
  }

  export type LogbookGroupByOutputType = {
    id: number
    path: string
    createdAt: Date
    updatedAt: Date
    penggunaId: string | null
    _count: LogbookCountAggregateOutputType | null
    _avg: LogbookAvgAggregateOutputType | null
    _sum: LogbookSumAggregateOutputType | null
    _min: LogbookMinAggregateOutputType | null
    _max: LogbookMaxAggregateOutputType | null
  }

  type GetLogbookGroupByPayload<T extends logbookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogbookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogbookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogbookGroupByOutputType[P]>
            : GetScalarType<T[P], LogbookGroupByOutputType[P]>
        }
      >
    >


  export type logbookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    penggunaId?: boolean
    pengguna?: boolean | logbook$penggunaArgs<ExtArgs>
  }, ExtArgs["result"]["logbook"]>



  export type logbookSelectScalar = {
    id?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    penggunaId?: boolean
  }

  export type logbookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "createdAt" | "updatedAt" | "penggunaId", ExtArgs["result"]["logbook"]>
  export type logbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | logbook$penggunaArgs<ExtArgs>
  }

  export type $logbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logbook"
    objects: {
      pengguna: Prisma.$penggunaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      createdAt: Date
      updatedAt: Date
      penggunaId: string | null
    }, ExtArgs["result"]["logbook"]>
    composites: {}
  }

  type logbookGetPayload<S extends boolean | null | undefined | logbookDefaultArgs> = $Result.GetResult<Prisma.$logbookPayload, S>

  type logbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logbookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogbookCountAggregateInputType | true
    }

  export interface logbookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logbook'], meta: { name: 'logbook' } }
    /**
     * Find zero or one Logbook that matches the filter.
     * @param {logbookFindUniqueArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logbookFindUniqueArgs>(args: SelectSubset<T, logbookFindUniqueArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logbook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logbookFindUniqueOrThrowArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logbookFindUniqueOrThrowArgs>(args: SelectSubset<T, logbookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logbook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logbookFindFirstArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logbookFindFirstArgs>(args?: SelectSubset<T, logbookFindFirstArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logbook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logbookFindFirstOrThrowArgs} args - Arguments to find a Logbook
     * @example
     * // Get one Logbook
     * const logbook = await prisma.logbook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logbookFindFirstOrThrowArgs>(args?: SelectSubset<T, logbookFindFirstOrThrowArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logbooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logbookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logbooks
     * const logbooks = await prisma.logbook.findMany()
     * 
     * // Get first 10 Logbooks
     * const logbooks = await prisma.logbook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logbookWithIdOnly = await prisma.logbook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logbookFindManyArgs>(args?: SelectSubset<T, logbookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logbook.
     * @param {logbookCreateArgs} args - Arguments to create a Logbook.
     * @example
     * // Create one Logbook
     * const Logbook = await prisma.logbook.create({
     *   data: {
     *     // ... data to create a Logbook
     *   }
     * })
     * 
     */
    create<T extends logbookCreateArgs>(args: SelectSubset<T, logbookCreateArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logbooks.
     * @param {logbookCreateManyArgs} args - Arguments to create many Logbooks.
     * @example
     * // Create many Logbooks
     * const logbook = await prisma.logbook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logbookCreateManyArgs>(args?: SelectSubset<T, logbookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logbook.
     * @param {logbookDeleteArgs} args - Arguments to delete one Logbook.
     * @example
     * // Delete one Logbook
     * const Logbook = await prisma.logbook.delete({
     *   where: {
     *     // ... filter to delete one Logbook
     *   }
     * })
     * 
     */
    delete<T extends logbookDeleteArgs>(args: SelectSubset<T, logbookDeleteArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logbook.
     * @param {logbookUpdateArgs} args - Arguments to update one Logbook.
     * @example
     * // Update one Logbook
     * const logbook = await prisma.logbook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logbookUpdateArgs>(args: SelectSubset<T, logbookUpdateArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logbooks.
     * @param {logbookDeleteManyArgs} args - Arguments to filter Logbooks to delete.
     * @example
     * // Delete a few Logbooks
     * const { count } = await prisma.logbook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logbookDeleteManyArgs>(args?: SelectSubset<T, logbookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logbookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logbooks
     * const logbook = await prisma.logbook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logbookUpdateManyArgs>(args: SelectSubset<T, logbookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logbook.
     * @param {logbookUpsertArgs} args - Arguments to update or create a Logbook.
     * @example
     * // Update or create a Logbook
     * const logbook = await prisma.logbook.upsert({
     *   create: {
     *     // ... data to create a Logbook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logbook we want to update
     *   }
     * })
     */
    upsert<T extends logbookUpsertArgs>(args: SelectSubset<T, logbookUpsertArgs<ExtArgs>>): Prisma__logbookClient<$Result.GetResult<Prisma.$logbookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logbookCountArgs} args - Arguments to filter Logbooks to count.
     * @example
     * // Count the number of Logbooks
     * const count = await prisma.logbook.count({
     *   where: {
     *     // ... the filter for the Logbooks we want to count
     *   }
     * })
    **/
    count<T extends logbookCountArgs>(
      args?: Subset<T, logbookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogbookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogbookAggregateArgs>(args: Subset<T, LogbookAggregateArgs>): Prisma.PrismaPromise<GetLogbookAggregateType<T>>

    /**
     * Group by Logbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logbookGroupByArgs} args - Group by arguments.
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
      T extends logbookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logbookGroupByArgs['orderBy'] }
        : { orderBy?: logbookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logbookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogbookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logbook model
   */
  readonly fields: logbookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logbook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logbookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends logbook$penggunaArgs<ExtArgs> = {}>(args?: Subset<T, logbook$penggunaArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the logbook model
   */
  interface logbookFieldRefs {
    readonly id: FieldRef<"logbook", 'Int'>
    readonly path: FieldRef<"logbook", 'String'>
    readonly createdAt: FieldRef<"logbook", 'DateTime'>
    readonly updatedAt: FieldRef<"logbook", 'DateTime'>
    readonly penggunaId: FieldRef<"logbook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * logbook findUnique
   */
  export type logbookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * Filter, which logbook to fetch.
     */
    where: logbookWhereUniqueInput
  }

  /**
   * logbook findUniqueOrThrow
   */
  export type logbookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * Filter, which logbook to fetch.
     */
    where: logbookWhereUniqueInput
  }

  /**
   * logbook findFirst
   */
  export type logbookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * Filter, which logbook to fetch.
     */
    where?: logbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logbooks to fetch.
     */
    orderBy?: logbookOrderByWithRelationInput | logbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logbooks.
     */
    cursor?: logbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logbooks.
     */
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * logbook findFirstOrThrow
   */
  export type logbookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * Filter, which logbook to fetch.
     */
    where?: logbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logbooks to fetch.
     */
    orderBy?: logbookOrderByWithRelationInput | logbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logbooks.
     */
    cursor?: logbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logbooks.
     */
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * logbook findMany
   */
  export type logbookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * Filter, which logbooks to fetch.
     */
    where?: logbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logbooks to fetch.
     */
    orderBy?: logbookOrderByWithRelationInput | logbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logbooks.
     */
    cursor?: logbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logbooks.
     */
    skip?: number
    distinct?: LogbookScalarFieldEnum | LogbookScalarFieldEnum[]
  }

  /**
   * logbook create
   */
  export type logbookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * The data needed to create a logbook.
     */
    data: XOR<logbookCreateInput, logbookUncheckedCreateInput>
  }

  /**
   * logbook createMany
   */
  export type logbookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logbooks.
     */
    data: logbookCreateManyInput | logbookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logbook update
   */
  export type logbookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * The data needed to update a logbook.
     */
    data: XOR<logbookUpdateInput, logbookUncheckedUpdateInput>
    /**
     * Choose, which logbook to update.
     */
    where: logbookWhereUniqueInput
  }

  /**
   * logbook updateMany
   */
  export type logbookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logbooks.
     */
    data: XOR<logbookUpdateManyMutationInput, logbookUncheckedUpdateManyInput>
    /**
     * Filter which logbooks to update
     */
    where?: logbookWhereInput
    /**
     * Limit how many logbooks to update.
     */
    limit?: number
  }

  /**
   * logbook upsert
   */
  export type logbookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * The filter to search for the logbook to update in case it exists.
     */
    where: logbookWhereUniqueInput
    /**
     * In case the logbook found by the `where` argument doesn't exist, create a new logbook with this data.
     */
    create: XOR<logbookCreateInput, logbookUncheckedCreateInput>
    /**
     * In case the logbook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logbookUpdateInput, logbookUncheckedUpdateInput>
  }

  /**
   * logbook delete
   */
  export type logbookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
    /**
     * Filter which logbook to delete.
     */
    where: logbookWhereUniqueInput
  }

  /**
   * logbook deleteMany
   */
  export type logbookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logbooks to delete
     */
    where?: logbookWhereInput
    /**
     * Limit how many logbooks to delete.
     */
    limit?: number
  }

  /**
   * logbook.pengguna
   */
  export type logbook$penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * logbook without action
   */
  export type logbookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logbook
     */
    select?: logbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logbook
     */
    omit?: logbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logbookInclude<ExtArgs> | null
  }


  /**
   * Model profil
   */

  export type AggregateProfil = {
    _count: ProfilCountAggregateOutputType | null
    _avg: ProfilAvgAggregateOutputType | null
    _sum: ProfilSumAggregateOutputType | null
    _min: ProfilMinAggregateOutputType | null
    _max: ProfilMaxAggregateOutputType | null
  }

  export type ProfilAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfilSumAggregateOutputType = {
    id: number | null
  }

  export type ProfilMinAggregateOutputType = {
    id: number | null
    judulDisertasi: string | null
    angkatan: string | null
    tempatTanggalLahir: string | null
    alamat: string | null
    alamatKeluarga: string | null
    tahunLulus: string | null
    mulaiMasukPendidikan: Date | null
    pekerjaan: string | null
    nomorTelpon: string | null
    email: string | null
    penggunaId: string | null
  }

  export type ProfilMaxAggregateOutputType = {
    id: number | null
    judulDisertasi: string | null
    angkatan: string | null
    tempatTanggalLahir: string | null
    alamat: string | null
    alamatKeluarga: string | null
    tahunLulus: string | null
    mulaiMasukPendidikan: Date | null
    pekerjaan: string | null
    nomorTelpon: string | null
    email: string | null
    penggunaId: string | null
  }

  export type ProfilCountAggregateOutputType = {
    id: number
    judulDisertasi: number
    angkatan: number
    tempatTanggalLahir: number
    alamat: number
    alamatKeluarga: number
    tahunLulus: number
    mulaiMasukPendidikan: number
    pekerjaan: number
    nomorTelpon: number
    email: number
    penggunaId: number
    _all: number
  }


  export type ProfilAvgAggregateInputType = {
    id?: true
  }

  export type ProfilSumAggregateInputType = {
    id?: true
  }

  export type ProfilMinAggregateInputType = {
    id?: true
    judulDisertasi?: true
    angkatan?: true
    tempatTanggalLahir?: true
    alamat?: true
    alamatKeluarga?: true
    tahunLulus?: true
    mulaiMasukPendidikan?: true
    pekerjaan?: true
    nomorTelpon?: true
    email?: true
    penggunaId?: true
  }

  export type ProfilMaxAggregateInputType = {
    id?: true
    judulDisertasi?: true
    angkatan?: true
    tempatTanggalLahir?: true
    alamat?: true
    alamatKeluarga?: true
    tahunLulus?: true
    mulaiMasukPendidikan?: true
    pekerjaan?: true
    nomorTelpon?: true
    email?: true
    penggunaId?: true
  }

  export type ProfilCountAggregateInputType = {
    id?: true
    judulDisertasi?: true
    angkatan?: true
    tempatTanggalLahir?: true
    alamat?: true
    alamatKeluarga?: true
    tahunLulus?: true
    mulaiMasukPendidikan?: true
    pekerjaan?: true
    nomorTelpon?: true
    email?: true
    penggunaId?: true
    _all?: true
  }

  export type ProfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profil to aggregate.
     */
    where?: profilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profils to fetch.
     */
    orderBy?: profilOrderByWithRelationInput | profilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profils
    **/
    _count?: true | ProfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilMaxAggregateInputType
  }

  export type GetProfilAggregateType<T extends ProfilAggregateArgs> = {
        [P in keyof T & keyof AggregateProfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfil[P]>
      : GetScalarType<T[P], AggregateProfil[P]>
  }




  export type profilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilWhereInput
    orderBy?: profilOrderByWithAggregationInput | profilOrderByWithAggregationInput[]
    by: ProfilScalarFieldEnum[] | ProfilScalarFieldEnum
    having?: profilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilCountAggregateInputType | true
    _avg?: ProfilAvgAggregateInputType
    _sum?: ProfilSumAggregateInputType
    _min?: ProfilMinAggregateInputType
    _max?: ProfilMaxAggregateInputType
  }

  export type ProfilGroupByOutputType = {
    id: number
    judulDisertasi: string | null
    angkatan: string | null
    tempatTanggalLahir: string | null
    alamat: string | null
    alamatKeluarga: string | null
    tahunLulus: string | null
    mulaiMasukPendidikan: Date | null
    pekerjaan: string | null
    nomorTelpon: string | null
    email: string | null
    penggunaId: string
    _count: ProfilCountAggregateOutputType | null
    _avg: ProfilAvgAggregateOutputType | null
    _sum: ProfilSumAggregateOutputType | null
    _min: ProfilMinAggregateOutputType | null
    _max: ProfilMaxAggregateOutputType | null
  }

  type GetProfilGroupByPayload<T extends profilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilGroupByOutputType[P]>
        }
      >
    >


  export type profilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judulDisertasi?: boolean
    angkatan?: boolean
    tempatTanggalLahir?: boolean
    alamat?: boolean
    alamatKeluarga?: boolean
    tahunLulus?: boolean
    mulaiMasukPendidikan?: boolean
    pekerjaan?: boolean
    nomorTelpon?: boolean
    email?: boolean
    penggunaId?: boolean
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profil"]>



  export type profilSelectScalar = {
    id?: boolean
    judulDisertasi?: boolean
    angkatan?: boolean
    tempatTanggalLahir?: boolean
    alamat?: boolean
    alamatKeluarga?: boolean
    tahunLulus?: boolean
    mulaiMasukPendidikan?: boolean
    pekerjaan?: boolean
    nomorTelpon?: boolean
    email?: boolean
    penggunaId?: boolean
  }

  export type profilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judulDisertasi" | "angkatan" | "tempatTanggalLahir" | "alamat" | "alamatKeluarga" | "tahunLulus" | "mulaiMasukPendidikan" | "pekerjaan" | "nomorTelpon" | "email" | "penggunaId", ExtArgs["result"]["profil"]>
  export type profilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
  }

  export type $profilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profil"
    objects: {
      pengguna: Prisma.$penggunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judulDisertasi: string | null
      angkatan: string | null
      tempatTanggalLahir: string | null
      alamat: string | null
      alamatKeluarga: string | null
      tahunLulus: string | null
      mulaiMasukPendidikan: Date | null
      pekerjaan: string | null
      nomorTelpon: string | null
      email: string | null
      penggunaId: string
    }, ExtArgs["result"]["profil"]>
    composites: {}
  }

  type profilGetPayload<S extends boolean | null | undefined | profilDefaultArgs> = $Result.GetResult<Prisma.$profilPayload, S>

  type profilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilCountAggregateInputType | true
    }

  export interface profilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profil'], meta: { name: 'profil' } }
    /**
     * Find zero or one Profil that matches the filter.
     * @param {profilFindUniqueArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilFindUniqueArgs>(args: SelectSubset<T, profilFindUniqueArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilFindUniqueOrThrowArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilFindUniqueOrThrowArgs>(args: SelectSubset<T, profilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilFindFirstArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilFindFirstArgs>(args?: SelectSubset<T, profilFindFirstArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilFindFirstOrThrowArgs} args - Arguments to find a Profil
     * @example
     * // Get one Profil
     * const profil = await prisma.profil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilFindFirstOrThrowArgs>(args?: SelectSubset<T, profilFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profils
     * const profils = await prisma.profil.findMany()
     * 
     * // Get first 10 Profils
     * const profils = await prisma.profil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilWithIdOnly = await prisma.profil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilFindManyArgs>(args?: SelectSubset<T, profilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profil.
     * @param {profilCreateArgs} args - Arguments to create a Profil.
     * @example
     * // Create one Profil
     * const Profil = await prisma.profil.create({
     *   data: {
     *     // ... data to create a Profil
     *   }
     * })
     * 
     */
    create<T extends profilCreateArgs>(args: SelectSubset<T, profilCreateArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profils.
     * @param {profilCreateManyArgs} args - Arguments to create many Profils.
     * @example
     * // Create many Profils
     * const profil = await prisma.profil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilCreateManyArgs>(args?: SelectSubset<T, profilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profil.
     * @param {profilDeleteArgs} args - Arguments to delete one Profil.
     * @example
     * // Delete one Profil
     * const Profil = await prisma.profil.delete({
     *   where: {
     *     // ... filter to delete one Profil
     *   }
     * })
     * 
     */
    delete<T extends profilDeleteArgs>(args: SelectSubset<T, profilDeleteArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profil.
     * @param {profilUpdateArgs} args - Arguments to update one Profil.
     * @example
     * // Update one Profil
     * const profil = await prisma.profil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilUpdateArgs>(args: SelectSubset<T, profilUpdateArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profils.
     * @param {profilDeleteManyArgs} args - Arguments to filter Profils to delete.
     * @example
     * // Delete a few Profils
     * const { count } = await prisma.profil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilDeleteManyArgs>(args?: SelectSubset<T, profilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profils
     * const profil = await prisma.profil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilUpdateManyArgs>(args: SelectSubset<T, profilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profil.
     * @param {profilUpsertArgs} args - Arguments to update or create a Profil.
     * @example
     * // Update or create a Profil
     * const profil = await prisma.profil.upsert({
     *   create: {
     *     // ... data to create a Profil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profil we want to update
     *   }
     * })
     */
    upsert<T extends profilUpsertArgs>(args: SelectSubset<T, profilUpsertArgs<ExtArgs>>): Prisma__profilClient<$Result.GetResult<Prisma.$profilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilCountArgs} args - Arguments to filter Profils to count.
     * @example
     * // Count the number of Profils
     * const count = await prisma.profil.count({
     *   where: {
     *     // ... the filter for the Profils we want to count
     *   }
     * })
    **/
    count<T extends profilCountArgs>(
      args?: Subset<T, profilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilAggregateArgs>(args: Subset<T, ProfilAggregateArgs>): Prisma.PrismaPromise<GetProfilAggregateType<T>>

    /**
     * Group by Profil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilGroupByArgs} args - Group by arguments.
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
      T extends profilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilGroupByArgs['orderBy'] }
        : { orderBy?: profilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profil model
   */
  readonly fields: profilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends penggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, penggunaDefaultArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profil model
   */
  interface profilFieldRefs {
    readonly id: FieldRef<"profil", 'Int'>
    readonly judulDisertasi: FieldRef<"profil", 'String'>
    readonly angkatan: FieldRef<"profil", 'String'>
    readonly tempatTanggalLahir: FieldRef<"profil", 'String'>
    readonly alamat: FieldRef<"profil", 'String'>
    readonly alamatKeluarga: FieldRef<"profil", 'String'>
    readonly tahunLulus: FieldRef<"profil", 'String'>
    readonly mulaiMasukPendidikan: FieldRef<"profil", 'DateTime'>
    readonly pekerjaan: FieldRef<"profil", 'String'>
    readonly nomorTelpon: FieldRef<"profil", 'String'>
    readonly email: FieldRef<"profil", 'String'>
    readonly penggunaId: FieldRef<"profil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profil findUnique
   */
  export type profilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * Filter, which profil to fetch.
     */
    where: profilWhereUniqueInput
  }

  /**
   * profil findUniqueOrThrow
   */
  export type profilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * Filter, which profil to fetch.
     */
    where: profilWhereUniqueInput
  }

  /**
   * profil findFirst
   */
  export type profilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * Filter, which profil to fetch.
     */
    where?: profilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profils to fetch.
     */
    orderBy?: profilOrderByWithRelationInput | profilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profils.
     */
    cursor?: profilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profils.
     */
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * profil findFirstOrThrow
   */
  export type profilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * Filter, which profil to fetch.
     */
    where?: profilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profils to fetch.
     */
    orderBy?: profilOrderByWithRelationInput | profilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profils.
     */
    cursor?: profilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profils.
     */
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * profil findMany
   */
  export type profilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * Filter, which profils to fetch.
     */
    where?: profilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profils to fetch.
     */
    orderBy?: profilOrderByWithRelationInput | profilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profils.
     */
    cursor?: profilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profils.
     */
    skip?: number
    distinct?: ProfilScalarFieldEnum | ProfilScalarFieldEnum[]
  }

  /**
   * profil create
   */
  export type profilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * The data needed to create a profil.
     */
    data: XOR<profilCreateInput, profilUncheckedCreateInput>
  }

  /**
   * profil createMany
   */
  export type profilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profils.
     */
    data: profilCreateManyInput | profilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profil update
   */
  export type profilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * The data needed to update a profil.
     */
    data: XOR<profilUpdateInput, profilUncheckedUpdateInput>
    /**
     * Choose, which profil to update.
     */
    where: profilWhereUniqueInput
  }

  /**
   * profil updateMany
   */
  export type profilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profils.
     */
    data: XOR<profilUpdateManyMutationInput, profilUncheckedUpdateManyInput>
    /**
     * Filter which profils to update
     */
    where?: profilWhereInput
    /**
     * Limit how many profils to update.
     */
    limit?: number
  }

  /**
   * profil upsert
   */
  export type profilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * The filter to search for the profil to update in case it exists.
     */
    where: profilWhereUniqueInput
    /**
     * In case the profil found by the `where` argument doesn't exist, create a new profil with this data.
     */
    create: XOR<profilCreateInput, profilUncheckedCreateInput>
    /**
     * In case the profil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilUpdateInput, profilUncheckedUpdateInput>
  }

  /**
   * profil delete
   */
  export type profilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
    /**
     * Filter which profil to delete.
     */
    where: profilWhereUniqueInput
  }

  /**
   * profil deleteMany
   */
  export type profilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profils to delete
     */
    where?: profilWhereInput
    /**
     * Limit how many profils to delete.
     */
    limit?: number
  }

  /**
   * profil without action
   */
  export type profilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profil
     */
    select?: profilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profil
     */
    omit?: profilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilInclude<ExtArgs> | null
  }


  /**
   * Model permohonan_bimbingan
   */

  export type AggregatePermohonan_bimbingan = {
    _count: Permohonan_bimbinganCountAggregateOutputType | null
    _avg: Permohonan_bimbinganAvgAggregateOutputType | null
    _sum: Permohonan_bimbinganSumAggregateOutputType | null
    _min: Permohonan_bimbinganMinAggregateOutputType | null
    _max: Permohonan_bimbinganMaxAggregateOutputType | null
  }

  export type Permohonan_bimbinganAvgAggregateOutputType = {
    id: number | null
  }

  export type Permohonan_bimbinganSumAggregateOutputType = {
    id: number | null
  }

  export type Permohonan_bimbinganMinAggregateOutputType = {
    id: number | null
    statusPermohonan: $Enums.status_permohonan | null
    kalimatPermohonan: string | null
    alasanDitolak: string | null
    mahasiswaId: string | null
    dosenId: string | null
    createdAt: Date | null
  }

  export type Permohonan_bimbinganMaxAggregateOutputType = {
    id: number | null
    statusPermohonan: $Enums.status_permohonan | null
    kalimatPermohonan: string | null
    alasanDitolak: string | null
    mahasiswaId: string | null
    dosenId: string | null
    createdAt: Date | null
  }

  export type Permohonan_bimbinganCountAggregateOutputType = {
    id: number
    statusPermohonan: number
    kalimatPermohonan: number
    alasanDitolak: number
    mahasiswaId: number
    dosenId: number
    createdAt: number
    _all: number
  }


  export type Permohonan_bimbinganAvgAggregateInputType = {
    id?: true
  }

  export type Permohonan_bimbinganSumAggregateInputType = {
    id?: true
  }

  export type Permohonan_bimbinganMinAggregateInputType = {
    id?: true
    statusPermohonan?: true
    kalimatPermohonan?: true
    alasanDitolak?: true
    mahasiswaId?: true
    dosenId?: true
    createdAt?: true
  }

  export type Permohonan_bimbinganMaxAggregateInputType = {
    id?: true
    statusPermohonan?: true
    kalimatPermohonan?: true
    alasanDitolak?: true
    mahasiswaId?: true
    dosenId?: true
    createdAt?: true
  }

  export type Permohonan_bimbinganCountAggregateInputType = {
    id?: true
    statusPermohonan?: true
    kalimatPermohonan?: true
    alasanDitolak?: true
    mahasiswaId?: true
    dosenId?: true
    createdAt?: true
    _all?: true
  }

  export type Permohonan_bimbinganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permohonan_bimbingan to aggregate.
     */
    where?: permohonan_bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permohonan_bimbingans to fetch.
     */
    orderBy?: permohonan_bimbinganOrderByWithRelationInput | permohonan_bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permohonan_bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permohonan_bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permohonan_bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permohonan_bimbingans
    **/
    _count?: true | Permohonan_bimbinganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Permohonan_bimbinganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Permohonan_bimbinganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Permohonan_bimbinganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Permohonan_bimbinganMaxAggregateInputType
  }

  export type GetPermohonan_bimbinganAggregateType<T extends Permohonan_bimbinganAggregateArgs> = {
        [P in keyof T & keyof AggregatePermohonan_bimbingan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermohonan_bimbingan[P]>
      : GetScalarType<T[P], AggregatePermohonan_bimbingan[P]>
  }




  export type permohonan_bimbinganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permohonan_bimbinganWhereInput
    orderBy?: permohonan_bimbinganOrderByWithAggregationInput | permohonan_bimbinganOrderByWithAggregationInput[]
    by: Permohonan_bimbinganScalarFieldEnum[] | Permohonan_bimbinganScalarFieldEnum
    having?: permohonan_bimbinganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Permohonan_bimbinganCountAggregateInputType | true
    _avg?: Permohonan_bimbinganAvgAggregateInputType
    _sum?: Permohonan_bimbinganSumAggregateInputType
    _min?: Permohonan_bimbinganMinAggregateInputType
    _max?: Permohonan_bimbinganMaxAggregateInputType
  }

  export type Permohonan_bimbinganGroupByOutputType = {
    id: number
    statusPermohonan: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak: string | null
    mahasiswaId: string | null
    dosenId: string | null
    createdAt: Date
    _count: Permohonan_bimbinganCountAggregateOutputType | null
    _avg: Permohonan_bimbinganAvgAggregateOutputType | null
    _sum: Permohonan_bimbinganSumAggregateOutputType | null
    _min: Permohonan_bimbinganMinAggregateOutputType | null
    _max: Permohonan_bimbinganMaxAggregateOutputType | null
  }

  type GetPermohonan_bimbinganGroupByPayload<T extends permohonan_bimbinganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Permohonan_bimbinganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Permohonan_bimbinganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Permohonan_bimbinganGroupByOutputType[P]>
            : GetScalarType<T[P], Permohonan_bimbinganGroupByOutputType[P]>
        }
      >
    >


  export type permohonan_bimbinganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusPermohonan?: boolean
    kalimatPermohonan?: boolean
    alasanDitolak?: boolean
    mahasiswaId?: boolean
    dosenId?: boolean
    createdAt?: boolean
    mahasiswa?: boolean | permohonan_bimbingan$mahasiswaArgs<ExtArgs>
    dosen?: boolean | permohonan_bimbingan$dosenArgs<ExtArgs>
  }, ExtArgs["result"]["permohonan_bimbingan"]>



  export type permohonan_bimbinganSelectScalar = {
    id?: boolean
    statusPermohonan?: boolean
    kalimatPermohonan?: boolean
    alasanDitolak?: boolean
    mahasiswaId?: boolean
    dosenId?: boolean
    createdAt?: boolean
  }

  export type permohonan_bimbinganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statusPermohonan" | "kalimatPermohonan" | "alasanDitolak" | "mahasiswaId" | "dosenId" | "createdAt", ExtArgs["result"]["permohonan_bimbingan"]>
  export type permohonan_bimbinganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | permohonan_bimbingan$mahasiswaArgs<ExtArgs>
    dosen?: boolean | permohonan_bimbingan$dosenArgs<ExtArgs>
  }

  export type $permohonan_bimbinganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permohonan_bimbingan"
    objects: {
      mahasiswa: Prisma.$penggunaPayload<ExtArgs> | null
      dosen: Prisma.$penggunaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statusPermohonan: $Enums.status_permohonan
      kalimatPermohonan: string
      alasanDitolak: string | null
      mahasiswaId: string | null
      dosenId: string | null
      createdAt: Date
    }, ExtArgs["result"]["permohonan_bimbingan"]>
    composites: {}
  }

  type permohonan_bimbinganGetPayload<S extends boolean | null | undefined | permohonan_bimbinganDefaultArgs> = $Result.GetResult<Prisma.$permohonan_bimbinganPayload, S>

  type permohonan_bimbinganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<permohonan_bimbinganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Permohonan_bimbinganCountAggregateInputType | true
    }

  export interface permohonan_bimbinganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permohonan_bimbingan'], meta: { name: 'permohonan_bimbingan' } }
    /**
     * Find zero or one Permohonan_bimbingan that matches the filter.
     * @param {permohonan_bimbinganFindUniqueArgs} args - Arguments to find a Permohonan_bimbingan
     * @example
     * // Get one Permohonan_bimbingan
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permohonan_bimbinganFindUniqueArgs>(args: SelectSubset<T, permohonan_bimbinganFindUniqueArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permohonan_bimbingan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permohonan_bimbinganFindUniqueOrThrowArgs} args - Arguments to find a Permohonan_bimbingan
     * @example
     * // Get one Permohonan_bimbingan
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permohonan_bimbinganFindUniqueOrThrowArgs>(args: SelectSubset<T, permohonan_bimbinganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permohonan_bimbingan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permohonan_bimbinganFindFirstArgs} args - Arguments to find a Permohonan_bimbingan
     * @example
     * // Get one Permohonan_bimbingan
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permohonan_bimbinganFindFirstArgs>(args?: SelectSubset<T, permohonan_bimbinganFindFirstArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permohonan_bimbingan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permohonan_bimbinganFindFirstOrThrowArgs} args - Arguments to find a Permohonan_bimbingan
     * @example
     * // Get one Permohonan_bimbingan
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permohonan_bimbinganFindFirstOrThrowArgs>(args?: SelectSubset<T, permohonan_bimbinganFindFirstOrThrowArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permohonan_bimbingans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permohonan_bimbinganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permohonan_bimbingans
     * const permohonan_bimbingans = await prisma.permohonan_bimbingan.findMany()
     * 
     * // Get first 10 Permohonan_bimbingans
     * const permohonan_bimbingans = await prisma.permohonan_bimbingan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permohonan_bimbinganWithIdOnly = await prisma.permohonan_bimbingan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permohonan_bimbinganFindManyArgs>(args?: SelectSubset<T, permohonan_bimbinganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permohonan_bimbingan.
     * @param {permohonan_bimbinganCreateArgs} args - Arguments to create a Permohonan_bimbingan.
     * @example
     * // Create one Permohonan_bimbingan
     * const Permohonan_bimbingan = await prisma.permohonan_bimbingan.create({
     *   data: {
     *     // ... data to create a Permohonan_bimbingan
     *   }
     * })
     * 
     */
    create<T extends permohonan_bimbinganCreateArgs>(args: SelectSubset<T, permohonan_bimbinganCreateArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permohonan_bimbingans.
     * @param {permohonan_bimbinganCreateManyArgs} args - Arguments to create many Permohonan_bimbingans.
     * @example
     * // Create many Permohonan_bimbingans
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permohonan_bimbinganCreateManyArgs>(args?: SelectSubset<T, permohonan_bimbinganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permohonan_bimbingan.
     * @param {permohonan_bimbinganDeleteArgs} args - Arguments to delete one Permohonan_bimbingan.
     * @example
     * // Delete one Permohonan_bimbingan
     * const Permohonan_bimbingan = await prisma.permohonan_bimbingan.delete({
     *   where: {
     *     // ... filter to delete one Permohonan_bimbingan
     *   }
     * })
     * 
     */
    delete<T extends permohonan_bimbinganDeleteArgs>(args: SelectSubset<T, permohonan_bimbinganDeleteArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permohonan_bimbingan.
     * @param {permohonan_bimbinganUpdateArgs} args - Arguments to update one Permohonan_bimbingan.
     * @example
     * // Update one Permohonan_bimbingan
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permohonan_bimbinganUpdateArgs>(args: SelectSubset<T, permohonan_bimbinganUpdateArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permohonan_bimbingans.
     * @param {permohonan_bimbinganDeleteManyArgs} args - Arguments to filter Permohonan_bimbingans to delete.
     * @example
     * // Delete a few Permohonan_bimbingans
     * const { count } = await prisma.permohonan_bimbingan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permohonan_bimbinganDeleteManyArgs>(args?: SelectSubset<T, permohonan_bimbinganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permohonan_bimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permohonan_bimbinganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permohonan_bimbingans
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permohonan_bimbinganUpdateManyArgs>(args: SelectSubset<T, permohonan_bimbinganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permohonan_bimbingan.
     * @param {permohonan_bimbinganUpsertArgs} args - Arguments to update or create a Permohonan_bimbingan.
     * @example
     * // Update or create a Permohonan_bimbingan
     * const permohonan_bimbingan = await prisma.permohonan_bimbingan.upsert({
     *   create: {
     *     // ... data to create a Permohonan_bimbingan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permohonan_bimbingan we want to update
     *   }
     * })
     */
    upsert<T extends permohonan_bimbinganUpsertArgs>(args: SelectSubset<T, permohonan_bimbinganUpsertArgs<ExtArgs>>): Prisma__permohonan_bimbinganClient<$Result.GetResult<Prisma.$permohonan_bimbinganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permohonan_bimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permohonan_bimbinganCountArgs} args - Arguments to filter Permohonan_bimbingans to count.
     * @example
     * // Count the number of Permohonan_bimbingans
     * const count = await prisma.permohonan_bimbingan.count({
     *   where: {
     *     // ... the filter for the Permohonan_bimbingans we want to count
     *   }
     * })
    **/
    count<T extends permohonan_bimbinganCountArgs>(
      args?: Subset<T, permohonan_bimbinganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Permohonan_bimbinganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permohonan_bimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Permohonan_bimbinganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Permohonan_bimbinganAggregateArgs>(args: Subset<T, Permohonan_bimbinganAggregateArgs>): Prisma.PrismaPromise<GetPermohonan_bimbinganAggregateType<T>>

    /**
     * Group by Permohonan_bimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permohonan_bimbinganGroupByArgs} args - Group by arguments.
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
      T extends permohonan_bimbinganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permohonan_bimbinganGroupByArgs['orderBy'] }
        : { orderBy?: permohonan_bimbinganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, permohonan_bimbinganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermohonan_bimbinganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permohonan_bimbingan model
   */
  readonly fields: permohonan_bimbinganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permohonan_bimbingan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permohonan_bimbinganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends permohonan_bimbingan$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, permohonan_bimbingan$mahasiswaArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dosen<T extends permohonan_bimbingan$dosenArgs<ExtArgs> = {}>(args?: Subset<T, permohonan_bimbingan$dosenArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the permohonan_bimbingan model
   */
  interface permohonan_bimbinganFieldRefs {
    readonly id: FieldRef<"permohonan_bimbingan", 'Int'>
    readonly statusPermohonan: FieldRef<"permohonan_bimbingan", 'status_permohonan'>
    readonly kalimatPermohonan: FieldRef<"permohonan_bimbingan", 'String'>
    readonly alasanDitolak: FieldRef<"permohonan_bimbingan", 'String'>
    readonly mahasiswaId: FieldRef<"permohonan_bimbingan", 'String'>
    readonly dosenId: FieldRef<"permohonan_bimbingan", 'String'>
    readonly createdAt: FieldRef<"permohonan_bimbingan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permohonan_bimbingan findUnique
   */
  export type permohonan_bimbinganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which permohonan_bimbingan to fetch.
     */
    where: permohonan_bimbinganWhereUniqueInput
  }

  /**
   * permohonan_bimbingan findUniqueOrThrow
   */
  export type permohonan_bimbinganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which permohonan_bimbingan to fetch.
     */
    where: permohonan_bimbinganWhereUniqueInput
  }

  /**
   * permohonan_bimbingan findFirst
   */
  export type permohonan_bimbinganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which permohonan_bimbingan to fetch.
     */
    where?: permohonan_bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permohonan_bimbingans to fetch.
     */
    orderBy?: permohonan_bimbinganOrderByWithRelationInput | permohonan_bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permohonan_bimbingans.
     */
    cursor?: permohonan_bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permohonan_bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permohonan_bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permohonan_bimbingans.
     */
    distinct?: Permohonan_bimbinganScalarFieldEnum | Permohonan_bimbinganScalarFieldEnum[]
  }

  /**
   * permohonan_bimbingan findFirstOrThrow
   */
  export type permohonan_bimbinganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which permohonan_bimbingan to fetch.
     */
    where?: permohonan_bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permohonan_bimbingans to fetch.
     */
    orderBy?: permohonan_bimbinganOrderByWithRelationInput | permohonan_bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permohonan_bimbingans.
     */
    cursor?: permohonan_bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permohonan_bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permohonan_bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permohonan_bimbingans.
     */
    distinct?: Permohonan_bimbinganScalarFieldEnum | Permohonan_bimbinganScalarFieldEnum[]
  }

  /**
   * permohonan_bimbingan findMany
   */
  export type permohonan_bimbinganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * Filter, which permohonan_bimbingans to fetch.
     */
    where?: permohonan_bimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permohonan_bimbingans to fetch.
     */
    orderBy?: permohonan_bimbinganOrderByWithRelationInput | permohonan_bimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permohonan_bimbingans.
     */
    cursor?: permohonan_bimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permohonan_bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permohonan_bimbingans.
     */
    skip?: number
    distinct?: Permohonan_bimbinganScalarFieldEnum | Permohonan_bimbinganScalarFieldEnum[]
  }

  /**
   * permohonan_bimbingan create
   */
  export type permohonan_bimbinganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * The data needed to create a permohonan_bimbingan.
     */
    data: XOR<permohonan_bimbinganCreateInput, permohonan_bimbinganUncheckedCreateInput>
  }

  /**
   * permohonan_bimbingan createMany
   */
  export type permohonan_bimbinganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permohonan_bimbingans.
     */
    data: permohonan_bimbinganCreateManyInput | permohonan_bimbinganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permohonan_bimbingan update
   */
  export type permohonan_bimbinganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * The data needed to update a permohonan_bimbingan.
     */
    data: XOR<permohonan_bimbinganUpdateInput, permohonan_bimbinganUncheckedUpdateInput>
    /**
     * Choose, which permohonan_bimbingan to update.
     */
    where: permohonan_bimbinganWhereUniqueInput
  }

  /**
   * permohonan_bimbingan updateMany
   */
  export type permohonan_bimbinganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permohonan_bimbingans.
     */
    data: XOR<permohonan_bimbinganUpdateManyMutationInput, permohonan_bimbinganUncheckedUpdateManyInput>
    /**
     * Filter which permohonan_bimbingans to update
     */
    where?: permohonan_bimbinganWhereInput
    /**
     * Limit how many permohonan_bimbingans to update.
     */
    limit?: number
  }

  /**
   * permohonan_bimbingan upsert
   */
  export type permohonan_bimbinganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * The filter to search for the permohonan_bimbingan to update in case it exists.
     */
    where: permohonan_bimbinganWhereUniqueInput
    /**
     * In case the permohonan_bimbingan found by the `where` argument doesn't exist, create a new permohonan_bimbingan with this data.
     */
    create: XOR<permohonan_bimbinganCreateInput, permohonan_bimbinganUncheckedCreateInput>
    /**
     * In case the permohonan_bimbingan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permohonan_bimbinganUpdateInput, permohonan_bimbinganUncheckedUpdateInput>
  }

  /**
   * permohonan_bimbingan delete
   */
  export type permohonan_bimbinganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
    /**
     * Filter which permohonan_bimbingan to delete.
     */
    where: permohonan_bimbinganWhereUniqueInput
  }

  /**
   * permohonan_bimbingan deleteMany
   */
  export type permohonan_bimbinganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permohonan_bimbingans to delete
     */
    where?: permohonan_bimbinganWhereInput
    /**
     * Limit how many permohonan_bimbingans to delete.
     */
    limit?: number
  }

  /**
   * permohonan_bimbingan.mahasiswa
   */
  export type permohonan_bimbingan$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * permohonan_bimbingan.dosen
   */
  export type permohonan_bimbingan$dosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * permohonan_bimbingan without action
   */
  export type permohonan_bimbinganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permohonan_bimbingan
     */
    select?: permohonan_bimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permohonan_bimbingan
     */
    omit?: permohonan_bimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permohonan_bimbinganInclude<ExtArgs> | null
  }


  /**
   * Model mata_kuliah
   */

  export type AggregateMata_kuliah = {
    _count: Mata_kuliahCountAggregateOutputType | null
    _avg: Mata_kuliahAvgAggregateOutputType | null
    _sum: Mata_kuliahSumAggregateOutputType | null
    _min: Mata_kuliahMinAggregateOutputType | null
    _max: Mata_kuliahMaxAggregateOutputType | null
  }

  export type Mata_kuliahAvgAggregateOutputType = {
    id: number | null
    semester: number | null
  }

  export type Mata_kuliahSumAggregateOutputType = {
    id: number | null
    semester: number | null
  }

  export type Mata_kuliahMinAggregateOutputType = {
    id: number | null
    judul: string | null
    semester: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Mata_kuliahMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    semester: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Mata_kuliahCountAggregateOutputType = {
    id: number
    judul: number
    semester: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Mata_kuliahAvgAggregateInputType = {
    id?: true
    semester?: true
  }

  export type Mata_kuliahSumAggregateInputType = {
    id?: true
    semester?: true
  }

  export type Mata_kuliahMinAggregateInputType = {
    id?: true
    judul?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Mata_kuliahMaxAggregateInputType = {
    id?: true
    judul?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Mata_kuliahCountAggregateInputType = {
    id?: true
    judul?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Mata_kuliahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mata_kuliah to aggregate.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mata_kuliahs
    **/
    _count?: true | Mata_kuliahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mata_kuliahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mata_kuliahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mata_kuliahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mata_kuliahMaxAggregateInputType
  }

  export type GetMata_kuliahAggregateType<T extends Mata_kuliahAggregateArgs> = {
        [P in keyof T & keyof AggregateMata_kuliah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMata_kuliah[P]>
      : GetScalarType<T[P], AggregateMata_kuliah[P]>
  }




  export type mata_kuliahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mata_kuliahWhereInput
    orderBy?: mata_kuliahOrderByWithAggregationInput | mata_kuliahOrderByWithAggregationInput[]
    by: Mata_kuliahScalarFieldEnum[] | Mata_kuliahScalarFieldEnum
    having?: mata_kuliahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mata_kuliahCountAggregateInputType | true
    _avg?: Mata_kuliahAvgAggregateInputType
    _sum?: Mata_kuliahSumAggregateInputType
    _min?: Mata_kuliahMinAggregateInputType
    _max?: Mata_kuliahMaxAggregateInputType
  }

  export type Mata_kuliahGroupByOutputType = {
    id: number
    judul: string
    semester: number
    createdAt: Date
    updatedAt: Date
    _count: Mata_kuliahCountAggregateOutputType | null
    _avg: Mata_kuliahAvgAggregateOutputType | null
    _sum: Mata_kuliahSumAggregateOutputType | null
    _min: Mata_kuliahMinAggregateOutputType | null
    _max: Mata_kuliahMaxAggregateOutputType | null
  }

  type GetMata_kuliahGroupByPayload<T extends mata_kuliahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mata_kuliahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mata_kuliahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mata_kuliahGroupByOutputType[P]>
            : GetScalarType<T[P], Mata_kuliahGroupByOutputType[P]>
        }
      >
    >


  export type mata_kuliahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    semester?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kegiatan?: boolean | mata_kuliah$kegiatanArgs<ExtArgs>
    _count?: boolean | Mata_kuliahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mata_kuliah"]>



  export type mata_kuliahSelectScalar = {
    id?: boolean
    judul?: boolean
    semester?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type mata_kuliahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "semester" | "createdAt" | "updatedAt", ExtArgs["result"]["mata_kuliah"]>
  export type mata_kuliahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | mata_kuliah$kegiatanArgs<ExtArgs>
    _count?: boolean | Mata_kuliahCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $mata_kuliahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mata_kuliah"
    objects: {
      kegiatan: Prisma.$kegiatanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      semester: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mata_kuliah"]>
    composites: {}
  }

  type mata_kuliahGetPayload<S extends boolean | null | undefined | mata_kuliahDefaultArgs> = $Result.GetResult<Prisma.$mata_kuliahPayload, S>

  type mata_kuliahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mata_kuliahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mata_kuliahCountAggregateInputType | true
    }

  export interface mata_kuliahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mata_kuliah'], meta: { name: 'mata_kuliah' } }
    /**
     * Find zero or one Mata_kuliah that matches the filter.
     * @param {mata_kuliahFindUniqueArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mata_kuliahFindUniqueArgs>(args: SelectSubset<T, mata_kuliahFindUniqueArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mata_kuliah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mata_kuliahFindUniqueOrThrowArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mata_kuliahFindUniqueOrThrowArgs>(args: SelectSubset<T, mata_kuliahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mata_kuliah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahFindFirstArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mata_kuliahFindFirstArgs>(args?: SelectSubset<T, mata_kuliahFindFirstArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mata_kuliah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahFindFirstOrThrowArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mata_kuliahFindFirstOrThrowArgs>(args?: SelectSubset<T, mata_kuliahFindFirstOrThrowArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mata_kuliahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mata_kuliahs
     * const mata_kuliahs = await prisma.mata_kuliah.findMany()
     * 
     * // Get first 10 Mata_kuliahs
     * const mata_kuliahs = await prisma.mata_kuliah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mata_kuliahWithIdOnly = await prisma.mata_kuliah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mata_kuliahFindManyArgs>(args?: SelectSubset<T, mata_kuliahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mata_kuliah.
     * @param {mata_kuliahCreateArgs} args - Arguments to create a Mata_kuliah.
     * @example
     * // Create one Mata_kuliah
     * const Mata_kuliah = await prisma.mata_kuliah.create({
     *   data: {
     *     // ... data to create a Mata_kuliah
     *   }
     * })
     * 
     */
    create<T extends mata_kuliahCreateArgs>(args: SelectSubset<T, mata_kuliahCreateArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mata_kuliahs.
     * @param {mata_kuliahCreateManyArgs} args - Arguments to create many Mata_kuliahs.
     * @example
     * // Create many Mata_kuliahs
     * const mata_kuliah = await prisma.mata_kuliah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mata_kuliahCreateManyArgs>(args?: SelectSubset<T, mata_kuliahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mata_kuliah.
     * @param {mata_kuliahDeleteArgs} args - Arguments to delete one Mata_kuliah.
     * @example
     * // Delete one Mata_kuliah
     * const Mata_kuliah = await prisma.mata_kuliah.delete({
     *   where: {
     *     // ... filter to delete one Mata_kuliah
     *   }
     * })
     * 
     */
    delete<T extends mata_kuliahDeleteArgs>(args: SelectSubset<T, mata_kuliahDeleteArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mata_kuliah.
     * @param {mata_kuliahUpdateArgs} args - Arguments to update one Mata_kuliah.
     * @example
     * // Update one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mata_kuliahUpdateArgs>(args: SelectSubset<T, mata_kuliahUpdateArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mata_kuliahs.
     * @param {mata_kuliahDeleteManyArgs} args - Arguments to filter Mata_kuliahs to delete.
     * @example
     * // Delete a few Mata_kuliahs
     * const { count } = await prisma.mata_kuliah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mata_kuliahDeleteManyArgs>(args?: SelectSubset<T, mata_kuliahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mata_kuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mata_kuliahs
     * const mata_kuliah = await prisma.mata_kuliah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mata_kuliahUpdateManyArgs>(args: SelectSubset<T, mata_kuliahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mata_kuliah.
     * @param {mata_kuliahUpsertArgs} args - Arguments to update or create a Mata_kuliah.
     * @example
     * // Update or create a Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.upsert({
     *   create: {
     *     // ... data to create a Mata_kuliah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mata_kuliah we want to update
     *   }
     * })
     */
    upsert<T extends mata_kuliahUpsertArgs>(args: SelectSubset<T, mata_kuliahUpsertArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mata_kuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahCountArgs} args - Arguments to filter Mata_kuliahs to count.
     * @example
     * // Count the number of Mata_kuliahs
     * const count = await prisma.mata_kuliah.count({
     *   where: {
     *     // ... the filter for the Mata_kuliahs we want to count
     *   }
     * })
    **/
    count<T extends mata_kuliahCountArgs>(
      args?: Subset<T, mata_kuliahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mata_kuliahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mata_kuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mata_kuliahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mata_kuliahAggregateArgs>(args: Subset<T, Mata_kuliahAggregateArgs>): Prisma.PrismaPromise<GetMata_kuliahAggregateType<T>>

    /**
     * Group by Mata_kuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahGroupByArgs} args - Group by arguments.
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
      T extends mata_kuliahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mata_kuliahGroupByArgs['orderBy'] }
        : { orderBy?: mata_kuliahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mata_kuliahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMata_kuliahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mata_kuliah model
   */
  readonly fields: mata_kuliahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mata_kuliah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mata_kuliahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kegiatan<T extends mata_kuliah$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, mata_kuliah$kegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the mata_kuliah model
   */
  interface mata_kuliahFieldRefs {
    readonly id: FieldRef<"mata_kuliah", 'Int'>
    readonly judul: FieldRef<"mata_kuliah", 'String'>
    readonly semester: FieldRef<"mata_kuliah", 'Int'>
    readonly createdAt: FieldRef<"mata_kuliah", 'DateTime'>
    readonly updatedAt: FieldRef<"mata_kuliah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mata_kuliah findUnique
   */
  export type mata_kuliahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah findUniqueOrThrow
   */
  export type mata_kuliahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah findFirst
   */
  export type mata_kuliahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mata_kuliahs.
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mata_kuliahs.
     */
    distinct?: Mata_kuliahScalarFieldEnum | Mata_kuliahScalarFieldEnum[]
  }

  /**
   * mata_kuliah findFirstOrThrow
   */
  export type mata_kuliahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mata_kuliahs.
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mata_kuliahs.
     */
    distinct?: Mata_kuliahScalarFieldEnum | Mata_kuliahScalarFieldEnum[]
  }

  /**
   * mata_kuliah findMany
   */
  export type mata_kuliahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliahs to fetch.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mata_kuliahs.
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    distinct?: Mata_kuliahScalarFieldEnum | Mata_kuliahScalarFieldEnum[]
  }

  /**
   * mata_kuliah create
   */
  export type mata_kuliahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * The data needed to create a mata_kuliah.
     */
    data: XOR<mata_kuliahCreateInput, mata_kuliahUncheckedCreateInput>
  }

  /**
   * mata_kuliah createMany
   */
  export type mata_kuliahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mata_kuliahs.
     */
    data: mata_kuliahCreateManyInput | mata_kuliahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mata_kuliah update
   */
  export type mata_kuliahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * The data needed to update a mata_kuliah.
     */
    data: XOR<mata_kuliahUpdateInput, mata_kuliahUncheckedUpdateInput>
    /**
     * Choose, which mata_kuliah to update.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah updateMany
   */
  export type mata_kuliahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mata_kuliahs.
     */
    data: XOR<mata_kuliahUpdateManyMutationInput, mata_kuliahUncheckedUpdateManyInput>
    /**
     * Filter which mata_kuliahs to update
     */
    where?: mata_kuliahWhereInput
    /**
     * Limit how many mata_kuliahs to update.
     */
    limit?: number
  }

  /**
   * mata_kuliah upsert
   */
  export type mata_kuliahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * The filter to search for the mata_kuliah to update in case it exists.
     */
    where: mata_kuliahWhereUniqueInput
    /**
     * In case the mata_kuliah found by the `where` argument doesn't exist, create a new mata_kuliah with this data.
     */
    create: XOR<mata_kuliahCreateInput, mata_kuliahUncheckedCreateInput>
    /**
     * In case the mata_kuliah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mata_kuliahUpdateInput, mata_kuliahUncheckedUpdateInput>
  }

  /**
   * mata_kuliah delete
   */
  export type mata_kuliahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter which mata_kuliah to delete.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah deleteMany
   */
  export type mata_kuliahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mata_kuliahs to delete
     */
    where?: mata_kuliahWhereInput
    /**
     * Limit how many mata_kuliahs to delete.
     */
    limit?: number
  }

  /**
   * mata_kuliah.kegiatan
   */
  export type mata_kuliah$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    where?: kegiatanWhereInput
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    cursor?: kegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * mata_kuliah without action
   */
  export type mata_kuliahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
  }


  /**
   * Model lampiran_kegiatan
   */

  export type AggregateLampiran_kegiatan = {
    _count: Lampiran_kegiatanCountAggregateOutputType | null
    _avg: Lampiran_kegiatanAvgAggregateOutputType | null
    _sum: Lampiran_kegiatanSumAggregateOutputType | null
    _min: Lampiran_kegiatanMinAggregateOutputType | null
    _max: Lampiran_kegiatanMaxAggregateOutputType | null
  }

  export type Lampiran_kegiatanAvgAggregateOutputType = {
    id: number | null
    kegiatanId: number | null
  }

  export type Lampiran_kegiatanSumAggregateOutputType = {
    id: number | null
    kegiatanId: number | null
  }

  export type Lampiran_kegiatanMinAggregateOutputType = {
    id: number | null
    path: string | null
    ext: string | null
    kegiatanId: number | null
  }

  export type Lampiran_kegiatanMaxAggregateOutputType = {
    id: number | null
    path: string | null
    ext: string | null
    kegiatanId: number | null
  }

  export type Lampiran_kegiatanCountAggregateOutputType = {
    id: number
    path: number
    ext: number
    kegiatanId: number
    _all: number
  }


  export type Lampiran_kegiatanAvgAggregateInputType = {
    id?: true
    kegiatanId?: true
  }

  export type Lampiran_kegiatanSumAggregateInputType = {
    id?: true
    kegiatanId?: true
  }

  export type Lampiran_kegiatanMinAggregateInputType = {
    id?: true
    path?: true
    ext?: true
    kegiatanId?: true
  }

  export type Lampiran_kegiatanMaxAggregateInputType = {
    id?: true
    path?: true
    ext?: true
    kegiatanId?: true
  }

  export type Lampiran_kegiatanCountAggregateInputType = {
    id?: true
    path?: true
    ext?: true
    kegiatanId?: true
    _all?: true
  }

  export type Lampiran_kegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lampiran_kegiatan to aggregate.
     */
    where?: lampiran_kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lampiran_kegiatans to fetch.
     */
    orderBy?: lampiran_kegiatanOrderByWithRelationInput | lampiran_kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lampiran_kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lampiran_kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lampiran_kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lampiran_kegiatans
    **/
    _count?: true | Lampiran_kegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lampiran_kegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lampiran_kegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lampiran_kegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lampiran_kegiatanMaxAggregateInputType
  }

  export type GetLampiran_kegiatanAggregateType<T extends Lampiran_kegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateLampiran_kegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLampiran_kegiatan[P]>
      : GetScalarType<T[P], AggregateLampiran_kegiatan[P]>
  }




  export type lampiran_kegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lampiran_kegiatanWhereInput
    orderBy?: lampiran_kegiatanOrderByWithAggregationInput | lampiran_kegiatanOrderByWithAggregationInput[]
    by: Lampiran_kegiatanScalarFieldEnum[] | Lampiran_kegiatanScalarFieldEnum
    having?: lampiran_kegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lampiran_kegiatanCountAggregateInputType | true
    _avg?: Lampiran_kegiatanAvgAggregateInputType
    _sum?: Lampiran_kegiatanSumAggregateInputType
    _min?: Lampiran_kegiatanMinAggregateInputType
    _max?: Lampiran_kegiatanMaxAggregateInputType
  }

  export type Lampiran_kegiatanGroupByOutputType = {
    id: number
    path: string
    ext: string
    kegiatanId: number | null
    _count: Lampiran_kegiatanCountAggregateOutputType | null
    _avg: Lampiran_kegiatanAvgAggregateOutputType | null
    _sum: Lampiran_kegiatanSumAggregateOutputType | null
    _min: Lampiran_kegiatanMinAggregateOutputType | null
    _max: Lampiran_kegiatanMaxAggregateOutputType | null
  }

  type GetLampiran_kegiatanGroupByPayload<T extends lampiran_kegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lampiran_kegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lampiran_kegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lampiran_kegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], Lampiran_kegiatanGroupByOutputType[P]>
        }
      >
    >


  export type lampiran_kegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    ext?: boolean
    kegiatanId?: boolean
    kegiatan?: boolean | lampiran_kegiatan$kegiatanArgs<ExtArgs>
  }, ExtArgs["result"]["lampiran_kegiatan"]>



  export type lampiran_kegiatanSelectScalar = {
    id?: boolean
    path?: boolean
    ext?: boolean
    kegiatanId?: boolean
  }

  export type lampiran_kegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "ext" | "kegiatanId", ExtArgs["result"]["lampiran_kegiatan"]>
  export type lampiran_kegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | lampiran_kegiatan$kegiatanArgs<ExtArgs>
  }

  export type $lampiran_kegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lampiran_kegiatan"
    objects: {
      kegiatan: Prisma.$kegiatanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      ext: string
      kegiatanId: number | null
    }, ExtArgs["result"]["lampiran_kegiatan"]>
    composites: {}
  }

  type lampiran_kegiatanGetPayload<S extends boolean | null | undefined | lampiran_kegiatanDefaultArgs> = $Result.GetResult<Prisma.$lampiran_kegiatanPayload, S>

  type lampiran_kegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lampiran_kegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lampiran_kegiatanCountAggregateInputType | true
    }

  export interface lampiran_kegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lampiran_kegiatan'], meta: { name: 'lampiran_kegiatan' } }
    /**
     * Find zero or one Lampiran_kegiatan that matches the filter.
     * @param {lampiran_kegiatanFindUniqueArgs} args - Arguments to find a Lampiran_kegiatan
     * @example
     * // Get one Lampiran_kegiatan
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lampiran_kegiatanFindUniqueArgs>(args: SelectSubset<T, lampiran_kegiatanFindUniqueArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lampiran_kegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lampiran_kegiatanFindUniqueOrThrowArgs} args - Arguments to find a Lampiran_kegiatan
     * @example
     * // Get one Lampiran_kegiatan
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lampiran_kegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, lampiran_kegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lampiran_kegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lampiran_kegiatanFindFirstArgs} args - Arguments to find a Lampiran_kegiatan
     * @example
     * // Get one Lampiran_kegiatan
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lampiran_kegiatanFindFirstArgs>(args?: SelectSubset<T, lampiran_kegiatanFindFirstArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lampiran_kegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lampiran_kegiatanFindFirstOrThrowArgs} args - Arguments to find a Lampiran_kegiatan
     * @example
     * // Get one Lampiran_kegiatan
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lampiran_kegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, lampiran_kegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lampiran_kegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lampiran_kegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lampiran_kegiatans
     * const lampiran_kegiatans = await prisma.lampiran_kegiatan.findMany()
     * 
     * // Get first 10 Lampiran_kegiatans
     * const lampiran_kegiatans = await prisma.lampiran_kegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lampiran_kegiatanWithIdOnly = await prisma.lampiran_kegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lampiran_kegiatanFindManyArgs>(args?: SelectSubset<T, lampiran_kegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lampiran_kegiatan.
     * @param {lampiran_kegiatanCreateArgs} args - Arguments to create a Lampiran_kegiatan.
     * @example
     * // Create one Lampiran_kegiatan
     * const Lampiran_kegiatan = await prisma.lampiran_kegiatan.create({
     *   data: {
     *     // ... data to create a Lampiran_kegiatan
     *   }
     * })
     * 
     */
    create<T extends lampiran_kegiatanCreateArgs>(args: SelectSubset<T, lampiran_kegiatanCreateArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lampiran_kegiatans.
     * @param {lampiran_kegiatanCreateManyArgs} args - Arguments to create many Lampiran_kegiatans.
     * @example
     * // Create many Lampiran_kegiatans
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lampiran_kegiatanCreateManyArgs>(args?: SelectSubset<T, lampiran_kegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lampiran_kegiatan.
     * @param {lampiran_kegiatanDeleteArgs} args - Arguments to delete one Lampiran_kegiatan.
     * @example
     * // Delete one Lampiran_kegiatan
     * const Lampiran_kegiatan = await prisma.lampiran_kegiatan.delete({
     *   where: {
     *     // ... filter to delete one Lampiran_kegiatan
     *   }
     * })
     * 
     */
    delete<T extends lampiran_kegiatanDeleteArgs>(args: SelectSubset<T, lampiran_kegiatanDeleteArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lampiran_kegiatan.
     * @param {lampiran_kegiatanUpdateArgs} args - Arguments to update one Lampiran_kegiatan.
     * @example
     * // Update one Lampiran_kegiatan
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lampiran_kegiatanUpdateArgs>(args: SelectSubset<T, lampiran_kegiatanUpdateArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lampiran_kegiatans.
     * @param {lampiran_kegiatanDeleteManyArgs} args - Arguments to filter Lampiran_kegiatans to delete.
     * @example
     * // Delete a few Lampiran_kegiatans
     * const { count } = await prisma.lampiran_kegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lampiran_kegiatanDeleteManyArgs>(args?: SelectSubset<T, lampiran_kegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lampiran_kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lampiran_kegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lampiran_kegiatans
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lampiran_kegiatanUpdateManyArgs>(args: SelectSubset<T, lampiran_kegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lampiran_kegiatan.
     * @param {lampiran_kegiatanUpsertArgs} args - Arguments to update or create a Lampiran_kegiatan.
     * @example
     * // Update or create a Lampiran_kegiatan
     * const lampiran_kegiatan = await prisma.lampiran_kegiatan.upsert({
     *   create: {
     *     // ... data to create a Lampiran_kegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lampiran_kegiatan we want to update
     *   }
     * })
     */
    upsert<T extends lampiran_kegiatanUpsertArgs>(args: SelectSubset<T, lampiran_kegiatanUpsertArgs<ExtArgs>>): Prisma__lampiran_kegiatanClient<$Result.GetResult<Prisma.$lampiran_kegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lampiran_kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lampiran_kegiatanCountArgs} args - Arguments to filter Lampiran_kegiatans to count.
     * @example
     * // Count the number of Lampiran_kegiatans
     * const count = await prisma.lampiran_kegiatan.count({
     *   where: {
     *     // ... the filter for the Lampiran_kegiatans we want to count
     *   }
     * })
    **/
    count<T extends lampiran_kegiatanCountArgs>(
      args?: Subset<T, lampiran_kegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lampiran_kegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lampiran_kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lampiran_kegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lampiran_kegiatanAggregateArgs>(args: Subset<T, Lampiran_kegiatanAggregateArgs>): Prisma.PrismaPromise<GetLampiran_kegiatanAggregateType<T>>

    /**
     * Group by Lampiran_kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lampiran_kegiatanGroupByArgs} args - Group by arguments.
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
      T extends lampiran_kegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lampiran_kegiatanGroupByArgs['orderBy'] }
        : { orderBy?: lampiran_kegiatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lampiran_kegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLampiran_kegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lampiran_kegiatan model
   */
  readonly fields: lampiran_kegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lampiran_kegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lampiran_kegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kegiatan<T extends lampiran_kegiatan$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, lampiran_kegiatan$kegiatanArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lampiran_kegiatan model
   */
  interface lampiran_kegiatanFieldRefs {
    readonly id: FieldRef<"lampiran_kegiatan", 'Int'>
    readonly path: FieldRef<"lampiran_kegiatan", 'String'>
    readonly ext: FieldRef<"lampiran_kegiatan", 'String'>
    readonly kegiatanId: FieldRef<"lampiran_kegiatan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * lampiran_kegiatan findUnique
   */
  export type lampiran_kegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which lampiran_kegiatan to fetch.
     */
    where: lampiran_kegiatanWhereUniqueInput
  }

  /**
   * lampiran_kegiatan findUniqueOrThrow
   */
  export type lampiran_kegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which lampiran_kegiatan to fetch.
     */
    where: lampiran_kegiatanWhereUniqueInput
  }

  /**
   * lampiran_kegiatan findFirst
   */
  export type lampiran_kegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which lampiran_kegiatan to fetch.
     */
    where?: lampiran_kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lampiran_kegiatans to fetch.
     */
    orderBy?: lampiran_kegiatanOrderByWithRelationInput | lampiran_kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lampiran_kegiatans.
     */
    cursor?: lampiran_kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lampiran_kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lampiran_kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lampiran_kegiatans.
     */
    distinct?: Lampiran_kegiatanScalarFieldEnum | Lampiran_kegiatanScalarFieldEnum[]
  }

  /**
   * lampiran_kegiatan findFirstOrThrow
   */
  export type lampiran_kegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which lampiran_kegiatan to fetch.
     */
    where?: lampiran_kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lampiran_kegiatans to fetch.
     */
    orderBy?: lampiran_kegiatanOrderByWithRelationInput | lampiran_kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lampiran_kegiatans.
     */
    cursor?: lampiran_kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lampiran_kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lampiran_kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lampiran_kegiatans.
     */
    distinct?: Lampiran_kegiatanScalarFieldEnum | Lampiran_kegiatanScalarFieldEnum[]
  }

  /**
   * lampiran_kegiatan findMany
   */
  export type lampiran_kegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * Filter, which lampiran_kegiatans to fetch.
     */
    where?: lampiran_kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lampiran_kegiatans to fetch.
     */
    orderBy?: lampiran_kegiatanOrderByWithRelationInput | lampiran_kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lampiran_kegiatans.
     */
    cursor?: lampiran_kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lampiran_kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lampiran_kegiatans.
     */
    skip?: number
    distinct?: Lampiran_kegiatanScalarFieldEnum | Lampiran_kegiatanScalarFieldEnum[]
  }

  /**
   * lampiran_kegiatan create
   */
  export type lampiran_kegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a lampiran_kegiatan.
     */
    data: XOR<lampiran_kegiatanCreateInput, lampiran_kegiatanUncheckedCreateInput>
  }

  /**
   * lampiran_kegiatan createMany
   */
  export type lampiran_kegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lampiran_kegiatans.
     */
    data: lampiran_kegiatanCreateManyInput | lampiran_kegiatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lampiran_kegiatan update
   */
  export type lampiran_kegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a lampiran_kegiatan.
     */
    data: XOR<lampiran_kegiatanUpdateInput, lampiran_kegiatanUncheckedUpdateInput>
    /**
     * Choose, which lampiran_kegiatan to update.
     */
    where: lampiran_kegiatanWhereUniqueInput
  }

  /**
   * lampiran_kegiatan updateMany
   */
  export type lampiran_kegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lampiran_kegiatans.
     */
    data: XOR<lampiran_kegiatanUpdateManyMutationInput, lampiran_kegiatanUncheckedUpdateManyInput>
    /**
     * Filter which lampiran_kegiatans to update
     */
    where?: lampiran_kegiatanWhereInput
    /**
     * Limit how many lampiran_kegiatans to update.
     */
    limit?: number
  }

  /**
   * lampiran_kegiatan upsert
   */
  export type lampiran_kegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the lampiran_kegiatan to update in case it exists.
     */
    where: lampiran_kegiatanWhereUniqueInput
    /**
     * In case the lampiran_kegiatan found by the `where` argument doesn't exist, create a new lampiran_kegiatan with this data.
     */
    create: XOR<lampiran_kegiatanCreateInput, lampiran_kegiatanUncheckedCreateInput>
    /**
     * In case the lampiran_kegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lampiran_kegiatanUpdateInput, lampiran_kegiatanUncheckedUpdateInput>
  }

  /**
   * lampiran_kegiatan delete
   */
  export type lampiran_kegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
    /**
     * Filter which lampiran_kegiatan to delete.
     */
    where: lampiran_kegiatanWhereUniqueInput
  }

  /**
   * lampiran_kegiatan deleteMany
   */
  export type lampiran_kegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lampiran_kegiatans to delete
     */
    where?: lampiran_kegiatanWhereInput
    /**
     * Limit how many lampiran_kegiatans to delete.
     */
    limit?: number
  }

  /**
   * lampiran_kegiatan.kegiatan
   */
  export type lampiran_kegiatan$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kegiatanInclude<ExtArgs> | null
    where?: kegiatanWhereInput
  }

  /**
   * lampiran_kegiatan without action
   */
  export type lampiran_kegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lampiran_kegiatan
     */
    select?: lampiran_kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lampiran_kegiatan
     */
    omit?: lampiran_kegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lampiran_kegiatanInclude<ExtArgs> | null
  }


  /**
   * Model notifikasi
   */

  export type AggregateNotifikasi = {
    _count: NotifikasiCountAggregateOutputType | null
    _avg: NotifikasiAvgAggregateOutputType | null
    _sum: NotifikasiSumAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  export type NotifikasiAvgAggregateOutputType = {
    id: number | null
  }

  export type NotifikasiSumAggregateOutputType = {
    id: number | null
  }

  export type NotifikasiMinAggregateOutputType = {
    id: number | null
    judul: string | null
    pesan: string | null
    dibaca: boolean | null
    createdAt: Date | null
    penggunaId: string | null
  }

  export type NotifikasiMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    pesan: string | null
    dibaca: boolean | null
    createdAt: Date | null
    penggunaId: string | null
  }

  export type NotifikasiCountAggregateOutputType = {
    id: number
    judul: number
    pesan: number
    dibaca: number
    createdAt: number
    penggunaId: number
    _all: number
  }


  export type NotifikasiAvgAggregateInputType = {
    id?: true
  }

  export type NotifikasiSumAggregateInputType = {
    id?: true
  }

  export type NotifikasiMinAggregateInputType = {
    id?: true
    judul?: true
    pesan?: true
    dibaca?: true
    createdAt?: true
    penggunaId?: true
  }

  export type NotifikasiMaxAggregateInputType = {
    id?: true
    judul?: true
    pesan?: true
    dibaca?: true
    createdAt?: true
    penggunaId?: true
  }

  export type NotifikasiCountAggregateInputType = {
    id?: true
    judul?: true
    pesan?: true
    dibaca?: true
    createdAt?: true
    penggunaId?: true
    _all?: true
  }

  export type NotifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifikasi to aggregate.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifikasis
    **/
    _count?: true | NotifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotifikasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotifikasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotifikasiMaxAggregateInputType
  }

  export type GetNotifikasiAggregateType<T extends NotifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifikasi[P]>
      : GetScalarType<T[P], AggregateNotifikasi[P]>
  }




  export type notifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notifikasiWhereInput
    orderBy?: notifikasiOrderByWithAggregationInput | notifikasiOrderByWithAggregationInput[]
    by: NotifikasiScalarFieldEnum[] | NotifikasiScalarFieldEnum
    having?: notifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotifikasiCountAggregateInputType | true
    _avg?: NotifikasiAvgAggregateInputType
    _sum?: NotifikasiSumAggregateInputType
    _min?: NotifikasiMinAggregateInputType
    _max?: NotifikasiMaxAggregateInputType
  }

  export type NotifikasiGroupByOutputType = {
    id: number
    judul: string
    pesan: string
    dibaca: boolean
    createdAt: Date
    penggunaId: string
    _count: NotifikasiCountAggregateOutputType | null
    _avg: NotifikasiAvgAggregateOutputType | null
    _sum: NotifikasiSumAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  type GetNotifikasiGroupByPayload<T extends notifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
        }
      >
    >


  export type notifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    pesan?: boolean
    dibaca?: boolean
    createdAt?: boolean
    penggunaId?: boolean
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifikasi"]>



  export type notifikasiSelectScalar = {
    id?: boolean
    judul?: boolean
    pesan?: boolean
    dibaca?: boolean
    createdAt?: boolean
    penggunaId?: boolean
  }

  export type notifikasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "pesan" | "dibaca" | "createdAt" | "penggunaId", ExtArgs["result"]["notifikasi"]>
  export type notifikasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
  }

  export type $notifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifikasi"
    objects: {
      pengguna: Prisma.$penggunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      pesan: string
      dibaca: boolean
      createdAt: Date
      penggunaId: string
    }, ExtArgs["result"]["notifikasi"]>
    composites: {}
  }

  type notifikasiGetPayload<S extends boolean | null | undefined | notifikasiDefaultArgs> = $Result.GetResult<Prisma.$notifikasiPayload, S>

  type notifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notifikasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotifikasiCountAggregateInputType | true
    }

  export interface notifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifikasi'], meta: { name: 'notifikasi' } }
    /**
     * Find zero or one Notifikasi that matches the filter.
     * @param {notifikasiFindUniqueArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notifikasiFindUniqueArgs>(args: SelectSubset<T, notifikasiFindUniqueArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifikasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notifikasiFindUniqueOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, notifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiFindFirstArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notifikasiFindFirstArgs>(args?: SelectSubset<T, notifikasiFindFirstArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiFindFirstOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, notifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany()
     * 
     * // Get first 10 Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notifikasiWithIdOnly = await prisma.notifikasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notifikasiFindManyArgs>(args?: SelectSubset<T, notifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifikasi.
     * @param {notifikasiCreateArgs} args - Arguments to create a Notifikasi.
     * @example
     * // Create one Notifikasi
     * const Notifikasi = await prisma.notifikasi.create({
     *   data: {
     *     // ... data to create a Notifikasi
     *   }
     * })
     * 
     */
    create<T extends notifikasiCreateArgs>(args: SelectSubset<T, notifikasiCreateArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifikasis.
     * @param {notifikasiCreateManyArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notifikasiCreateManyArgs>(args?: SelectSubset<T, notifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifikasi.
     * @param {notifikasiDeleteArgs} args - Arguments to delete one Notifikasi.
     * @example
     * // Delete one Notifikasi
     * const Notifikasi = await prisma.notifikasi.delete({
     *   where: {
     *     // ... filter to delete one Notifikasi
     *   }
     * })
     * 
     */
    delete<T extends notifikasiDeleteArgs>(args: SelectSubset<T, notifikasiDeleteArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifikasi.
     * @param {notifikasiUpdateArgs} args - Arguments to update one Notifikasi.
     * @example
     * // Update one Notifikasi
     * const notifikasi = await prisma.notifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notifikasiUpdateArgs>(args: SelectSubset<T, notifikasiUpdateArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifikasis.
     * @param {notifikasiDeleteManyArgs} args - Arguments to filter Notifikasis to delete.
     * @example
     * // Delete a few Notifikasis
     * const { count } = await prisma.notifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notifikasiDeleteManyArgs>(args?: SelectSubset<T, notifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifikasis
     * const notifikasi = await prisma.notifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notifikasiUpdateManyArgs>(args: SelectSubset<T, notifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifikasi.
     * @param {notifikasiUpsertArgs} args - Arguments to update or create a Notifikasi.
     * @example
     * // Update or create a Notifikasi
     * const notifikasi = await prisma.notifikasi.upsert({
     *   create: {
     *     // ... data to create a Notifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifikasi we want to update
     *   }
     * })
     */
    upsert<T extends notifikasiUpsertArgs>(args: SelectSubset<T, notifikasiUpsertArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiCountArgs} args - Arguments to filter Notifikasis to count.
     * @example
     * // Count the number of Notifikasis
     * const count = await prisma.notifikasi.count({
     *   where: {
     *     // ... the filter for the Notifikasis we want to count
     *   }
     * })
    **/
    count<T extends notifikasiCountArgs>(
      args?: Subset<T, notifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotifikasiAggregateArgs>(args: Subset<T, NotifikasiAggregateArgs>): Prisma.PrismaPromise<GetNotifikasiAggregateType<T>>

    /**
     * Group by Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiGroupByArgs} args - Group by arguments.
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
      T extends notifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notifikasiGroupByArgs['orderBy'] }
        : { orderBy?: notifikasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifikasi model
   */
  readonly fields: notifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends penggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, penggunaDefaultArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notifikasi model
   */
  interface notifikasiFieldRefs {
    readonly id: FieldRef<"notifikasi", 'Int'>
    readonly judul: FieldRef<"notifikasi", 'String'>
    readonly pesan: FieldRef<"notifikasi", 'String'>
    readonly dibaca: FieldRef<"notifikasi", 'Boolean'>
    readonly createdAt: FieldRef<"notifikasi", 'DateTime'>
    readonly penggunaId: FieldRef<"notifikasi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notifikasi findUnique
   */
  export type notifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi findUniqueOrThrow
   */
  export type notifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi findFirst
   */
  export type notifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifikasis.
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * notifikasi findFirstOrThrow
   */
  export type notifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifikasis.
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * notifikasi findMany
   */
  export type notifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasis to fetch.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifikasis.
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * notifikasi create
   */
  export type notifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * The data needed to create a notifikasi.
     */
    data: XOR<notifikasiCreateInput, notifikasiUncheckedCreateInput>
  }

  /**
   * notifikasi createMany
   */
  export type notifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifikasis.
     */
    data: notifikasiCreateManyInput | notifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifikasi update
   */
  export type notifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * The data needed to update a notifikasi.
     */
    data: XOR<notifikasiUpdateInput, notifikasiUncheckedUpdateInput>
    /**
     * Choose, which notifikasi to update.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi updateMany
   */
  export type notifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifikasis.
     */
    data: XOR<notifikasiUpdateManyMutationInput, notifikasiUncheckedUpdateManyInput>
    /**
     * Filter which notifikasis to update
     */
    where?: notifikasiWhereInput
    /**
     * Limit how many notifikasis to update.
     */
    limit?: number
  }

  /**
   * notifikasi upsert
   */
  export type notifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * The filter to search for the notifikasi to update in case it exists.
     */
    where: notifikasiWhereUniqueInput
    /**
     * In case the notifikasi found by the `where` argument doesn't exist, create a new notifikasi with this data.
     */
    create: XOR<notifikasiCreateInput, notifikasiUncheckedCreateInput>
    /**
     * In case the notifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notifikasiUpdateInput, notifikasiUncheckedUpdateInput>
  }

  /**
   * notifikasi delete
   */
  export type notifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter which notifikasi to delete.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi deleteMany
   */
  export type notifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifikasis to delete
     */
    where?: notifikasiWhereInput
    /**
     * Limit how many notifikasis to delete.
     */
    limit?: number
  }

  /**
   * notifikasi without action
   */
  export type notifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
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
    avatar: 'avatar',
    signature: 'signature',
    pembimbingId: 'pembimbingId',
    koPromotorId: 'koPromotorId',
    promotorId: 'promotorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


  export const KegiatanScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    lokasi: 'lokasi',
    tanggalMulai: 'tanggalMulai',
    tanggalSelesai: 'tanggalSelesai',
    catatan: 'catatan',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pengajuId: 'pengajuId',
    mata_kuliahId: 'mata_kuliahId'
  };

  export type KegiatanScalarFieldEnum = (typeof KegiatanScalarFieldEnum)[keyof typeof KegiatanScalarFieldEnum]


  export const LogbookScalarFieldEnum: {
    id: 'id',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    penggunaId: 'penggunaId'
  };

  export type LogbookScalarFieldEnum = (typeof LogbookScalarFieldEnum)[keyof typeof LogbookScalarFieldEnum]


  export const ProfilScalarFieldEnum: {
    id: 'id',
    judulDisertasi: 'judulDisertasi',
    angkatan: 'angkatan',
    tempatTanggalLahir: 'tempatTanggalLahir',
    alamat: 'alamat',
    alamatKeluarga: 'alamatKeluarga',
    tahunLulus: 'tahunLulus',
    mulaiMasukPendidikan: 'mulaiMasukPendidikan',
    pekerjaan: 'pekerjaan',
    nomorTelpon: 'nomorTelpon',
    email: 'email',
    penggunaId: 'penggunaId'
  };

  export type ProfilScalarFieldEnum = (typeof ProfilScalarFieldEnum)[keyof typeof ProfilScalarFieldEnum]


  export const Permohonan_bimbinganScalarFieldEnum: {
    id: 'id',
    statusPermohonan: 'statusPermohonan',
    kalimatPermohonan: 'kalimatPermohonan',
    alasanDitolak: 'alasanDitolak',
    mahasiswaId: 'mahasiswaId',
    dosenId: 'dosenId',
    createdAt: 'createdAt'
  };

  export type Permohonan_bimbinganScalarFieldEnum = (typeof Permohonan_bimbinganScalarFieldEnum)[keyof typeof Permohonan_bimbinganScalarFieldEnum]


  export const Mata_kuliahScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    semester: 'semester',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Mata_kuliahScalarFieldEnum = (typeof Mata_kuliahScalarFieldEnum)[keyof typeof Mata_kuliahScalarFieldEnum]


  export const Lampiran_kegiatanScalarFieldEnum: {
    id: 'id',
    path: 'path',
    ext: 'ext',
    kegiatanId: 'kegiatanId'
  };

  export type Lampiran_kegiatanScalarFieldEnum = (typeof Lampiran_kegiatanScalarFieldEnum)[keyof typeof Lampiran_kegiatanScalarFieldEnum]


  export const NotifikasiScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    pesan: 'pesan',
    dibaca: 'dibaca',
    createdAt: 'createdAt',
    penggunaId: 'penggunaId'
  };

  export type NotifikasiScalarFieldEnum = (typeof NotifikasiScalarFieldEnum)[keyof typeof NotifikasiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const penggunaOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    signature: 'signature',
    pembimbingId: 'pembimbingId',
    koPromotorId: 'koPromotorId',
    promotorId: 'promotorId'
  };

  export type penggunaOrderByRelevanceFieldEnum = (typeof penggunaOrderByRelevanceFieldEnum)[keyof typeof penggunaOrderByRelevanceFieldEnum]


  export const kegiatanOrderByRelevanceFieldEnum: {
    judul: 'judul',
    lokasi: 'lokasi',
    catatan: 'catatan',
    pengajuId: 'pengajuId'
  };

  export type kegiatanOrderByRelevanceFieldEnum = (typeof kegiatanOrderByRelevanceFieldEnum)[keyof typeof kegiatanOrderByRelevanceFieldEnum]


  export const logbookOrderByRelevanceFieldEnum: {
    path: 'path',
    penggunaId: 'penggunaId'
  };

  export type logbookOrderByRelevanceFieldEnum = (typeof logbookOrderByRelevanceFieldEnum)[keyof typeof logbookOrderByRelevanceFieldEnum]


  export const profilOrderByRelevanceFieldEnum: {
    judulDisertasi: 'judulDisertasi',
    angkatan: 'angkatan',
    tempatTanggalLahir: 'tempatTanggalLahir',
    alamat: 'alamat',
    alamatKeluarga: 'alamatKeluarga',
    tahunLulus: 'tahunLulus',
    pekerjaan: 'pekerjaan',
    nomorTelpon: 'nomorTelpon',
    email: 'email',
    penggunaId: 'penggunaId'
  };

  export type profilOrderByRelevanceFieldEnum = (typeof profilOrderByRelevanceFieldEnum)[keyof typeof profilOrderByRelevanceFieldEnum]


  export const permohonan_bimbinganOrderByRelevanceFieldEnum: {
    kalimatPermohonan: 'kalimatPermohonan',
    alasanDitolak: 'alasanDitolak',
    mahasiswaId: 'mahasiswaId',
    dosenId: 'dosenId'
  };

  export type permohonan_bimbinganOrderByRelevanceFieldEnum = (typeof permohonan_bimbinganOrderByRelevanceFieldEnum)[keyof typeof permohonan_bimbinganOrderByRelevanceFieldEnum]


  export const mata_kuliahOrderByRelevanceFieldEnum: {
    judul: 'judul'
  };

  export type mata_kuliahOrderByRelevanceFieldEnum = (typeof mata_kuliahOrderByRelevanceFieldEnum)[keyof typeof mata_kuliahOrderByRelevanceFieldEnum]


  export const lampiran_kegiatanOrderByRelevanceFieldEnum: {
    path: 'path',
    ext: 'ext'
  };

  export type lampiran_kegiatanOrderByRelevanceFieldEnum = (typeof lampiran_kegiatanOrderByRelevanceFieldEnum)[keyof typeof lampiran_kegiatanOrderByRelevanceFieldEnum]


  export const notifikasiOrderByRelevanceFieldEnum: {
    judul: 'judul',
    pesan: 'pesan',
    penggunaId: 'penggunaId'
  };

  export type notifikasiOrderByRelevanceFieldEnum = (typeof notifikasiOrderByRelevanceFieldEnum)[keyof typeof notifikasiOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'pengguna_peran'
   */
  export type Enumpengguna_peranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pengguna_peran'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'kegiatan_status'
   */
  export type Enumkegiatan_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'kegiatan_status'>
    


  /**
   * Reference to a field of type 'status_permohonan'
   */
  export type Enumstatus_permohonanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_permohonan'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    peran?: Enumpengguna_peranFilter<"pengguna"> | $Enums.pengguna_peran
    avatar?: StringNullableFilter<"pengguna"> | string | null
    signature?: StringNullableFilter<"pengguna"> | string | null
    pembimbingId?: StringNullableFilter<"pengguna"> | string | null
    koPromotorId?: StringNullableFilter<"pengguna"> | string | null
    promotorId?: StringNullableFilter<"pengguna"> | string | null
    createdAt?: DateTimeFilter<"pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"pengguna"> | Date | string
    profil?: XOR<ProfilNullableScalarRelationFilter, profilWhereInput> | null
    bimbingan?: PenggunaListRelationFilter
    pembimbing?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    koPromotorMahasiswa?: PenggunaListRelationFilter
    koPromotor?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    promotorMahasiswa?: PenggunaListRelationFilter
    promotor?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    notifikasi?: NotifikasiListRelationFilter
    kegiatan?: KegiatanListRelationFilter
    logbook?: XOR<LogbookNullableScalarRelationFilter, logbookWhereInput> | null
    permohonan_bimbingan_dibuat?: Permohonan_bimbinganListRelationFilter
    permohonan_bimbingan_diterima?: Permohonan_bimbinganListRelationFilter
  }

  export type penggunaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    pembimbingId?: SortOrderInput | SortOrder
    koPromotorId?: SortOrderInput | SortOrder
    promotorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profil?: profilOrderByWithRelationInput
    bimbingan?: penggunaOrderByRelationAggregateInput
    pembimbing?: penggunaOrderByWithRelationInput
    koPromotorMahasiswa?: penggunaOrderByRelationAggregateInput
    koPromotor?: penggunaOrderByWithRelationInput
    promotorMahasiswa?: penggunaOrderByRelationAggregateInput
    promotor?: penggunaOrderByWithRelationInput
    notifikasi?: notifikasiOrderByRelationAggregateInput
    kegiatan?: kegiatanOrderByRelationAggregateInput
    logbook?: logbookOrderByWithRelationInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganOrderByRelationAggregateInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganOrderByRelationAggregateInput
    _relevance?: penggunaOrderByRelevanceInput
  }

  export type penggunaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    username?: string
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    password?: StringFilter<"pengguna"> | string
    peran?: Enumpengguna_peranFilter<"pengguna"> | $Enums.pengguna_peran
    avatar?: StringNullableFilter<"pengguna"> | string | null
    signature?: StringNullableFilter<"pengguna"> | string | null
    pembimbingId?: StringNullableFilter<"pengguna"> | string | null
    koPromotorId?: StringNullableFilter<"pengguna"> | string | null
    promotorId?: StringNullableFilter<"pengguna"> | string | null
    createdAt?: DateTimeFilter<"pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"pengguna"> | Date | string
    profil?: XOR<ProfilNullableScalarRelationFilter, profilWhereInput> | null
    bimbingan?: PenggunaListRelationFilter
    pembimbing?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    koPromotorMahasiswa?: PenggunaListRelationFilter
    koPromotor?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    promotorMahasiswa?: PenggunaListRelationFilter
    promotor?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    notifikasi?: NotifikasiListRelationFilter
    kegiatan?: KegiatanListRelationFilter
    logbook?: XOR<LogbookNullableScalarRelationFilter, logbookWhereInput> | null
    permohonan_bimbingan_dibuat?: Permohonan_bimbinganListRelationFilter
    permohonan_bimbingan_diterima?: Permohonan_bimbinganListRelationFilter
  }, "id" | "nama" | "username">

  export type penggunaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    pembimbingId?: SortOrderInput | SortOrder
    koPromotorId?: SortOrderInput | SortOrder
    promotorId?: SortOrderInput | SortOrder
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
    peran?: Enumpengguna_peranWithAggregatesFilter<"pengguna"> | $Enums.pengguna_peran
    avatar?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    signature?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    pembimbingId?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    koPromotorId?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    promotorId?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"pengguna"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"pengguna"> | Date | string
  }

  export type kegiatanWhereInput = {
    AND?: kegiatanWhereInput | kegiatanWhereInput[]
    OR?: kegiatanWhereInput[]
    NOT?: kegiatanWhereInput | kegiatanWhereInput[]
    id?: IntFilter<"kegiatan"> | number
    judul?: StringFilter<"kegiatan"> | string
    lokasi?: StringNullableFilter<"kegiatan"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    tanggalSelesai?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    catatan?: StringNullableFilter<"kegiatan"> | string | null
    status?: Enumkegiatan_statusFilter<"kegiatan"> | $Enums.kegiatan_status
    createdAt?: DateTimeFilter<"kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"kegiatan"> | Date | string
    pengajuId?: StringNullableFilter<"kegiatan"> | string | null
    mata_kuliahId?: IntNullableFilter<"kegiatan"> | number | null
    lampiran?: Lampiran_kegiatanListRelationFilter
    pengaju?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    mata_kuliah?: XOR<Mata_kuliahNullableScalarRelationFilter, mata_kuliahWhereInput> | null
  }

  export type kegiatanOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengajuId?: SortOrderInput | SortOrder
    mata_kuliahId?: SortOrderInput | SortOrder
    lampiran?: lampiran_kegiatanOrderByRelationAggregateInput
    pengaju?: penggunaOrderByWithRelationInput
    mata_kuliah?: mata_kuliahOrderByWithRelationInput
    _relevance?: kegiatanOrderByRelevanceInput
  }

  export type kegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: kegiatanWhereInput | kegiatanWhereInput[]
    OR?: kegiatanWhereInput[]
    NOT?: kegiatanWhereInput | kegiatanWhereInput[]
    judul?: StringFilter<"kegiatan"> | string
    lokasi?: StringNullableFilter<"kegiatan"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    tanggalSelesai?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    catatan?: StringNullableFilter<"kegiatan"> | string | null
    status?: Enumkegiatan_statusFilter<"kegiatan"> | $Enums.kegiatan_status
    createdAt?: DateTimeFilter<"kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"kegiatan"> | Date | string
    pengajuId?: StringNullableFilter<"kegiatan"> | string | null
    mata_kuliahId?: IntNullableFilter<"kegiatan"> | number | null
    lampiran?: Lampiran_kegiatanListRelationFilter
    pengaju?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    mata_kuliah?: XOR<Mata_kuliahNullableScalarRelationFilter, mata_kuliahWhereInput> | null
  }, "id">

  export type kegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengajuId?: SortOrderInput | SortOrder
    mata_kuliahId?: SortOrderInput | SortOrder
    _count?: kegiatanCountOrderByAggregateInput
    _avg?: kegiatanAvgOrderByAggregateInput
    _max?: kegiatanMaxOrderByAggregateInput
    _min?: kegiatanMinOrderByAggregateInput
    _sum?: kegiatanSumOrderByAggregateInput
  }

  export type kegiatanScalarWhereWithAggregatesInput = {
    AND?: kegiatanScalarWhereWithAggregatesInput | kegiatanScalarWhereWithAggregatesInput[]
    OR?: kegiatanScalarWhereWithAggregatesInput[]
    NOT?: kegiatanScalarWhereWithAggregatesInput | kegiatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"kegiatan"> | number
    judul?: StringWithAggregatesFilter<"kegiatan"> | string
    lokasi?: StringNullableWithAggregatesFilter<"kegiatan"> | string | null
    tanggalMulai?: DateTimeNullableWithAggregatesFilter<"kegiatan"> | Date | string | null
    tanggalSelesai?: DateTimeNullableWithAggregatesFilter<"kegiatan"> | Date | string | null
    catatan?: StringNullableWithAggregatesFilter<"kegiatan"> | string | null
    status?: Enumkegiatan_statusWithAggregatesFilter<"kegiatan"> | $Enums.kegiatan_status
    createdAt?: DateTimeWithAggregatesFilter<"kegiatan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"kegiatan"> | Date | string
    pengajuId?: StringNullableWithAggregatesFilter<"kegiatan"> | string | null
    mata_kuliahId?: IntNullableWithAggregatesFilter<"kegiatan"> | number | null
  }

  export type logbookWhereInput = {
    AND?: logbookWhereInput | logbookWhereInput[]
    OR?: logbookWhereInput[]
    NOT?: logbookWhereInput | logbookWhereInput[]
    id?: IntFilter<"logbook"> | number
    path?: StringFilter<"logbook"> | string
    createdAt?: DateTimeFilter<"logbook"> | Date | string
    updatedAt?: DateTimeFilter<"logbook"> | Date | string
    penggunaId?: StringNullableFilter<"logbook"> | string | null
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }

  export type logbookOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrderInput | SortOrder
    pengguna?: penggunaOrderByWithRelationInput
    _relevance?: logbookOrderByRelevanceInput
  }

  export type logbookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    penggunaId?: string
    AND?: logbookWhereInput | logbookWhereInput[]
    OR?: logbookWhereInput[]
    NOT?: logbookWhereInput | logbookWhereInput[]
    path?: StringFilter<"logbook"> | string
    createdAt?: DateTimeFilter<"logbook"> | Date | string
    updatedAt?: DateTimeFilter<"logbook"> | Date | string
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }, "id" | "penggunaId">

  export type logbookOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrderInput | SortOrder
    _count?: logbookCountOrderByAggregateInput
    _avg?: logbookAvgOrderByAggregateInput
    _max?: logbookMaxOrderByAggregateInput
    _min?: logbookMinOrderByAggregateInput
    _sum?: logbookSumOrderByAggregateInput
  }

  export type logbookScalarWhereWithAggregatesInput = {
    AND?: logbookScalarWhereWithAggregatesInput | logbookScalarWhereWithAggregatesInput[]
    OR?: logbookScalarWhereWithAggregatesInput[]
    NOT?: logbookScalarWhereWithAggregatesInput | logbookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"logbook"> | number
    path?: StringWithAggregatesFilter<"logbook"> | string
    createdAt?: DateTimeWithAggregatesFilter<"logbook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"logbook"> | Date | string
    penggunaId?: StringNullableWithAggregatesFilter<"logbook"> | string | null
  }

  export type profilWhereInput = {
    AND?: profilWhereInput | profilWhereInput[]
    OR?: profilWhereInput[]
    NOT?: profilWhereInput | profilWhereInput[]
    id?: IntFilter<"profil"> | number
    judulDisertasi?: StringNullableFilter<"profil"> | string | null
    angkatan?: StringNullableFilter<"profil"> | string | null
    tempatTanggalLahir?: StringNullableFilter<"profil"> | string | null
    alamat?: StringNullableFilter<"profil"> | string | null
    alamatKeluarga?: StringNullableFilter<"profil"> | string | null
    tahunLulus?: StringNullableFilter<"profil"> | string | null
    mulaiMasukPendidikan?: DateTimeNullableFilter<"profil"> | Date | string | null
    pekerjaan?: StringNullableFilter<"profil"> | string | null
    nomorTelpon?: StringNullableFilter<"profil"> | string | null
    email?: StringNullableFilter<"profil"> | string | null
    penggunaId?: StringFilter<"profil"> | string
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
  }

  export type profilOrderByWithRelationInput = {
    id?: SortOrder
    judulDisertasi?: SortOrderInput | SortOrder
    angkatan?: SortOrderInput | SortOrder
    tempatTanggalLahir?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    alamatKeluarga?: SortOrderInput | SortOrder
    tahunLulus?: SortOrderInput | SortOrder
    mulaiMasukPendidikan?: SortOrderInput | SortOrder
    pekerjaan?: SortOrderInput | SortOrder
    nomorTelpon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    penggunaId?: SortOrder
    pengguna?: penggunaOrderByWithRelationInput
    _relevance?: profilOrderByRelevanceInput
  }

  export type profilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    penggunaId?: string
    AND?: profilWhereInput | profilWhereInput[]
    OR?: profilWhereInput[]
    NOT?: profilWhereInput | profilWhereInput[]
    judulDisertasi?: StringNullableFilter<"profil"> | string | null
    angkatan?: StringNullableFilter<"profil"> | string | null
    tempatTanggalLahir?: StringNullableFilter<"profil"> | string | null
    alamat?: StringNullableFilter<"profil"> | string | null
    alamatKeluarga?: StringNullableFilter<"profil"> | string | null
    tahunLulus?: StringNullableFilter<"profil"> | string | null
    mulaiMasukPendidikan?: DateTimeNullableFilter<"profil"> | Date | string | null
    pekerjaan?: StringNullableFilter<"profil"> | string | null
    nomorTelpon?: StringNullableFilter<"profil"> | string | null
    email?: StringNullableFilter<"profil"> | string | null
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
  }, "id" | "penggunaId">

  export type profilOrderByWithAggregationInput = {
    id?: SortOrder
    judulDisertasi?: SortOrderInput | SortOrder
    angkatan?: SortOrderInput | SortOrder
    tempatTanggalLahir?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    alamatKeluarga?: SortOrderInput | SortOrder
    tahunLulus?: SortOrderInput | SortOrder
    mulaiMasukPendidikan?: SortOrderInput | SortOrder
    pekerjaan?: SortOrderInput | SortOrder
    nomorTelpon?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    penggunaId?: SortOrder
    _count?: profilCountOrderByAggregateInput
    _avg?: profilAvgOrderByAggregateInput
    _max?: profilMaxOrderByAggregateInput
    _min?: profilMinOrderByAggregateInput
    _sum?: profilSumOrderByAggregateInput
  }

  export type profilScalarWhereWithAggregatesInput = {
    AND?: profilScalarWhereWithAggregatesInput | profilScalarWhereWithAggregatesInput[]
    OR?: profilScalarWhereWithAggregatesInput[]
    NOT?: profilScalarWhereWithAggregatesInput | profilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profil"> | number
    judulDisertasi?: StringNullableWithAggregatesFilter<"profil"> | string | null
    angkatan?: StringNullableWithAggregatesFilter<"profil"> | string | null
    tempatTanggalLahir?: StringNullableWithAggregatesFilter<"profil"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"profil"> | string | null
    alamatKeluarga?: StringNullableWithAggregatesFilter<"profil"> | string | null
    tahunLulus?: StringNullableWithAggregatesFilter<"profil"> | string | null
    mulaiMasukPendidikan?: DateTimeNullableWithAggregatesFilter<"profil"> | Date | string | null
    pekerjaan?: StringNullableWithAggregatesFilter<"profil"> | string | null
    nomorTelpon?: StringNullableWithAggregatesFilter<"profil"> | string | null
    email?: StringNullableWithAggregatesFilter<"profil"> | string | null
    penggunaId?: StringWithAggregatesFilter<"profil"> | string
  }

  export type permohonan_bimbinganWhereInput = {
    AND?: permohonan_bimbinganWhereInput | permohonan_bimbinganWhereInput[]
    OR?: permohonan_bimbinganWhereInput[]
    NOT?: permohonan_bimbinganWhereInput | permohonan_bimbinganWhereInput[]
    id?: IntFilter<"permohonan_bimbingan"> | number
    statusPermohonan?: Enumstatus_permohonanFilter<"permohonan_bimbingan"> | $Enums.status_permohonan
    kalimatPermohonan?: StringFilter<"permohonan_bimbingan"> | string
    alasanDitolak?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    mahasiswaId?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    dosenId?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    createdAt?: DateTimeFilter<"permohonan_bimbingan"> | Date | string
    mahasiswa?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    dosen?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }

  export type permohonan_bimbinganOrderByWithRelationInput = {
    id?: SortOrder
    statusPermohonan?: SortOrder
    kalimatPermohonan?: SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    mahasiswaId?: SortOrderInput | SortOrder
    dosenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mahasiswa?: penggunaOrderByWithRelationInput
    dosen?: penggunaOrderByWithRelationInput
    _relevance?: permohonan_bimbinganOrderByRelevanceInput
  }

  export type permohonan_bimbinganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: permohonan_bimbinganWhereInput | permohonan_bimbinganWhereInput[]
    OR?: permohonan_bimbinganWhereInput[]
    NOT?: permohonan_bimbinganWhereInput | permohonan_bimbinganWhereInput[]
    statusPermohonan?: Enumstatus_permohonanFilter<"permohonan_bimbingan"> | $Enums.status_permohonan
    kalimatPermohonan?: StringFilter<"permohonan_bimbingan"> | string
    alasanDitolak?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    mahasiswaId?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    dosenId?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    createdAt?: DateTimeFilter<"permohonan_bimbingan"> | Date | string
    mahasiswa?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    dosen?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }, "id">

  export type permohonan_bimbinganOrderByWithAggregationInput = {
    id?: SortOrder
    statusPermohonan?: SortOrder
    kalimatPermohonan?: SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    mahasiswaId?: SortOrderInput | SortOrder
    dosenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: permohonan_bimbinganCountOrderByAggregateInput
    _avg?: permohonan_bimbinganAvgOrderByAggregateInput
    _max?: permohonan_bimbinganMaxOrderByAggregateInput
    _min?: permohonan_bimbinganMinOrderByAggregateInput
    _sum?: permohonan_bimbinganSumOrderByAggregateInput
  }

  export type permohonan_bimbinganScalarWhereWithAggregatesInput = {
    AND?: permohonan_bimbinganScalarWhereWithAggregatesInput | permohonan_bimbinganScalarWhereWithAggregatesInput[]
    OR?: permohonan_bimbinganScalarWhereWithAggregatesInput[]
    NOT?: permohonan_bimbinganScalarWhereWithAggregatesInput | permohonan_bimbinganScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"permohonan_bimbingan"> | number
    statusPermohonan?: Enumstatus_permohonanWithAggregatesFilter<"permohonan_bimbingan"> | $Enums.status_permohonan
    kalimatPermohonan?: StringWithAggregatesFilter<"permohonan_bimbingan"> | string
    alasanDitolak?: StringNullableWithAggregatesFilter<"permohonan_bimbingan"> | string | null
    mahasiswaId?: StringNullableWithAggregatesFilter<"permohonan_bimbingan"> | string | null
    dosenId?: StringNullableWithAggregatesFilter<"permohonan_bimbingan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"permohonan_bimbingan"> | Date | string
  }

  export type mata_kuliahWhereInput = {
    AND?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    OR?: mata_kuliahWhereInput[]
    NOT?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    id?: IntFilter<"mata_kuliah"> | number
    judul?: StringFilter<"mata_kuliah"> | string
    semester?: IntFilter<"mata_kuliah"> | number
    createdAt?: DateTimeFilter<"mata_kuliah"> | Date | string
    updatedAt?: DateTimeFilter<"mata_kuliah"> | Date | string
    kegiatan?: KegiatanListRelationFilter
  }

  export type mata_kuliahOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kegiatan?: kegiatanOrderByRelationAggregateInput
    _relevance?: mata_kuliahOrderByRelevanceInput
  }

  export type mata_kuliahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    judul?: string
    AND?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    OR?: mata_kuliahWhereInput[]
    NOT?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    semester?: IntFilter<"mata_kuliah"> | number
    createdAt?: DateTimeFilter<"mata_kuliah"> | Date | string
    updatedAt?: DateTimeFilter<"mata_kuliah"> | Date | string
    kegiatan?: KegiatanListRelationFilter
  }, "id" | "judul">

  export type mata_kuliahOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: mata_kuliahCountOrderByAggregateInput
    _avg?: mata_kuliahAvgOrderByAggregateInput
    _max?: mata_kuliahMaxOrderByAggregateInput
    _min?: mata_kuliahMinOrderByAggregateInput
    _sum?: mata_kuliahSumOrderByAggregateInput
  }

  export type mata_kuliahScalarWhereWithAggregatesInput = {
    AND?: mata_kuliahScalarWhereWithAggregatesInput | mata_kuliahScalarWhereWithAggregatesInput[]
    OR?: mata_kuliahScalarWhereWithAggregatesInput[]
    NOT?: mata_kuliahScalarWhereWithAggregatesInput | mata_kuliahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mata_kuliah"> | number
    judul?: StringWithAggregatesFilter<"mata_kuliah"> | string
    semester?: IntWithAggregatesFilter<"mata_kuliah"> | number
    createdAt?: DateTimeWithAggregatesFilter<"mata_kuliah"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"mata_kuliah"> | Date | string
  }

  export type lampiran_kegiatanWhereInput = {
    AND?: lampiran_kegiatanWhereInput | lampiran_kegiatanWhereInput[]
    OR?: lampiran_kegiatanWhereInput[]
    NOT?: lampiran_kegiatanWhereInput | lampiran_kegiatanWhereInput[]
    id?: IntFilter<"lampiran_kegiatan"> | number
    path?: StringFilter<"lampiran_kegiatan"> | string
    ext?: StringFilter<"lampiran_kegiatan"> | string
    kegiatanId?: IntNullableFilter<"lampiran_kegiatan"> | number | null
    kegiatan?: XOR<KegiatanNullableScalarRelationFilter, kegiatanWhereInput> | null
  }

  export type lampiran_kegiatanOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    ext?: SortOrder
    kegiatanId?: SortOrderInput | SortOrder
    kegiatan?: kegiatanOrderByWithRelationInput
    _relevance?: lampiran_kegiatanOrderByRelevanceInput
  }

  export type lampiran_kegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lampiran_kegiatanWhereInput | lampiran_kegiatanWhereInput[]
    OR?: lampiran_kegiatanWhereInput[]
    NOT?: lampiran_kegiatanWhereInput | lampiran_kegiatanWhereInput[]
    path?: StringFilter<"lampiran_kegiatan"> | string
    ext?: StringFilter<"lampiran_kegiatan"> | string
    kegiatanId?: IntNullableFilter<"lampiran_kegiatan"> | number | null
    kegiatan?: XOR<KegiatanNullableScalarRelationFilter, kegiatanWhereInput> | null
  }, "id">

  export type lampiran_kegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    ext?: SortOrder
    kegiatanId?: SortOrderInput | SortOrder
    _count?: lampiran_kegiatanCountOrderByAggregateInput
    _avg?: lampiran_kegiatanAvgOrderByAggregateInput
    _max?: lampiran_kegiatanMaxOrderByAggregateInput
    _min?: lampiran_kegiatanMinOrderByAggregateInput
    _sum?: lampiran_kegiatanSumOrderByAggregateInput
  }

  export type lampiran_kegiatanScalarWhereWithAggregatesInput = {
    AND?: lampiran_kegiatanScalarWhereWithAggregatesInput | lampiran_kegiatanScalarWhereWithAggregatesInput[]
    OR?: lampiran_kegiatanScalarWhereWithAggregatesInput[]
    NOT?: lampiran_kegiatanScalarWhereWithAggregatesInput | lampiran_kegiatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lampiran_kegiatan"> | number
    path?: StringWithAggregatesFilter<"lampiran_kegiatan"> | string
    ext?: StringWithAggregatesFilter<"lampiran_kegiatan"> | string
    kegiatanId?: IntNullableWithAggregatesFilter<"lampiran_kegiatan"> | number | null
  }

  export type notifikasiWhereInput = {
    AND?: notifikasiWhereInput | notifikasiWhereInput[]
    OR?: notifikasiWhereInput[]
    NOT?: notifikasiWhereInput | notifikasiWhereInput[]
    id?: IntFilter<"notifikasi"> | number
    judul?: StringFilter<"notifikasi"> | string
    pesan?: StringFilter<"notifikasi"> | string
    dibaca?: BoolFilter<"notifikasi"> | boolean
    createdAt?: DateTimeFilter<"notifikasi"> | Date | string
    penggunaId?: StringFilter<"notifikasi"> | string
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
  }

  export type notifikasiOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    dibaca?: SortOrder
    createdAt?: SortOrder
    penggunaId?: SortOrder
    pengguna?: penggunaOrderByWithRelationInput
    _relevance?: notifikasiOrderByRelevanceInput
  }

  export type notifikasiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notifikasiWhereInput | notifikasiWhereInput[]
    OR?: notifikasiWhereInput[]
    NOT?: notifikasiWhereInput | notifikasiWhereInput[]
    judul?: StringFilter<"notifikasi"> | string
    pesan?: StringFilter<"notifikasi"> | string
    dibaca?: BoolFilter<"notifikasi"> | boolean
    createdAt?: DateTimeFilter<"notifikasi"> | Date | string
    penggunaId?: StringFilter<"notifikasi"> | string
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
  }, "id">

  export type notifikasiOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    dibaca?: SortOrder
    createdAt?: SortOrder
    penggunaId?: SortOrder
    _count?: notifikasiCountOrderByAggregateInput
    _avg?: notifikasiAvgOrderByAggregateInput
    _max?: notifikasiMaxOrderByAggregateInput
    _min?: notifikasiMinOrderByAggregateInput
    _sum?: notifikasiSumOrderByAggregateInput
  }

  export type notifikasiScalarWhereWithAggregatesInput = {
    AND?: notifikasiScalarWhereWithAggregatesInput | notifikasiScalarWhereWithAggregatesInput[]
    OR?: notifikasiScalarWhereWithAggregatesInput[]
    NOT?: notifikasiScalarWhereWithAggregatesInput | notifikasiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifikasi"> | number
    judul?: StringWithAggregatesFilter<"notifikasi"> | string
    pesan?: StringWithAggregatesFilter<"notifikasi"> | string
    dibaca?: BoolWithAggregatesFilter<"notifikasi"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"notifikasi"> | Date | string
    penggunaId?: StringWithAggregatesFilter<"notifikasi"> | string
  }

  export type penggunaCreateInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaCreateManyInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penggunaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penggunaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kegiatanCreateInput = {
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    lampiran?: lampiran_kegiatanCreateNestedManyWithoutKegiatanInput
    pengaju?: penggunaCreateNestedOneWithoutKegiatanInput
    mata_kuliah?: mata_kuliahCreateNestedOneWithoutKegiatanInput
  }

  export type kegiatanUncheckedCreateInput = {
    id?: number
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    pengajuId?: string | null
    mata_kuliahId?: number | null
    lampiran?: lampiran_kegiatanUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type kegiatanUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lampiran?: lampiran_kegiatanUpdateManyWithoutKegiatanNestedInput
    pengaju?: penggunaUpdateOneWithoutKegiatanNestedInput
    mata_kuliah?: mata_kuliahUpdateOneWithoutKegiatanNestedInput
  }

  export type kegiatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengajuId?: NullableStringFieldUpdateOperationsInput | string | null
    mata_kuliahId?: NullableIntFieldUpdateOperationsInput | number | null
    lampiran?: lampiran_kegiatanUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type kegiatanCreateManyInput = {
    id?: number
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    pengajuId?: string | null
    mata_kuliahId?: number | null
  }

  export type kegiatanUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kegiatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengajuId?: NullableStringFieldUpdateOperationsInput | string | null
    mata_kuliahId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type logbookCreateInput = {
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pengguna?: penggunaCreateNestedOneWithoutLogbookInput
  }

  export type logbookUncheckedCreateInput = {
    id?: number
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penggunaId?: string | null
  }

  export type logbookUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: penggunaUpdateOneWithoutLogbookNestedInput
  }

  export type logbookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logbookCreateManyInput = {
    id?: number
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    penggunaId?: string | null
  }

  export type logbookUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logbookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilCreateInput = {
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    pengguna: penggunaCreateNestedOneWithoutProfilInput
  }

  export type profilUncheckedCreateInput = {
    id?: number
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    penggunaId: string
  }

  export type profilUpdateInput = {
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pengguna?: penggunaUpdateOneRequiredWithoutProfilNestedInput
  }

  export type profilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    penggunaId?: StringFieldUpdateOperationsInput | string
  }

  export type profilCreateManyInput = {
    id?: number
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
    penggunaId: string
  }

  export type profilUpdateManyMutationInput = {
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    penggunaId?: StringFieldUpdateOperationsInput | string
  }

  export type permohonan_bimbinganCreateInput = {
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    mahasiswa?: penggunaCreateNestedOneWithoutPermohonan_bimbingan_dibuatInput
    dosen?: penggunaCreateNestedOneWithoutPermohonan_bimbingan_diterimaInput
  }

  export type permohonan_bimbinganUncheckedCreateInput = {
    id?: number
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    mahasiswaId?: string | null
    dosenId?: string | null
    createdAt?: Date | string
  }

  export type permohonan_bimbinganUpdateInput = {
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: penggunaUpdateOneWithoutPermohonan_bimbingan_dibuatNestedInput
    dosen?: penggunaUpdateOneWithoutPermohonan_bimbingan_diterimaNestedInput
  }

  export type permohonan_bimbinganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: NullableStringFieldUpdateOperationsInput | string | null
    dosenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permohonan_bimbinganCreateManyInput = {
    id?: number
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    mahasiswaId?: string | null
    dosenId?: string | null
    createdAt?: Date | string
  }

  export type permohonan_bimbinganUpdateManyMutationInput = {
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permohonan_bimbinganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: NullableStringFieldUpdateOperationsInput | string | null
    dosenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mata_kuliahCreateInput = {
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: kegiatanCreateNestedManyWithoutMata_kuliahInput
  }

  export type mata_kuliahUncheckedCreateInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutMata_kuliahInput
  }

  export type mata_kuliahUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: kegiatanUpdateManyWithoutMata_kuliahNestedInput
  }

  export type mata_kuliahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kegiatan?: kegiatanUncheckedUpdateManyWithoutMata_kuliahNestedInput
  }

  export type mata_kuliahCreateManyInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mata_kuliahUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mata_kuliahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lampiran_kegiatanCreateInput = {
    path: string
    ext: string
    kegiatan?: kegiatanCreateNestedOneWithoutLampiranInput
  }

  export type lampiran_kegiatanUncheckedCreateInput = {
    id?: number
    path: string
    ext: string
    kegiatanId?: number | null
  }

  export type lampiran_kegiatanUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    kegiatan?: kegiatanUpdateOneWithoutLampiranNestedInput
  }

  export type lampiran_kegiatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    kegiatanId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type lampiran_kegiatanCreateManyInput = {
    id?: number
    path: string
    ext: string
    kegiatanId?: number | null
  }

  export type lampiran_kegiatanUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
  }

  export type lampiran_kegiatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    kegiatanId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notifikasiCreateInput = {
    judul: string
    pesan: string
    dibaca?: boolean
    createdAt?: Date | string
    pengguna: penggunaCreateNestedOneWithoutNotifikasiInput
  }

  export type notifikasiUncheckedCreateInput = {
    id?: number
    judul: string
    pesan: string
    dibaca?: boolean
    createdAt?: Date | string
    penggunaId: string
  }

  export type notifikasiUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    dibaca?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: penggunaUpdateOneRequiredWithoutNotifikasiNestedInput
  }

  export type notifikasiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    dibaca?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: StringFieldUpdateOperationsInput | string
  }

  export type notifikasiCreateManyInput = {
    id?: number
    judul: string
    pesan: string
    dibaca?: boolean
    createdAt?: Date | string
    penggunaId: string
  }

  export type notifikasiUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    dibaca?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notifikasiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    dibaca?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penggunaId?: StringFieldUpdateOperationsInput | string
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

  export type Enumpengguna_peranFilter<$PrismaModel = never> = {
    equals?: $Enums.pengguna_peran | Enumpengguna_peranFieldRefInput<$PrismaModel>
    in?: $Enums.pengguna_peran[]
    notIn?: $Enums.pengguna_peran[]
    not?: NestedEnumpengguna_peranFilter<$PrismaModel> | $Enums.pengguna_peran
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ProfilNullableScalarRelationFilter = {
    is?: profilWhereInput | null
    isNot?: profilWhereInput | null
  }

  export type PenggunaListRelationFilter = {
    every?: penggunaWhereInput
    some?: penggunaWhereInput
    none?: penggunaWhereInput
  }

  export type PenggunaNullableScalarRelationFilter = {
    is?: penggunaWhereInput | null
    isNot?: penggunaWhereInput | null
  }

  export type NotifikasiListRelationFilter = {
    every?: notifikasiWhereInput
    some?: notifikasiWhereInput
    none?: notifikasiWhereInput
  }

  export type KegiatanListRelationFilter = {
    every?: kegiatanWhereInput
    some?: kegiatanWhereInput
    none?: kegiatanWhereInput
  }

  export type LogbookNullableScalarRelationFilter = {
    is?: logbookWhereInput | null
    isNot?: logbookWhereInput | null
  }

  export type Permohonan_bimbinganListRelationFilter = {
    every?: permohonan_bimbinganWhereInput
    some?: permohonan_bimbinganWhereInput
    none?: permohonan_bimbinganWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type penggunaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notifikasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kegiatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type permohonan_bimbinganOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    avatar?: SortOrder
    signature?: SortOrder
    pembimbingId?: SortOrder
    koPromotorId?: SortOrder
    promotorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type penggunaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrder
    signature?: SortOrder
    pembimbingId?: SortOrder
    koPromotorId?: SortOrder
    promotorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type penggunaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    peran?: SortOrder
    avatar?: SortOrder
    signature?: SortOrder
    pembimbingId?: SortOrder
    koPromotorId?: SortOrder
    promotorId?: SortOrder
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

  export type Enumpengguna_peranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pengguna_peran | Enumpengguna_peranFieldRefInput<$PrismaModel>
    in?: $Enums.pengguna_peran[]
    notIn?: $Enums.pengguna_peran[]
    not?: NestedEnumpengguna_peranWithAggregatesFilter<$PrismaModel> | $Enums.pengguna_peran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpengguna_peranFilter<$PrismaModel>
    _max?: NestedEnumpengguna_peranFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumkegiatan_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.kegiatan_status | Enumkegiatan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.kegiatan_status[]
    notIn?: $Enums.kegiatan_status[]
    not?: NestedEnumkegiatan_statusFilter<$PrismaModel> | $Enums.kegiatan_status
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Lampiran_kegiatanListRelationFilter = {
    every?: lampiran_kegiatanWhereInput
    some?: lampiran_kegiatanWhereInput
    none?: lampiran_kegiatanWhereInput
  }

  export type Mata_kuliahNullableScalarRelationFilter = {
    is?: mata_kuliahWhereInput | null
    isNot?: mata_kuliahWhereInput | null
  }

  export type lampiran_kegiatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kegiatanOrderByRelevanceInput = {
    fields: kegiatanOrderByRelevanceFieldEnum | kegiatanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type kegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    lokasi?: SortOrder
    tanggalMulai?: SortOrder
    tanggalSelesai?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengajuId?: SortOrder
    mata_kuliahId?: SortOrder
  }

  export type kegiatanAvgOrderByAggregateInput = {
    id?: SortOrder
    mata_kuliahId?: SortOrder
  }

  export type kegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    lokasi?: SortOrder
    tanggalMulai?: SortOrder
    tanggalSelesai?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengajuId?: SortOrder
    mata_kuliahId?: SortOrder
  }

  export type kegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    lokasi?: SortOrder
    tanggalMulai?: SortOrder
    tanggalSelesai?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pengajuId?: SortOrder
    mata_kuliahId?: SortOrder
  }

  export type kegiatanSumOrderByAggregateInput = {
    id?: SortOrder
    mata_kuliahId?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumkegiatan_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kegiatan_status | Enumkegiatan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.kegiatan_status[]
    notIn?: $Enums.kegiatan_status[]
    not?: NestedEnumkegiatan_statusWithAggregatesFilter<$PrismaModel> | $Enums.kegiatan_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkegiatan_statusFilter<$PrismaModel>
    _max?: NestedEnumkegiatan_statusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type logbookOrderByRelevanceInput = {
    fields: logbookOrderByRelevanceFieldEnum | logbookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type logbookCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type logbookAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type logbookMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type logbookMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type logbookSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PenggunaScalarRelationFilter = {
    is?: penggunaWhereInput
    isNot?: penggunaWhereInput
  }

  export type profilOrderByRelevanceInput = {
    fields: profilOrderByRelevanceFieldEnum | profilOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type profilCountOrderByAggregateInput = {
    id?: SortOrder
    judulDisertasi?: SortOrder
    angkatan?: SortOrder
    tempatTanggalLahir?: SortOrder
    alamat?: SortOrder
    alamatKeluarga?: SortOrder
    tahunLulus?: SortOrder
    mulaiMasukPendidikan?: SortOrder
    pekerjaan?: SortOrder
    nomorTelpon?: SortOrder
    email?: SortOrder
    penggunaId?: SortOrder
  }

  export type profilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type profilMaxOrderByAggregateInput = {
    id?: SortOrder
    judulDisertasi?: SortOrder
    angkatan?: SortOrder
    tempatTanggalLahir?: SortOrder
    alamat?: SortOrder
    alamatKeluarga?: SortOrder
    tahunLulus?: SortOrder
    mulaiMasukPendidikan?: SortOrder
    pekerjaan?: SortOrder
    nomorTelpon?: SortOrder
    email?: SortOrder
    penggunaId?: SortOrder
  }

  export type profilMinOrderByAggregateInput = {
    id?: SortOrder
    judulDisertasi?: SortOrder
    angkatan?: SortOrder
    tempatTanggalLahir?: SortOrder
    alamat?: SortOrder
    alamatKeluarga?: SortOrder
    tahunLulus?: SortOrder
    mulaiMasukPendidikan?: SortOrder
    pekerjaan?: SortOrder
    nomorTelpon?: SortOrder
    email?: SortOrder
    penggunaId?: SortOrder
  }

  export type profilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumstatus_permohonanFilter<$PrismaModel = never> = {
    equals?: $Enums.status_permohonan | Enumstatus_permohonanFieldRefInput<$PrismaModel>
    in?: $Enums.status_permohonan[]
    notIn?: $Enums.status_permohonan[]
    not?: NestedEnumstatus_permohonanFilter<$PrismaModel> | $Enums.status_permohonan
  }

  export type permohonan_bimbinganOrderByRelevanceInput = {
    fields: permohonan_bimbinganOrderByRelevanceFieldEnum | permohonan_bimbinganOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type permohonan_bimbinganCountOrderByAggregateInput = {
    id?: SortOrder
    statusPermohonan?: SortOrder
    kalimatPermohonan?: SortOrder
    alasanDitolak?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
  }

  export type permohonan_bimbinganAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type permohonan_bimbinganMaxOrderByAggregateInput = {
    id?: SortOrder
    statusPermohonan?: SortOrder
    kalimatPermohonan?: SortOrder
    alasanDitolak?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
  }

  export type permohonan_bimbinganMinOrderByAggregateInput = {
    id?: SortOrder
    statusPermohonan?: SortOrder
    kalimatPermohonan?: SortOrder
    alasanDitolak?: SortOrder
    mahasiswaId?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
  }

  export type permohonan_bimbinganSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumstatus_permohonanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_permohonan | Enumstatus_permohonanFieldRefInput<$PrismaModel>
    in?: $Enums.status_permohonan[]
    notIn?: $Enums.status_permohonan[]
    not?: NestedEnumstatus_permohonanWithAggregatesFilter<$PrismaModel> | $Enums.status_permohonan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_permohonanFilter<$PrismaModel>
    _max?: NestedEnumstatus_permohonanFilter<$PrismaModel>
  }

  export type mata_kuliahOrderByRelevanceInput = {
    fields: mata_kuliahOrderByRelevanceFieldEnum | mata_kuliahOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mata_kuliahCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type mata_kuliahAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
  }

  export type mata_kuliahMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type mata_kuliahMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type mata_kuliahSumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
  }

  export type KegiatanNullableScalarRelationFilter = {
    is?: kegiatanWhereInput | null
    isNot?: kegiatanWhereInput | null
  }

  export type lampiran_kegiatanOrderByRelevanceInput = {
    fields: lampiran_kegiatanOrderByRelevanceFieldEnum | lampiran_kegiatanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lampiran_kegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    ext?: SortOrder
    kegiatanId?: SortOrder
  }

  export type lampiran_kegiatanAvgOrderByAggregateInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
  }

  export type lampiran_kegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    ext?: SortOrder
    kegiatanId?: SortOrder
  }

  export type lampiran_kegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    ext?: SortOrder
    kegiatanId?: SortOrder
  }

  export type lampiran_kegiatanSumOrderByAggregateInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type notifikasiOrderByRelevanceInput = {
    fields: notifikasiOrderByRelevanceFieldEnum | notifikasiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notifikasiCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    dibaca?: SortOrder
    createdAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type notifikasiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type notifikasiMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    dibaca?: SortOrder
    createdAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type notifikasiMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    pesan?: SortOrder
    dibaca?: SortOrder
    createdAt?: SortOrder
    penggunaId?: SortOrder
  }

  export type notifikasiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type profilCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<profilCreateWithoutPenggunaInput, profilUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: profilCreateOrConnectWithoutPenggunaInput
    connect?: profilWhereUniqueInput
  }

  export type penggunaCreateNestedManyWithoutPembimbingInput = {
    create?: XOR<penggunaCreateWithoutPembimbingInput, penggunaUncheckedCreateWithoutPembimbingInput> | penggunaCreateWithoutPembimbingInput[] | penggunaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPembimbingInput | penggunaCreateOrConnectWithoutPembimbingInput[]
    createMany?: penggunaCreateManyPembimbingInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type penggunaCreateNestedOneWithoutBimbinganInput = {
    create?: XOR<penggunaCreateWithoutBimbinganInput, penggunaUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutBimbinganInput
    connect?: penggunaWhereUniqueInput
  }

  export type penggunaCreateNestedManyWithoutKoPromotorInput = {
    create?: XOR<penggunaCreateWithoutKoPromotorInput, penggunaUncheckedCreateWithoutKoPromotorInput> | penggunaCreateWithoutKoPromotorInput[] | penggunaUncheckedCreateWithoutKoPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutKoPromotorInput | penggunaCreateOrConnectWithoutKoPromotorInput[]
    createMany?: penggunaCreateManyKoPromotorInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput = {
    create?: XOR<penggunaCreateWithoutKoPromotorMahasiswaInput, penggunaUncheckedCreateWithoutKoPromotorMahasiswaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutKoPromotorMahasiswaInput
    connect?: penggunaWhereUniqueInput
  }

  export type penggunaCreateNestedManyWithoutPromotorInput = {
    create?: XOR<penggunaCreateWithoutPromotorInput, penggunaUncheckedCreateWithoutPromotorInput> | penggunaCreateWithoutPromotorInput[] | penggunaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPromotorInput | penggunaCreateOrConnectWithoutPromotorInput[]
    createMany?: penggunaCreateManyPromotorInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type penggunaCreateNestedOneWithoutPromotorMahasiswaInput = {
    create?: XOR<penggunaCreateWithoutPromotorMahasiswaInput, penggunaUncheckedCreateWithoutPromotorMahasiswaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPromotorMahasiswaInput
    connect?: penggunaWhereUniqueInput
  }

  export type notifikasiCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<notifikasiCreateWithoutPenggunaInput, notifikasiUncheckedCreateWithoutPenggunaInput> | notifikasiCreateWithoutPenggunaInput[] | notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutPenggunaInput | notifikasiCreateOrConnectWithoutPenggunaInput[]
    createMany?: notifikasiCreateManyPenggunaInputEnvelope
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
  }

  export type kegiatanCreateNestedManyWithoutPengajuInput = {
    create?: XOR<kegiatanCreateWithoutPengajuInput, kegiatanUncheckedCreateWithoutPengajuInput> | kegiatanCreateWithoutPengajuInput[] | kegiatanUncheckedCreateWithoutPengajuInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutPengajuInput | kegiatanCreateOrConnectWithoutPengajuInput[]
    createMany?: kegiatanCreateManyPengajuInputEnvelope
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
  }

  export type logbookCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<logbookCreateWithoutPenggunaInput, logbookUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: logbookCreateOrConnectWithoutPenggunaInput
    connect?: logbookWhereUniqueInput
  }

  export type permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutMahasiswaInput, permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput> | permohonan_bimbinganCreateWithoutMahasiswaInput[] | permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput | permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: permohonan_bimbinganCreateManyMahasiswaInputEnvelope
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
  }

  export type permohonan_bimbinganCreateNestedManyWithoutDosenInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutDosenInput, permohonan_bimbinganUncheckedCreateWithoutDosenInput> | permohonan_bimbinganCreateWithoutDosenInput[] | permohonan_bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutDosenInput | permohonan_bimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: permohonan_bimbinganCreateManyDosenInputEnvelope
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
  }

  export type profilUncheckedCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<profilCreateWithoutPenggunaInput, profilUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: profilCreateOrConnectWithoutPenggunaInput
    connect?: profilWhereUniqueInput
  }

  export type penggunaUncheckedCreateNestedManyWithoutPembimbingInput = {
    create?: XOR<penggunaCreateWithoutPembimbingInput, penggunaUncheckedCreateWithoutPembimbingInput> | penggunaCreateWithoutPembimbingInput[] | penggunaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPembimbingInput | penggunaCreateOrConnectWithoutPembimbingInput[]
    createMany?: penggunaCreateManyPembimbingInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type penggunaUncheckedCreateNestedManyWithoutKoPromotorInput = {
    create?: XOR<penggunaCreateWithoutKoPromotorInput, penggunaUncheckedCreateWithoutKoPromotorInput> | penggunaCreateWithoutKoPromotorInput[] | penggunaUncheckedCreateWithoutKoPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutKoPromotorInput | penggunaCreateOrConnectWithoutKoPromotorInput[]
    createMany?: penggunaCreateManyKoPromotorInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type penggunaUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<penggunaCreateWithoutPromotorInput, penggunaUncheckedCreateWithoutPromotorInput> | penggunaCreateWithoutPromotorInput[] | penggunaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPromotorInput | penggunaCreateOrConnectWithoutPromotorInput[]
    createMany?: penggunaCreateManyPromotorInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type notifikasiUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<notifikasiCreateWithoutPenggunaInput, notifikasiUncheckedCreateWithoutPenggunaInput> | notifikasiCreateWithoutPenggunaInput[] | notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutPenggunaInput | notifikasiCreateOrConnectWithoutPenggunaInput[]
    createMany?: notifikasiCreateManyPenggunaInputEnvelope
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
  }

  export type kegiatanUncheckedCreateNestedManyWithoutPengajuInput = {
    create?: XOR<kegiatanCreateWithoutPengajuInput, kegiatanUncheckedCreateWithoutPengajuInput> | kegiatanCreateWithoutPengajuInput[] | kegiatanUncheckedCreateWithoutPengajuInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutPengajuInput | kegiatanCreateOrConnectWithoutPengajuInput[]
    createMany?: kegiatanCreateManyPengajuInputEnvelope
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
  }

  export type logbookUncheckedCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<logbookCreateWithoutPenggunaInput, logbookUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: logbookCreateOrConnectWithoutPenggunaInput
    connect?: logbookWhereUniqueInput
  }

  export type permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutMahasiswaInput, permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput> | permohonan_bimbinganCreateWithoutMahasiswaInput[] | permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput | permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: permohonan_bimbinganCreateManyMahasiswaInputEnvelope
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
  }

  export type permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutDosenInput, permohonan_bimbinganUncheckedCreateWithoutDosenInput> | permohonan_bimbinganCreateWithoutDosenInput[] | permohonan_bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutDosenInput | permohonan_bimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: permohonan_bimbinganCreateManyDosenInputEnvelope
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumpengguna_peranFieldUpdateOperationsInput = {
    set?: $Enums.pengguna_peran
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type profilUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<profilCreateWithoutPenggunaInput, profilUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: profilCreateOrConnectWithoutPenggunaInput
    upsert?: profilUpsertWithoutPenggunaInput
    disconnect?: profilWhereInput | boolean
    delete?: profilWhereInput | boolean
    connect?: profilWhereUniqueInput
    update?: XOR<XOR<profilUpdateToOneWithWhereWithoutPenggunaInput, profilUpdateWithoutPenggunaInput>, profilUncheckedUpdateWithoutPenggunaInput>
  }

  export type penggunaUpdateManyWithoutPembimbingNestedInput = {
    create?: XOR<penggunaCreateWithoutPembimbingInput, penggunaUncheckedCreateWithoutPembimbingInput> | penggunaCreateWithoutPembimbingInput[] | penggunaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPembimbingInput | penggunaCreateOrConnectWithoutPembimbingInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutPembimbingInput | penggunaUpsertWithWhereUniqueWithoutPembimbingInput[]
    createMany?: penggunaCreateManyPembimbingInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutPembimbingInput | penggunaUpdateWithWhereUniqueWithoutPembimbingInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutPembimbingInput | penggunaUpdateManyWithWhereWithoutPembimbingInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type penggunaUpdateOneWithoutBimbinganNestedInput = {
    create?: XOR<penggunaCreateWithoutBimbinganInput, penggunaUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutBimbinganInput
    upsert?: penggunaUpsertWithoutBimbinganInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutBimbinganInput, penggunaUpdateWithoutBimbinganInput>, penggunaUncheckedUpdateWithoutBimbinganInput>
  }

  export type penggunaUpdateManyWithoutKoPromotorNestedInput = {
    create?: XOR<penggunaCreateWithoutKoPromotorInput, penggunaUncheckedCreateWithoutKoPromotorInput> | penggunaCreateWithoutKoPromotorInput[] | penggunaUncheckedCreateWithoutKoPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutKoPromotorInput | penggunaCreateOrConnectWithoutKoPromotorInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutKoPromotorInput | penggunaUpsertWithWhereUniqueWithoutKoPromotorInput[]
    createMany?: penggunaCreateManyKoPromotorInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutKoPromotorInput | penggunaUpdateWithWhereUniqueWithoutKoPromotorInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutKoPromotorInput | penggunaUpdateManyWithWhereWithoutKoPromotorInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput = {
    create?: XOR<penggunaCreateWithoutKoPromotorMahasiswaInput, penggunaUncheckedCreateWithoutKoPromotorMahasiswaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutKoPromotorMahasiswaInput
    upsert?: penggunaUpsertWithoutKoPromotorMahasiswaInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutKoPromotorMahasiswaInput, penggunaUpdateWithoutKoPromotorMahasiswaInput>, penggunaUncheckedUpdateWithoutKoPromotorMahasiswaInput>
  }

  export type penggunaUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<penggunaCreateWithoutPromotorInput, penggunaUncheckedCreateWithoutPromotorInput> | penggunaCreateWithoutPromotorInput[] | penggunaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPromotorInput | penggunaCreateOrConnectWithoutPromotorInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutPromotorInput | penggunaUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: penggunaCreateManyPromotorInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutPromotorInput | penggunaUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutPromotorInput | penggunaUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type penggunaUpdateOneWithoutPromotorMahasiswaNestedInput = {
    create?: XOR<penggunaCreateWithoutPromotorMahasiswaInput, penggunaUncheckedCreateWithoutPromotorMahasiswaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPromotorMahasiswaInput
    upsert?: penggunaUpsertWithoutPromotorMahasiswaInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutPromotorMahasiswaInput, penggunaUpdateWithoutPromotorMahasiswaInput>, penggunaUncheckedUpdateWithoutPromotorMahasiswaInput>
  }

  export type notifikasiUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<notifikasiCreateWithoutPenggunaInput, notifikasiUncheckedCreateWithoutPenggunaInput> | notifikasiCreateWithoutPenggunaInput[] | notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutPenggunaInput | notifikasiCreateOrConnectWithoutPenggunaInput[]
    upsert?: notifikasiUpsertWithWhereUniqueWithoutPenggunaInput | notifikasiUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: notifikasiCreateManyPenggunaInputEnvelope
    set?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    disconnect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    delete?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    update?: notifikasiUpdateWithWhereUniqueWithoutPenggunaInput | notifikasiUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: notifikasiUpdateManyWithWhereWithoutPenggunaInput | notifikasiUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
  }

  export type kegiatanUpdateManyWithoutPengajuNestedInput = {
    create?: XOR<kegiatanCreateWithoutPengajuInput, kegiatanUncheckedCreateWithoutPengajuInput> | kegiatanCreateWithoutPengajuInput[] | kegiatanUncheckedCreateWithoutPengajuInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutPengajuInput | kegiatanCreateOrConnectWithoutPengajuInput[]
    upsert?: kegiatanUpsertWithWhereUniqueWithoutPengajuInput | kegiatanUpsertWithWhereUniqueWithoutPengajuInput[]
    createMany?: kegiatanCreateManyPengajuInputEnvelope
    set?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    disconnect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    delete?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    update?: kegiatanUpdateWithWhereUniqueWithoutPengajuInput | kegiatanUpdateWithWhereUniqueWithoutPengajuInput[]
    updateMany?: kegiatanUpdateManyWithWhereWithoutPengajuInput | kegiatanUpdateManyWithWhereWithoutPengajuInput[]
    deleteMany?: kegiatanScalarWhereInput | kegiatanScalarWhereInput[]
  }

  export type logbookUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<logbookCreateWithoutPenggunaInput, logbookUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: logbookCreateOrConnectWithoutPenggunaInput
    upsert?: logbookUpsertWithoutPenggunaInput
    disconnect?: logbookWhereInput | boolean
    delete?: logbookWhereInput | boolean
    connect?: logbookWhereUniqueInput
    update?: XOR<XOR<logbookUpdateToOneWithWhereWithoutPenggunaInput, logbookUpdateWithoutPenggunaInput>, logbookUncheckedUpdateWithoutPenggunaInput>
  }

  export type permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutMahasiswaInput, permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput> | permohonan_bimbinganCreateWithoutMahasiswaInput[] | permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput | permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: permohonan_bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | permohonan_bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: permohonan_bimbinganCreateManyMahasiswaInputEnvelope
    set?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    disconnect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    delete?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    update?: permohonan_bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | permohonan_bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: permohonan_bimbinganUpdateManyWithWhereWithoutMahasiswaInput | permohonan_bimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: permohonan_bimbinganScalarWhereInput | permohonan_bimbinganScalarWhereInput[]
  }

  export type permohonan_bimbinganUpdateManyWithoutDosenNestedInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutDosenInput, permohonan_bimbinganUncheckedCreateWithoutDosenInput> | permohonan_bimbinganCreateWithoutDosenInput[] | permohonan_bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutDosenInput | permohonan_bimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: permohonan_bimbinganUpsertWithWhereUniqueWithoutDosenInput | permohonan_bimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: permohonan_bimbinganCreateManyDosenInputEnvelope
    set?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    disconnect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    delete?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    update?: permohonan_bimbinganUpdateWithWhereUniqueWithoutDosenInput | permohonan_bimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: permohonan_bimbinganUpdateManyWithWhereWithoutDosenInput | permohonan_bimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: permohonan_bimbinganScalarWhereInput | permohonan_bimbinganScalarWhereInput[]
  }

  export type profilUncheckedUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<profilCreateWithoutPenggunaInput, profilUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: profilCreateOrConnectWithoutPenggunaInput
    upsert?: profilUpsertWithoutPenggunaInput
    disconnect?: profilWhereInput | boolean
    delete?: profilWhereInput | boolean
    connect?: profilWhereUniqueInput
    update?: XOR<XOR<profilUpdateToOneWithWhereWithoutPenggunaInput, profilUpdateWithoutPenggunaInput>, profilUncheckedUpdateWithoutPenggunaInput>
  }

  export type penggunaUncheckedUpdateManyWithoutPembimbingNestedInput = {
    create?: XOR<penggunaCreateWithoutPembimbingInput, penggunaUncheckedCreateWithoutPembimbingInput> | penggunaCreateWithoutPembimbingInput[] | penggunaUncheckedCreateWithoutPembimbingInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPembimbingInput | penggunaCreateOrConnectWithoutPembimbingInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutPembimbingInput | penggunaUpsertWithWhereUniqueWithoutPembimbingInput[]
    createMany?: penggunaCreateManyPembimbingInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutPembimbingInput | penggunaUpdateWithWhereUniqueWithoutPembimbingInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutPembimbingInput | penggunaUpdateManyWithWhereWithoutPembimbingInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput = {
    create?: XOR<penggunaCreateWithoutKoPromotorInput, penggunaUncheckedCreateWithoutKoPromotorInput> | penggunaCreateWithoutKoPromotorInput[] | penggunaUncheckedCreateWithoutKoPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutKoPromotorInput | penggunaCreateOrConnectWithoutKoPromotorInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutKoPromotorInput | penggunaUpsertWithWhereUniqueWithoutKoPromotorInput[]
    createMany?: penggunaCreateManyKoPromotorInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutKoPromotorInput | penggunaUpdateWithWhereUniqueWithoutKoPromotorInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutKoPromotorInput | penggunaUpdateManyWithWhereWithoutKoPromotorInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type penggunaUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<penggunaCreateWithoutPromotorInput, penggunaUncheckedCreateWithoutPromotorInput> | penggunaCreateWithoutPromotorInput[] | penggunaUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPromotorInput | penggunaCreateOrConnectWithoutPromotorInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutPromotorInput | penggunaUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: penggunaCreateManyPromotorInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutPromotorInput | penggunaUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutPromotorInput | penggunaUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<notifikasiCreateWithoutPenggunaInput, notifikasiUncheckedCreateWithoutPenggunaInput> | notifikasiCreateWithoutPenggunaInput[] | notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutPenggunaInput | notifikasiCreateOrConnectWithoutPenggunaInput[]
    upsert?: notifikasiUpsertWithWhereUniqueWithoutPenggunaInput | notifikasiUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: notifikasiCreateManyPenggunaInputEnvelope
    set?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    disconnect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    delete?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    update?: notifikasiUpdateWithWhereUniqueWithoutPenggunaInput | notifikasiUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: notifikasiUpdateManyWithWhereWithoutPenggunaInput | notifikasiUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
  }

  export type kegiatanUncheckedUpdateManyWithoutPengajuNestedInput = {
    create?: XOR<kegiatanCreateWithoutPengajuInput, kegiatanUncheckedCreateWithoutPengajuInput> | kegiatanCreateWithoutPengajuInput[] | kegiatanUncheckedCreateWithoutPengajuInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutPengajuInput | kegiatanCreateOrConnectWithoutPengajuInput[]
    upsert?: kegiatanUpsertWithWhereUniqueWithoutPengajuInput | kegiatanUpsertWithWhereUniqueWithoutPengajuInput[]
    createMany?: kegiatanCreateManyPengajuInputEnvelope
    set?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    disconnect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    delete?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    update?: kegiatanUpdateWithWhereUniqueWithoutPengajuInput | kegiatanUpdateWithWhereUniqueWithoutPengajuInput[]
    updateMany?: kegiatanUpdateManyWithWhereWithoutPengajuInput | kegiatanUpdateManyWithWhereWithoutPengajuInput[]
    deleteMany?: kegiatanScalarWhereInput | kegiatanScalarWhereInput[]
  }

  export type logbookUncheckedUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<logbookCreateWithoutPenggunaInput, logbookUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: logbookCreateOrConnectWithoutPenggunaInput
    upsert?: logbookUpsertWithoutPenggunaInput
    disconnect?: logbookWhereInput | boolean
    delete?: logbookWhereInput | boolean
    connect?: logbookWhereUniqueInput
    update?: XOR<XOR<logbookUpdateToOneWithWhereWithoutPenggunaInput, logbookUpdateWithoutPenggunaInput>, logbookUncheckedUpdateWithoutPenggunaInput>
  }

  export type permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutMahasiswaInput, permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput> | permohonan_bimbinganCreateWithoutMahasiswaInput[] | permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput | permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: permohonan_bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | permohonan_bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: permohonan_bimbinganCreateManyMahasiswaInputEnvelope
    set?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    disconnect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    delete?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    update?: permohonan_bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | permohonan_bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: permohonan_bimbinganUpdateManyWithWhereWithoutMahasiswaInput | permohonan_bimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: permohonan_bimbinganScalarWhereInput | permohonan_bimbinganScalarWhereInput[]
  }

  export type permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<permohonan_bimbinganCreateWithoutDosenInput, permohonan_bimbinganUncheckedCreateWithoutDosenInput> | permohonan_bimbinganCreateWithoutDosenInput[] | permohonan_bimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: permohonan_bimbinganCreateOrConnectWithoutDosenInput | permohonan_bimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: permohonan_bimbinganUpsertWithWhereUniqueWithoutDosenInput | permohonan_bimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: permohonan_bimbinganCreateManyDosenInputEnvelope
    set?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    disconnect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    delete?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    connect?: permohonan_bimbinganWhereUniqueInput | permohonan_bimbinganWhereUniqueInput[]
    update?: permohonan_bimbinganUpdateWithWhereUniqueWithoutDosenInput | permohonan_bimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: permohonan_bimbinganUpdateManyWithWhereWithoutDosenInput | permohonan_bimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: permohonan_bimbinganScalarWhereInput | permohonan_bimbinganScalarWhereInput[]
  }

  export type lampiran_kegiatanCreateNestedManyWithoutKegiatanInput = {
    create?: XOR<lampiran_kegiatanCreateWithoutKegiatanInput, lampiran_kegiatanUncheckedCreateWithoutKegiatanInput> | lampiran_kegiatanCreateWithoutKegiatanInput[] | lampiran_kegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: lampiran_kegiatanCreateOrConnectWithoutKegiatanInput | lampiran_kegiatanCreateOrConnectWithoutKegiatanInput[]
    createMany?: lampiran_kegiatanCreateManyKegiatanInputEnvelope
    connect?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
  }

  export type penggunaCreateNestedOneWithoutKegiatanInput = {
    create?: XOR<penggunaCreateWithoutKegiatanInput, penggunaUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutKegiatanInput
    connect?: penggunaWhereUniqueInput
  }

  export type mata_kuliahCreateNestedOneWithoutKegiatanInput = {
    create?: XOR<mata_kuliahCreateWithoutKegiatanInput, mata_kuliahUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: mata_kuliahCreateOrConnectWithoutKegiatanInput
    connect?: mata_kuliahWhereUniqueInput
  }

  export type lampiran_kegiatanUncheckedCreateNestedManyWithoutKegiatanInput = {
    create?: XOR<lampiran_kegiatanCreateWithoutKegiatanInput, lampiran_kegiatanUncheckedCreateWithoutKegiatanInput> | lampiran_kegiatanCreateWithoutKegiatanInput[] | lampiran_kegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: lampiran_kegiatanCreateOrConnectWithoutKegiatanInput | lampiran_kegiatanCreateOrConnectWithoutKegiatanInput[]
    createMany?: lampiran_kegiatanCreateManyKegiatanInputEnvelope
    connect?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumkegiatan_statusFieldUpdateOperationsInput = {
    set?: $Enums.kegiatan_status
  }

  export type lampiran_kegiatanUpdateManyWithoutKegiatanNestedInput = {
    create?: XOR<lampiran_kegiatanCreateWithoutKegiatanInput, lampiran_kegiatanUncheckedCreateWithoutKegiatanInput> | lampiran_kegiatanCreateWithoutKegiatanInput[] | lampiran_kegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: lampiran_kegiatanCreateOrConnectWithoutKegiatanInput | lampiran_kegiatanCreateOrConnectWithoutKegiatanInput[]
    upsert?: lampiran_kegiatanUpsertWithWhereUniqueWithoutKegiatanInput | lampiran_kegiatanUpsertWithWhereUniqueWithoutKegiatanInput[]
    createMany?: lampiran_kegiatanCreateManyKegiatanInputEnvelope
    set?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    disconnect?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    delete?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    connect?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    update?: lampiran_kegiatanUpdateWithWhereUniqueWithoutKegiatanInput | lampiran_kegiatanUpdateWithWhereUniqueWithoutKegiatanInput[]
    updateMany?: lampiran_kegiatanUpdateManyWithWhereWithoutKegiatanInput | lampiran_kegiatanUpdateManyWithWhereWithoutKegiatanInput[]
    deleteMany?: lampiran_kegiatanScalarWhereInput | lampiran_kegiatanScalarWhereInput[]
  }

  export type penggunaUpdateOneWithoutKegiatanNestedInput = {
    create?: XOR<penggunaCreateWithoutKegiatanInput, penggunaUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutKegiatanInput
    upsert?: penggunaUpsertWithoutKegiatanInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutKegiatanInput, penggunaUpdateWithoutKegiatanInput>, penggunaUncheckedUpdateWithoutKegiatanInput>
  }

  export type mata_kuliahUpdateOneWithoutKegiatanNestedInput = {
    create?: XOR<mata_kuliahCreateWithoutKegiatanInput, mata_kuliahUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: mata_kuliahCreateOrConnectWithoutKegiatanInput
    upsert?: mata_kuliahUpsertWithoutKegiatanInput
    disconnect?: mata_kuliahWhereInput | boolean
    delete?: mata_kuliahWhereInput | boolean
    connect?: mata_kuliahWhereUniqueInput
    update?: XOR<XOR<mata_kuliahUpdateToOneWithWhereWithoutKegiatanInput, mata_kuliahUpdateWithoutKegiatanInput>, mata_kuliahUncheckedUpdateWithoutKegiatanInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type lampiran_kegiatanUncheckedUpdateManyWithoutKegiatanNestedInput = {
    create?: XOR<lampiran_kegiatanCreateWithoutKegiatanInput, lampiran_kegiatanUncheckedCreateWithoutKegiatanInput> | lampiran_kegiatanCreateWithoutKegiatanInput[] | lampiran_kegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: lampiran_kegiatanCreateOrConnectWithoutKegiatanInput | lampiran_kegiatanCreateOrConnectWithoutKegiatanInput[]
    upsert?: lampiran_kegiatanUpsertWithWhereUniqueWithoutKegiatanInput | lampiran_kegiatanUpsertWithWhereUniqueWithoutKegiatanInput[]
    createMany?: lampiran_kegiatanCreateManyKegiatanInputEnvelope
    set?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    disconnect?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    delete?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    connect?: lampiran_kegiatanWhereUniqueInput | lampiran_kegiatanWhereUniqueInput[]
    update?: lampiran_kegiatanUpdateWithWhereUniqueWithoutKegiatanInput | lampiran_kegiatanUpdateWithWhereUniqueWithoutKegiatanInput[]
    updateMany?: lampiran_kegiatanUpdateManyWithWhereWithoutKegiatanInput | lampiran_kegiatanUpdateManyWithWhereWithoutKegiatanInput[]
    deleteMany?: lampiran_kegiatanScalarWhereInput | lampiran_kegiatanScalarWhereInput[]
  }

  export type penggunaCreateNestedOneWithoutLogbookInput = {
    create?: XOR<penggunaCreateWithoutLogbookInput, penggunaUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutLogbookInput
    connect?: penggunaWhereUniqueInput
  }

  export type penggunaUpdateOneWithoutLogbookNestedInput = {
    create?: XOR<penggunaCreateWithoutLogbookInput, penggunaUncheckedCreateWithoutLogbookInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutLogbookInput
    upsert?: penggunaUpsertWithoutLogbookInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutLogbookInput, penggunaUpdateWithoutLogbookInput>, penggunaUncheckedUpdateWithoutLogbookInput>
  }

  export type penggunaCreateNestedOneWithoutProfilInput = {
    create?: XOR<penggunaCreateWithoutProfilInput, penggunaUncheckedCreateWithoutProfilInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutProfilInput
    connect?: penggunaWhereUniqueInput
  }

  export type penggunaUpdateOneRequiredWithoutProfilNestedInput = {
    create?: XOR<penggunaCreateWithoutProfilInput, penggunaUncheckedCreateWithoutProfilInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutProfilInput
    upsert?: penggunaUpsertWithoutProfilInput
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutProfilInput, penggunaUpdateWithoutProfilInput>, penggunaUncheckedUpdateWithoutProfilInput>
  }

  export type penggunaCreateNestedOneWithoutPermohonan_bimbingan_dibuatInput = {
    create?: XOR<penggunaCreateWithoutPermohonan_bimbingan_dibuatInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_dibuatInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPermohonan_bimbingan_dibuatInput
    connect?: penggunaWhereUniqueInput
  }

  export type penggunaCreateNestedOneWithoutPermohonan_bimbingan_diterimaInput = {
    create?: XOR<penggunaCreateWithoutPermohonan_bimbingan_diterimaInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_diterimaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPermohonan_bimbingan_diterimaInput
    connect?: penggunaWhereUniqueInput
  }

  export type Enumstatus_permohonanFieldUpdateOperationsInput = {
    set?: $Enums.status_permohonan
  }

  export type penggunaUpdateOneWithoutPermohonan_bimbingan_dibuatNestedInput = {
    create?: XOR<penggunaCreateWithoutPermohonan_bimbingan_dibuatInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_dibuatInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPermohonan_bimbingan_dibuatInput
    upsert?: penggunaUpsertWithoutPermohonan_bimbingan_dibuatInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutPermohonan_bimbingan_dibuatInput, penggunaUpdateWithoutPermohonan_bimbingan_dibuatInput>, penggunaUncheckedUpdateWithoutPermohonan_bimbingan_dibuatInput>
  }

  export type penggunaUpdateOneWithoutPermohonan_bimbingan_diterimaNestedInput = {
    create?: XOR<penggunaCreateWithoutPermohonan_bimbingan_diterimaInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_diterimaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPermohonan_bimbingan_diterimaInput
    upsert?: penggunaUpsertWithoutPermohonan_bimbingan_diterimaInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutPermohonan_bimbingan_diterimaInput, penggunaUpdateWithoutPermohonan_bimbingan_diterimaInput>, penggunaUncheckedUpdateWithoutPermohonan_bimbingan_diterimaInput>
  }

  export type kegiatanCreateNestedManyWithoutMata_kuliahInput = {
    create?: XOR<kegiatanCreateWithoutMata_kuliahInput, kegiatanUncheckedCreateWithoutMata_kuliahInput> | kegiatanCreateWithoutMata_kuliahInput[] | kegiatanUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutMata_kuliahInput | kegiatanCreateOrConnectWithoutMata_kuliahInput[]
    createMany?: kegiatanCreateManyMata_kuliahInputEnvelope
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
  }

  export type kegiatanUncheckedCreateNestedManyWithoutMata_kuliahInput = {
    create?: XOR<kegiatanCreateWithoutMata_kuliahInput, kegiatanUncheckedCreateWithoutMata_kuliahInput> | kegiatanCreateWithoutMata_kuliahInput[] | kegiatanUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutMata_kuliahInput | kegiatanCreateOrConnectWithoutMata_kuliahInput[]
    createMany?: kegiatanCreateManyMata_kuliahInputEnvelope
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
  }

  export type kegiatanUpdateManyWithoutMata_kuliahNestedInput = {
    create?: XOR<kegiatanCreateWithoutMata_kuliahInput, kegiatanUncheckedCreateWithoutMata_kuliahInput> | kegiatanCreateWithoutMata_kuliahInput[] | kegiatanUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutMata_kuliahInput | kegiatanCreateOrConnectWithoutMata_kuliahInput[]
    upsert?: kegiatanUpsertWithWhereUniqueWithoutMata_kuliahInput | kegiatanUpsertWithWhereUniqueWithoutMata_kuliahInput[]
    createMany?: kegiatanCreateManyMata_kuliahInputEnvelope
    set?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    disconnect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    delete?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    update?: kegiatanUpdateWithWhereUniqueWithoutMata_kuliahInput | kegiatanUpdateWithWhereUniqueWithoutMata_kuliahInput[]
    updateMany?: kegiatanUpdateManyWithWhereWithoutMata_kuliahInput | kegiatanUpdateManyWithWhereWithoutMata_kuliahInput[]
    deleteMany?: kegiatanScalarWhereInput | kegiatanScalarWhereInput[]
  }

  export type kegiatanUncheckedUpdateManyWithoutMata_kuliahNestedInput = {
    create?: XOR<kegiatanCreateWithoutMata_kuliahInput, kegiatanUncheckedCreateWithoutMata_kuliahInput> | kegiatanCreateWithoutMata_kuliahInput[] | kegiatanUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kegiatanCreateOrConnectWithoutMata_kuliahInput | kegiatanCreateOrConnectWithoutMata_kuliahInput[]
    upsert?: kegiatanUpsertWithWhereUniqueWithoutMata_kuliahInput | kegiatanUpsertWithWhereUniqueWithoutMata_kuliahInput[]
    createMany?: kegiatanCreateManyMata_kuliahInputEnvelope
    set?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    disconnect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    delete?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    connect?: kegiatanWhereUniqueInput | kegiatanWhereUniqueInput[]
    update?: kegiatanUpdateWithWhereUniqueWithoutMata_kuliahInput | kegiatanUpdateWithWhereUniqueWithoutMata_kuliahInput[]
    updateMany?: kegiatanUpdateManyWithWhereWithoutMata_kuliahInput | kegiatanUpdateManyWithWhereWithoutMata_kuliahInput[]
    deleteMany?: kegiatanScalarWhereInput | kegiatanScalarWhereInput[]
  }

  export type kegiatanCreateNestedOneWithoutLampiranInput = {
    create?: XOR<kegiatanCreateWithoutLampiranInput, kegiatanUncheckedCreateWithoutLampiranInput>
    connectOrCreate?: kegiatanCreateOrConnectWithoutLampiranInput
    connect?: kegiatanWhereUniqueInput
  }

  export type kegiatanUpdateOneWithoutLampiranNestedInput = {
    create?: XOR<kegiatanCreateWithoutLampiranInput, kegiatanUncheckedCreateWithoutLampiranInput>
    connectOrCreate?: kegiatanCreateOrConnectWithoutLampiranInput
    upsert?: kegiatanUpsertWithoutLampiranInput
    disconnect?: kegiatanWhereInput | boolean
    delete?: kegiatanWhereInput | boolean
    connect?: kegiatanWhereUniqueInput
    update?: XOR<XOR<kegiatanUpdateToOneWithWhereWithoutLampiranInput, kegiatanUpdateWithoutLampiranInput>, kegiatanUncheckedUpdateWithoutLampiranInput>
  }

  export type penggunaCreateNestedOneWithoutNotifikasiInput = {
    create?: XOR<penggunaCreateWithoutNotifikasiInput, penggunaUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutNotifikasiInput
    connect?: penggunaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type penggunaUpdateOneRequiredWithoutNotifikasiNestedInput = {
    create?: XOR<penggunaCreateWithoutNotifikasiInput, penggunaUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutNotifikasiInput
    upsert?: penggunaUpsertWithoutNotifikasiInput
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutNotifikasiInput, penggunaUpdateWithoutNotifikasiInput>, penggunaUncheckedUpdateWithoutNotifikasiInput>
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

  export type NestedEnumpengguna_peranFilter<$PrismaModel = never> = {
    equals?: $Enums.pengguna_peran | Enumpengguna_peranFieldRefInput<$PrismaModel>
    in?: $Enums.pengguna_peran[]
    notIn?: $Enums.pengguna_peran[]
    not?: NestedEnumpengguna_peranFilter<$PrismaModel> | $Enums.pengguna_peran
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumpengguna_peranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pengguna_peran | Enumpengguna_peranFieldRefInput<$PrismaModel>
    in?: $Enums.pengguna_peran[]
    notIn?: $Enums.pengguna_peran[]
    not?: NestedEnumpengguna_peranWithAggregatesFilter<$PrismaModel> | $Enums.pengguna_peran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpengguna_peranFilter<$PrismaModel>
    _max?: NestedEnumpengguna_peranFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumkegiatan_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.kegiatan_status | Enumkegiatan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.kegiatan_status[]
    notIn?: $Enums.kegiatan_status[]
    not?: NestedEnumkegiatan_statusFilter<$PrismaModel> | $Enums.kegiatan_status
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumkegiatan_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kegiatan_status | Enumkegiatan_statusFieldRefInput<$PrismaModel>
    in?: $Enums.kegiatan_status[]
    notIn?: $Enums.kegiatan_status[]
    not?: NestedEnumkegiatan_statusWithAggregatesFilter<$PrismaModel> | $Enums.kegiatan_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkegiatan_statusFilter<$PrismaModel>
    _max?: NestedEnumkegiatan_statusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumstatus_permohonanFilter<$PrismaModel = never> = {
    equals?: $Enums.status_permohonan | Enumstatus_permohonanFieldRefInput<$PrismaModel>
    in?: $Enums.status_permohonan[]
    notIn?: $Enums.status_permohonan[]
    not?: NestedEnumstatus_permohonanFilter<$PrismaModel> | $Enums.status_permohonan
  }

  export type NestedEnumstatus_permohonanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_permohonan | Enumstatus_permohonanFieldRefInput<$PrismaModel>
    in?: $Enums.status_permohonan[]
    notIn?: $Enums.status_permohonan[]
    not?: NestedEnumstatus_permohonanWithAggregatesFilter<$PrismaModel> | $Enums.status_permohonan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_permohonanFilter<$PrismaModel>
    _max?: NestedEnumstatus_permohonanFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type profilCreateWithoutPenggunaInput = {
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
  }

  export type profilUncheckedCreateWithoutPenggunaInput = {
    id?: number
    judulDisertasi?: string | null
    angkatan?: string | null
    tempatTanggalLahir?: string | null
    alamat?: string | null
    alamatKeluarga?: string | null
    tahunLulus?: string | null
    mulaiMasukPendidikan?: Date | string | null
    pekerjaan?: string | null
    nomorTelpon?: string | null
    email?: string | null
  }

  export type profilCreateOrConnectWithoutPenggunaInput = {
    where: profilWhereUniqueInput
    create: XOR<profilCreateWithoutPenggunaInput, profilUncheckedCreateWithoutPenggunaInput>
  }

  export type penggunaCreateWithoutPembimbingInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutPembimbingInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutPembimbingInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPembimbingInput, penggunaUncheckedCreateWithoutPembimbingInput>
  }

  export type penggunaCreateManyPembimbingInputEnvelope = {
    data: penggunaCreateManyPembimbingInput | penggunaCreateManyPembimbingInput[]
    skipDuplicates?: boolean
  }

  export type penggunaCreateWithoutBimbinganInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutBimbinganInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutBimbinganInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutBimbinganInput, penggunaUncheckedCreateWithoutBimbinganInput>
  }

  export type penggunaCreateWithoutKoPromotorInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutKoPromotorInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutKoPromotorInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutKoPromotorInput, penggunaUncheckedCreateWithoutKoPromotorInput>
  }

  export type penggunaCreateManyKoPromotorInputEnvelope = {
    data: penggunaCreateManyKoPromotorInput | penggunaCreateManyKoPromotorInput[]
    skipDuplicates?: boolean
  }

  export type penggunaCreateWithoutKoPromotorMahasiswaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutKoPromotorMahasiswaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutKoPromotorMahasiswaInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutKoPromotorMahasiswaInput, penggunaUncheckedCreateWithoutKoPromotorMahasiswaInput>
  }

  export type penggunaCreateWithoutPromotorInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutPromotorInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutPromotorInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPromotorInput, penggunaUncheckedCreateWithoutPromotorInput>
  }

  export type penggunaCreateManyPromotorInputEnvelope = {
    data: penggunaCreateManyPromotorInput | penggunaCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type penggunaCreateWithoutPromotorMahasiswaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutPromotorMahasiswaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutPromotorMahasiswaInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPromotorMahasiswaInput, penggunaUncheckedCreateWithoutPromotorMahasiswaInput>
  }

  export type notifikasiCreateWithoutPenggunaInput = {
    judul: string
    pesan: string
    dibaca?: boolean
    createdAt?: Date | string
  }

  export type notifikasiUncheckedCreateWithoutPenggunaInput = {
    id?: number
    judul: string
    pesan: string
    dibaca?: boolean
    createdAt?: Date | string
  }

  export type notifikasiCreateOrConnectWithoutPenggunaInput = {
    where: notifikasiWhereUniqueInput
    create: XOR<notifikasiCreateWithoutPenggunaInput, notifikasiUncheckedCreateWithoutPenggunaInput>
  }

  export type notifikasiCreateManyPenggunaInputEnvelope = {
    data: notifikasiCreateManyPenggunaInput | notifikasiCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type kegiatanCreateWithoutPengajuInput = {
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    lampiran?: lampiran_kegiatanCreateNestedManyWithoutKegiatanInput
    mata_kuliah?: mata_kuliahCreateNestedOneWithoutKegiatanInput
  }

  export type kegiatanUncheckedCreateWithoutPengajuInput = {
    id?: number
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    mata_kuliahId?: number | null
    lampiran?: lampiran_kegiatanUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type kegiatanCreateOrConnectWithoutPengajuInput = {
    where: kegiatanWhereUniqueInput
    create: XOR<kegiatanCreateWithoutPengajuInput, kegiatanUncheckedCreateWithoutPengajuInput>
  }

  export type kegiatanCreateManyPengajuInputEnvelope = {
    data: kegiatanCreateManyPengajuInput | kegiatanCreateManyPengajuInput[]
    skipDuplicates?: boolean
  }

  export type logbookCreateWithoutPenggunaInput = {
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type logbookUncheckedCreateWithoutPenggunaInput = {
    id?: number
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type logbookCreateOrConnectWithoutPenggunaInput = {
    where: logbookWhereUniqueInput
    create: XOR<logbookCreateWithoutPenggunaInput, logbookUncheckedCreateWithoutPenggunaInput>
  }

  export type permohonan_bimbinganCreateWithoutMahasiswaInput = {
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    dosen?: penggunaCreateNestedOneWithoutPermohonan_bimbingan_diterimaInput
  }

  export type permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput = {
    id?: number
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    dosenId?: string | null
    createdAt?: Date | string
  }

  export type permohonan_bimbinganCreateOrConnectWithoutMahasiswaInput = {
    where: permohonan_bimbinganWhereUniqueInput
    create: XOR<permohonan_bimbinganCreateWithoutMahasiswaInput, permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type permohonan_bimbinganCreateManyMahasiswaInputEnvelope = {
    data: permohonan_bimbinganCreateManyMahasiswaInput | permohonan_bimbinganCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type permohonan_bimbinganCreateWithoutDosenInput = {
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    createdAt?: Date | string
    mahasiswa?: penggunaCreateNestedOneWithoutPermohonan_bimbingan_dibuatInput
  }

  export type permohonan_bimbinganUncheckedCreateWithoutDosenInput = {
    id?: number
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    mahasiswaId?: string | null
    createdAt?: Date | string
  }

  export type permohonan_bimbinganCreateOrConnectWithoutDosenInput = {
    where: permohonan_bimbinganWhereUniqueInput
    create: XOR<permohonan_bimbinganCreateWithoutDosenInput, permohonan_bimbinganUncheckedCreateWithoutDosenInput>
  }

  export type permohonan_bimbinganCreateManyDosenInputEnvelope = {
    data: permohonan_bimbinganCreateManyDosenInput | permohonan_bimbinganCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type profilUpsertWithoutPenggunaInput = {
    update: XOR<profilUpdateWithoutPenggunaInput, profilUncheckedUpdateWithoutPenggunaInput>
    create: XOR<profilCreateWithoutPenggunaInput, profilUncheckedCreateWithoutPenggunaInput>
    where?: profilWhereInput
  }

  export type profilUpdateToOneWithWhereWithoutPenggunaInput = {
    where?: profilWhereInput
    data: XOR<profilUpdateWithoutPenggunaInput, profilUncheckedUpdateWithoutPenggunaInput>
  }

  export type profilUpdateWithoutPenggunaInput = {
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilUncheckedUpdateWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    judulDisertasi?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    tempatTanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    alamatKeluarga?: NullableStringFieldUpdateOperationsInput | string | null
    tahunLulus?: NullableStringFieldUpdateOperationsInput | string | null
    mulaiMasukPendidikan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    nomorTelpon?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penggunaUpsertWithWhereUniqueWithoutPembimbingInput = {
    where: penggunaWhereUniqueInput
    update: XOR<penggunaUpdateWithoutPembimbingInput, penggunaUncheckedUpdateWithoutPembimbingInput>
    create: XOR<penggunaCreateWithoutPembimbingInput, penggunaUncheckedCreateWithoutPembimbingInput>
  }

  export type penggunaUpdateWithWhereUniqueWithoutPembimbingInput = {
    where: penggunaWhereUniqueInput
    data: XOR<penggunaUpdateWithoutPembimbingInput, penggunaUncheckedUpdateWithoutPembimbingInput>
  }

  export type penggunaUpdateManyWithWhereWithoutPembimbingInput = {
    where: penggunaScalarWhereInput
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyWithoutPembimbingInput>
  }

  export type penggunaScalarWhereInput = {
    AND?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
    OR?: penggunaScalarWhereInput[]
    NOT?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
    id?: StringFilter<"pengguna"> | string
    nama?: StringFilter<"pengguna"> | string
    username?: StringFilter<"pengguna"> | string
    password?: StringFilter<"pengguna"> | string
    peran?: Enumpengguna_peranFilter<"pengguna"> | $Enums.pengguna_peran
    avatar?: StringNullableFilter<"pengguna"> | string | null
    signature?: StringNullableFilter<"pengguna"> | string | null
    pembimbingId?: StringNullableFilter<"pengguna"> | string | null
    koPromotorId?: StringNullableFilter<"pengguna"> | string | null
    promotorId?: StringNullableFilter<"pengguna"> | string | null
    createdAt?: DateTimeFilter<"pengguna"> | Date | string
    updatedAt?: DateTimeFilter<"pengguna"> | Date | string
  }

  export type penggunaUpsertWithoutBimbinganInput = {
    update: XOR<penggunaUpdateWithoutBimbinganInput, penggunaUncheckedUpdateWithoutBimbinganInput>
    create: XOR<penggunaCreateWithoutBimbinganInput, penggunaUncheckedCreateWithoutBimbinganInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutBimbinganInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutBimbinganInput, penggunaUncheckedUpdateWithoutBimbinganInput>
  }

  export type penggunaUpdateWithoutBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutBimbinganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUpsertWithWhereUniqueWithoutKoPromotorInput = {
    where: penggunaWhereUniqueInput
    update: XOR<penggunaUpdateWithoutKoPromotorInput, penggunaUncheckedUpdateWithoutKoPromotorInput>
    create: XOR<penggunaCreateWithoutKoPromotorInput, penggunaUncheckedCreateWithoutKoPromotorInput>
  }

  export type penggunaUpdateWithWhereUniqueWithoutKoPromotorInput = {
    where: penggunaWhereUniqueInput
    data: XOR<penggunaUpdateWithoutKoPromotorInput, penggunaUncheckedUpdateWithoutKoPromotorInput>
  }

  export type penggunaUpdateManyWithWhereWithoutKoPromotorInput = {
    where: penggunaScalarWhereInput
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyWithoutKoPromotorInput>
  }

  export type penggunaUpsertWithoutKoPromotorMahasiswaInput = {
    update: XOR<penggunaUpdateWithoutKoPromotorMahasiswaInput, penggunaUncheckedUpdateWithoutKoPromotorMahasiswaInput>
    create: XOR<penggunaCreateWithoutKoPromotorMahasiswaInput, penggunaUncheckedCreateWithoutKoPromotorMahasiswaInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutKoPromotorMahasiswaInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutKoPromotorMahasiswaInput, penggunaUncheckedUpdateWithoutKoPromotorMahasiswaInput>
  }

  export type penggunaUpdateWithoutKoPromotorMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutKoPromotorMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUpsertWithWhereUniqueWithoutPromotorInput = {
    where: penggunaWhereUniqueInput
    update: XOR<penggunaUpdateWithoutPromotorInput, penggunaUncheckedUpdateWithoutPromotorInput>
    create: XOR<penggunaCreateWithoutPromotorInput, penggunaUncheckedCreateWithoutPromotorInput>
  }

  export type penggunaUpdateWithWhereUniqueWithoutPromotorInput = {
    where: penggunaWhereUniqueInput
    data: XOR<penggunaUpdateWithoutPromotorInput, penggunaUncheckedUpdateWithoutPromotorInput>
  }

  export type penggunaUpdateManyWithWhereWithoutPromotorInput = {
    where: penggunaScalarWhereInput
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyWithoutPromotorInput>
  }

  export type penggunaUpsertWithoutPromotorMahasiswaInput = {
    update: XOR<penggunaUpdateWithoutPromotorMahasiswaInput, penggunaUncheckedUpdateWithoutPromotorMahasiswaInput>
    create: XOR<penggunaCreateWithoutPromotorMahasiswaInput, penggunaUncheckedCreateWithoutPromotorMahasiswaInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutPromotorMahasiswaInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutPromotorMahasiswaInput, penggunaUncheckedUpdateWithoutPromotorMahasiswaInput>
  }

  export type penggunaUpdateWithoutPromotorMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutPromotorMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type notifikasiUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: notifikasiWhereUniqueInput
    update: XOR<notifikasiUpdateWithoutPenggunaInput, notifikasiUncheckedUpdateWithoutPenggunaInput>
    create: XOR<notifikasiCreateWithoutPenggunaInput, notifikasiUncheckedCreateWithoutPenggunaInput>
  }

  export type notifikasiUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: notifikasiWhereUniqueInput
    data: XOR<notifikasiUpdateWithoutPenggunaInput, notifikasiUncheckedUpdateWithoutPenggunaInput>
  }

  export type notifikasiUpdateManyWithWhereWithoutPenggunaInput = {
    where: notifikasiScalarWhereInput
    data: XOR<notifikasiUpdateManyMutationInput, notifikasiUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type notifikasiScalarWhereInput = {
    AND?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
    OR?: notifikasiScalarWhereInput[]
    NOT?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
    id?: IntFilter<"notifikasi"> | number
    judul?: StringFilter<"notifikasi"> | string
    pesan?: StringFilter<"notifikasi"> | string
    dibaca?: BoolFilter<"notifikasi"> | boolean
    createdAt?: DateTimeFilter<"notifikasi"> | Date | string
    penggunaId?: StringFilter<"notifikasi"> | string
  }

  export type kegiatanUpsertWithWhereUniqueWithoutPengajuInput = {
    where: kegiatanWhereUniqueInput
    update: XOR<kegiatanUpdateWithoutPengajuInput, kegiatanUncheckedUpdateWithoutPengajuInput>
    create: XOR<kegiatanCreateWithoutPengajuInput, kegiatanUncheckedCreateWithoutPengajuInput>
  }

  export type kegiatanUpdateWithWhereUniqueWithoutPengajuInput = {
    where: kegiatanWhereUniqueInput
    data: XOR<kegiatanUpdateWithoutPengajuInput, kegiatanUncheckedUpdateWithoutPengajuInput>
  }

  export type kegiatanUpdateManyWithWhereWithoutPengajuInput = {
    where: kegiatanScalarWhereInput
    data: XOR<kegiatanUpdateManyMutationInput, kegiatanUncheckedUpdateManyWithoutPengajuInput>
  }

  export type kegiatanScalarWhereInput = {
    AND?: kegiatanScalarWhereInput | kegiatanScalarWhereInput[]
    OR?: kegiatanScalarWhereInput[]
    NOT?: kegiatanScalarWhereInput | kegiatanScalarWhereInput[]
    id?: IntFilter<"kegiatan"> | number
    judul?: StringFilter<"kegiatan"> | string
    lokasi?: StringNullableFilter<"kegiatan"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    tanggalSelesai?: DateTimeNullableFilter<"kegiatan"> | Date | string | null
    catatan?: StringNullableFilter<"kegiatan"> | string | null
    status?: Enumkegiatan_statusFilter<"kegiatan"> | $Enums.kegiatan_status
    createdAt?: DateTimeFilter<"kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"kegiatan"> | Date | string
    pengajuId?: StringNullableFilter<"kegiatan"> | string | null
    mata_kuliahId?: IntNullableFilter<"kegiatan"> | number | null
  }

  export type logbookUpsertWithoutPenggunaInput = {
    update: XOR<logbookUpdateWithoutPenggunaInput, logbookUncheckedUpdateWithoutPenggunaInput>
    create: XOR<logbookCreateWithoutPenggunaInput, logbookUncheckedCreateWithoutPenggunaInput>
    where?: logbookWhereInput
  }

  export type logbookUpdateToOneWithWhereWithoutPenggunaInput = {
    where?: logbookWhereInput
    data: XOR<logbookUpdateWithoutPenggunaInput, logbookUncheckedUpdateWithoutPenggunaInput>
  }

  export type logbookUpdateWithoutPenggunaInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logbookUncheckedUpdateWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permohonan_bimbinganUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: permohonan_bimbinganWhereUniqueInput
    update: XOR<permohonan_bimbinganUpdateWithoutMahasiswaInput, permohonan_bimbinganUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<permohonan_bimbinganCreateWithoutMahasiswaInput, permohonan_bimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type permohonan_bimbinganUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: permohonan_bimbinganWhereUniqueInput
    data: XOR<permohonan_bimbinganUpdateWithoutMahasiswaInput, permohonan_bimbinganUncheckedUpdateWithoutMahasiswaInput>
  }

  export type permohonan_bimbinganUpdateManyWithWhereWithoutMahasiswaInput = {
    where: permohonan_bimbinganScalarWhereInput
    data: XOR<permohonan_bimbinganUpdateManyMutationInput, permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type permohonan_bimbinganScalarWhereInput = {
    AND?: permohonan_bimbinganScalarWhereInput | permohonan_bimbinganScalarWhereInput[]
    OR?: permohonan_bimbinganScalarWhereInput[]
    NOT?: permohonan_bimbinganScalarWhereInput | permohonan_bimbinganScalarWhereInput[]
    id?: IntFilter<"permohonan_bimbingan"> | number
    statusPermohonan?: Enumstatus_permohonanFilter<"permohonan_bimbingan"> | $Enums.status_permohonan
    kalimatPermohonan?: StringFilter<"permohonan_bimbingan"> | string
    alasanDitolak?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    mahasiswaId?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    dosenId?: StringNullableFilter<"permohonan_bimbingan"> | string | null
    createdAt?: DateTimeFilter<"permohonan_bimbingan"> | Date | string
  }

  export type permohonan_bimbinganUpsertWithWhereUniqueWithoutDosenInput = {
    where: permohonan_bimbinganWhereUniqueInput
    update: XOR<permohonan_bimbinganUpdateWithoutDosenInput, permohonan_bimbinganUncheckedUpdateWithoutDosenInput>
    create: XOR<permohonan_bimbinganCreateWithoutDosenInput, permohonan_bimbinganUncheckedCreateWithoutDosenInput>
  }

  export type permohonan_bimbinganUpdateWithWhereUniqueWithoutDosenInput = {
    where: permohonan_bimbinganWhereUniqueInput
    data: XOR<permohonan_bimbinganUpdateWithoutDosenInput, permohonan_bimbinganUncheckedUpdateWithoutDosenInput>
  }

  export type permohonan_bimbinganUpdateManyWithWhereWithoutDosenInput = {
    where: permohonan_bimbinganScalarWhereInput
    data: XOR<permohonan_bimbinganUpdateManyMutationInput, permohonan_bimbinganUncheckedUpdateManyWithoutDosenInput>
  }

  export type lampiran_kegiatanCreateWithoutKegiatanInput = {
    path: string
    ext: string
  }

  export type lampiran_kegiatanUncheckedCreateWithoutKegiatanInput = {
    id?: number
    path: string
    ext: string
  }

  export type lampiran_kegiatanCreateOrConnectWithoutKegiatanInput = {
    where: lampiran_kegiatanWhereUniqueInput
    create: XOR<lampiran_kegiatanCreateWithoutKegiatanInput, lampiran_kegiatanUncheckedCreateWithoutKegiatanInput>
  }

  export type lampiran_kegiatanCreateManyKegiatanInputEnvelope = {
    data: lampiran_kegiatanCreateManyKegiatanInput | lampiran_kegiatanCreateManyKegiatanInput[]
    skipDuplicates?: boolean
  }

  export type penggunaCreateWithoutKegiatanInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutKegiatanInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutKegiatanInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutKegiatanInput, penggunaUncheckedCreateWithoutKegiatanInput>
  }

  export type mata_kuliahCreateWithoutKegiatanInput = {
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mata_kuliahUncheckedCreateWithoutKegiatanInput = {
    id?: number
    judul: string
    semester: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mata_kuliahCreateOrConnectWithoutKegiatanInput = {
    where: mata_kuliahWhereUniqueInput
    create: XOR<mata_kuliahCreateWithoutKegiatanInput, mata_kuliahUncheckedCreateWithoutKegiatanInput>
  }

  export type lampiran_kegiatanUpsertWithWhereUniqueWithoutKegiatanInput = {
    where: lampiran_kegiatanWhereUniqueInput
    update: XOR<lampiran_kegiatanUpdateWithoutKegiatanInput, lampiran_kegiatanUncheckedUpdateWithoutKegiatanInput>
    create: XOR<lampiran_kegiatanCreateWithoutKegiatanInput, lampiran_kegiatanUncheckedCreateWithoutKegiatanInput>
  }

  export type lampiran_kegiatanUpdateWithWhereUniqueWithoutKegiatanInput = {
    where: lampiran_kegiatanWhereUniqueInput
    data: XOR<lampiran_kegiatanUpdateWithoutKegiatanInput, lampiran_kegiatanUncheckedUpdateWithoutKegiatanInput>
  }

  export type lampiran_kegiatanUpdateManyWithWhereWithoutKegiatanInput = {
    where: lampiran_kegiatanScalarWhereInput
    data: XOR<lampiran_kegiatanUpdateManyMutationInput, lampiran_kegiatanUncheckedUpdateManyWithoutKegiatanInput>
  }

  export type lampiran_kegiatanScalarWhereInput = {
    AND?: lampiran_kegiatanScalarWhereInput | lampiran_kegiatanScalarWhereInput[]
    OR?: lampiran_kegiatanScalarWhereInput[]
    NOT?: lampiran_kegiatanScalarWhereInput | lampiran_kegiatanScalarWhereInput[]
    id?: IntFilter<"lampiran_kegiatan"> | number
    path?: StringFilter<"lampiran_kegiatan"> | string
    ext?: StringFilter<"lampiran_kegiatan"> | string
    kegiatanId?: IntNullableFilter<"lampiran_kegiatan"> | number | null
  }

  export type penggunaUpsertWithoutKegiatanInput = {
    update: XOR<penggunaUpdateWithoutKegiatanInput, penggunaUncheckedUpdateWithoutKegiatanInput>
    create: XOR<penggunaCreateWithoutKegiatanInput, penggunaUncheckedCreateWithoutKegiatanInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutKegiatanInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutKegiatanInput, penggunaUncheckedUpdateWithoutKegiatanInput>
  }

  export type penggunaUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutKegiatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type mata_kuliahUpsertWithoutKegiatanInput = {
    update: XOR<mata_kuliahUpdateWithoutKegiatanInput, mata_kuliahUncheckedUpdateWithoutKegiatanInput>
    create: XOR<mata_kuliahCreateWithoutKegiatanInput, mata_kuliahUncheckedCreateWithoutKegiatanInput>
    where?: mata_kuliahWhereInput
  }

  export type mata_kuliahUpdateToOneWithWhereWithoutKegiatanInput = {
    where?: mata_kuliahWhereInput
    data: XOR<mata_kuliahUpdateWithoutKegiatanInput, mata_kuliahUncheckedUpdateWithoutKegiatanInput>
  }

  export type mata_kuliahUpdateWithoutKegiatanInput = {
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mata_kuliahUncheckedUpdateWithoutKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penggunaCreateWithoutLogbookInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutLogbookInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutLogbookInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutLogbookInput, penggunaUncheckedCreateWithoutLogbookInput>
  }

  export type penggunaUpsertWithoutLogbookInput = {
    update: XOR<penggunaUpdateWithoutLogbookInput, penggunaUncheckedUpdateWithoutLogbookInput>
    create: XOR<penggunaCreateWithoutLogbookInput, penggunaUncheckedCreateWithoutLogbookInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutLogbookInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutLogbookInput, penggunaUncheckedUpdateWithoutLogbookInput>
  }

  export type penggunaUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutLogbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaCreateWithoutProfilInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutProfilInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutProfilInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutProfilInput, penggunaUncheckedCreateWithoutProfilInput>
  }

  export type penggunaUpsertWithoutProfilInput = {
    update: XOR<penggunaUpdateWithoutProfilInput, penggunaUncheckedUpdateWithoutProfilInput>
    create: XOR<penggunaCreateWithoutProfilInput, penggunaUncheckedCreateWithoutProfilInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutProfilInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutProfilInput, penggunaUncheckedUpdateWithoutProfilInput>
  }

  export type penggunaUpdateWithoutProfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutProfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaCreateWithoutPermohonan_bimbingan_dibuatInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutPermohonan_bimbingan_dibuatInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutPermohonan_bimbingan_dibuatInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPermohonan_bimbingan_dibuatInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_dibuatInput>
  }

  export type penggunaCreateWithoutPermohonan_bimbingan_diterimaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
  }

  export type penggunaUncheckedCreateWithoutPermohonan_bimbingan_diterimaInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type penggunaCreateOrConnectWithoutPermohonan_bimbingan_diterimaInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPermohonan_bimbingan_diterimaInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_diterimaInput>
  }

  export type penggunaUpsertWithoutPermohonan_bimbingan_dibuatInput = {
    update: XOR<penggunaUpdateWithoutPermohonan_bimbingan_dibuatInput, penggunaUncheckedUpdateWithoutPermohonan_bimbingan_dibuatInput>
    create: XOR<penggunaCreateWithoutPermohonan_bimbingan_dibuatInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_dibuatInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutPermohonan_bimbingan_dibuatInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutPermohonan_bimbingan_dibuatInput, penggunaUncheckedUpdateWithoutPermohonan_bimbingan_dibuatInput>
  }

  export type penggunaUpdateWithoutPermohonan_bimbingan_dibuatInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutPermohonan_bimbingan_dibuatInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUpsertWithoutPermohonan_bimbingan_diterimaInput = {
    update: XOR<penggunaUpdateWithoutPermohonan_bimbingan_diterimaInput, penggunaUncheckedUpdateWithoutPermohonan_bimbingan_diterimaInput>
    create: XOR<penggunaCreateWithoutPermohonan_bimbingan_diterimaInput, penggunaUncheckedCreateWithoutPermohonan_bimbingan_diterimaInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutPermohonan_bimbingan_diterimaInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutPermohonan_bimbingan_diterimaInput, penggunaUncheckedUpdateWithoutPermohonan_bimbingan_diterimaInput>
  }

  export type penggunaUpdateWithoutPermohonan_bimbingan_diterimaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
  }

  export type penggunaUncheckedUpdateWithoutPermohonan_bimbingan_diterimaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type kegiatanCreateWithoutMata_kuliahInput = {
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    lampiran?: lampiran_kegiatanCreateNestedManyWithoutKegiatanInput
    pengaju?: penggunaCreateNestedOneWithoutKegiatanInput
  }

  export type kegiatanUncheckedCreateWithoutMata_kuliahInput = {
    id?: number
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    pengajuId?: string | null
    lampiran?: lampiran_kegiatanUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type kegiatanCreateOrConnectWithoutMata_kuliahInput = {
    where: kegiatanWhereUniqueInput
    create: XOR<kegiatanCreateWithoutMata_kuliahInput, kegiatanUncheckedCreateWithoutMata_kuliahInput>
  }

  export type kegiatanCreateManyMata_kuliahInputEnvelope = {
    data: kegiatanCreateManyMata_kuliahInput | kegiatanCreateManyMata_kuliahInput[]
    skipDuplicates?: boolean
  }

  export type kegiatanUpsertWithWhereUniqueWithoutMata_kuliahInput = {
    where: kegiatanWhereUniqueInput
    update: XOR<kegiatanUpdateWithoutMata_kuliahInput, kegiatanUncheckedUpdateWithoutMata_kuliahInput>
    create: XOR<kegiatanCreateWithoutMata_kuliahInput, kegiatanUncheckedCreateWithoutMata_kuliahInput>
  }

  export type kegiatanUpdateWithWhereUniqueWithoutMata_kuliahInput = {
    where: kegiatanWhereUniqueInput
    data: XOR<kegiatanUpdateWithoutMata_kuliahInput, kegiatanUncheckedUpdateWithoutMata_kuliahInput>
  }

  export type kegiatanUpdateManyWithWhereWithoutMata_kuliahInput = {
    where: kegiatanScalarWhereInput
    data: XOR<kegiatanUpdateManyMutationInput, kegiatanUncheckedUpdateManyWithoutMata_kuliahInput>
  }

  export type kegiatanCreateWithoutLampiranInput = {
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    pengaju?: penggunaCreateNestedOneWithoutKegiatanInput
    mata_kuliah?: mata_kuliahCreateNestedOneWithoutKegiatanInput
  }

  export type kegiatanUncheckedCreateWithoutLampiranInput = {
    id?: number
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    pengajuId?: string | null
    mata_kuliahId?: number | null
  }

  export type kegiatanCreateOrConnectWithoutLampiranInput = {
    where: kegiatanWhereUniqueInput
    create: XOR<kegiatanCreateWithoutLampiranInput, kegiatanUncheckedCreateWithoutLampiranInput>
  }

  export type kegiatanUpsertWithoutLampiranInput = {
    update: XOR<kegiatanUpdateWithoutLampiranInput, kegiatanUncheckedUpdateWithoutLampiranInput>
    create: XOR<kegiatanCreateWithoutLampiranInput, kegiatanUncheckedCreateWithoutLampiranInput>
    where?: kegiatanWhereInput
  }

  export type kegiatanUpdateToOneWithWhereWithoutLampiranInput = {
    where?: kegiatanWhereInput
    data: XOR<kegiatanUpdateWithoutLampiranInput, kegiatanUncheckedUpdateWithoutLampiranInput>
  }

  export type kegiatanUpdateWithoutLampiranInput = {
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengaju?: penggunaUpdateOneWithoutKegiatanNestedInput
    mata_kuliah?: mata_kuliahUpdateOneWithoutKegiatanNestedInput
  }

  export type kegiatanUncheckedUpdateWithoutLampiranInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengajuId?: NullableStringFieldUpdateOperationsInput | string | null
    mata_kuliahId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type penggunaCreateWithoutNotifikasiInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaCreateNestedManyWithoutPembimbingInput
    pembimbing?: penggunaCreateNestedOneWithoutBimbinganInput
    koPromotorMahasiswa?: penggunaCreateNestedManyWithoutKoPromotorInput
    koPromotor?: penggunaCreateNestedOneWithoutKoPromotorMahasiswaInput
    promotorMahasiswa?: penggunaCreateNestedManyWithoutPromotorInput
    promotor?: penggunaCreateNestedOneWithoutPromotorMahasiswaInput
    kegiatan?: kegiatanCreateNestedManyWithoutPengajuInput
    logbook?: logbookCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganCreateNestedManyWithoutDosenInput
  }

  export type penggunaUncheckedCreateWithoutNotifikasiInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profil?: profilUncheckedCreateNestedOneWithoutPenggunaInput
    bimbingan?: penggunaUncheckedCreateNestedManyWithoutPembimbingInput
    koPromotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutKoPromotorInput
    promotorMahasiswa?: penggunaUncheckedCreateNestedManyWithoutPromotorInput
    kegiatan?: kegiatanUncheckedCreateNestedManyWithoutPengajuInput
    logbook?: logbookUncheckedCreateNestedOneWithoutPenggunaInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type penggunaCreateOrConnectWithoutNotifikasiInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutNotifikasiInput, penggunaUncheckedCreateWithoutNotifikasiInput>
  }

  export type penggunaUpsertWithoutNotifikasiInput = {
    update: XOR<penggunaUpdateWithoutNotifikasiInput, penggunaUncheckedUpdateWithoutNotifikasiInput>
    create: XOR<penggunaCreateWithoutNotifikasiInput, penggunaUncheckedCreateWithoutNotifikasiInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutNotifikasiInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutNotifikasiInput, penggunaUncheckedUpdateWithoutNotifikasiInput>
  }

  export type penggunaUpdateWithoutNotifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutNotifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaCreateManyPembimbingInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    koPromotorId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penggunaCreateManyKoPromotorInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    promotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penggunaCreateManyPromotorInput = {
    id?: string
    nama: string
    username: string
    password: string
    peran?: $Enums.pengguna_peran
    avatar?: string | null
    signature?: string | null
    pembimbingId?: string | null
    koPromotorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notifikasiCreateManyPenggunaInput = {
    id?: number
    judul: string
    pesan: string
    dibaca?: boolean
    createdAt?: Date | string
  }

  export type kegiatanCreateManyPengajuInput = {
    id?: number
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    mata_kuliahId?: number | null
  }

  export type permohonan_bimbinganCreateManyMahasiswaInput = {
    id?: number
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    dosenId?: string | null
    createdAt?: Date | string
  }

  export type permohonan_bimbinganCreateManyDosenInput = {
    id?: number
    statusPermohonan?: $Enums.status_permohonan
    kalimatPermohonan: string
    alasanDitolak?: string | null
    mahasiswaId?: string | null
    createdAt?: Date | string
  }

  export type penggunaUpdateWithoutPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateManyWithoutPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penggunaUpdateWithoutKoPromotorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    promotor?: penggunaUpdateOneWithoutPromotorMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutKoPromotorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateManyWithoutKoPromotorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penggunaUpdateWithoutPromotorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUpdateManyWithoutPembimbingNestedInput
    pembimbing?: penggunaUpdateOneWithoutBimbinganNestedInput
    koPromotorMahasiswa?: penggunaUpdateManyWithoutKoPromotorNestedInput
    koPromotor?: penggunaUpdateOneWithoutKoPromotorMahasiswaNestedInput
    promotorMahasiswa?: penggunaUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateWithoutPromotorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profil?: profilUncheckedUpdateOneWithoutPenggunaNestedInput
    bimbingan?: penggunaUncheckedUpdateManyWithoutPembimbingNestedInput
    koPromotorMahasiswa?: penggunaUncheckedUpdateManyWithoutKoPromotorNestedInput
    promotorMahasiswa?: penggunaUncheckedUpdateManyWithoutPromotorNestedInput
    notifikasi?: notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    kegiatan?: kegiatanUncheckedUpdateManyWithoutPengajuNestedInput
    logbook?: logbookUncheckedUpdateOneWithoutPenggunaNestedInput
    permohonan_bimbingan_dibuat?: permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    permohonan_bimbingan_diterima?: permohonan_bimbinganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type penggunaUncheckedUpdateManyWithoutPromotorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    peran?: Enumpengguna_peranFieldUpdateOperationsInput | $Enums.pengguna_peran
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    pembimbingId?: NullableStringFieldUpdateOperationsInput | string | null
    koPromotorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notifikasiUpdateWithoutPenggunaInput = {
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    dibaca?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notifikasiUncheckedUpdateWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    dibaca?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notifikasiUncheckedUpdateManyWithoutPenggunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    dibaca?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kegiatanUpdateWithoutPengajuInput = {
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lampiran?: lampiran_kegiatanUpdateManyWithoutKegiatanNestedInput
    mata_kuliah?: mata_kuliahUpdateOneWithoutKegiatanNestedInput
  }

  export type kegiatanUncheckedUpdateWithoutPengajuInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mata_kuliahId?: NullableIntFieldUpdateOperationsInput | number | null
    lampiran?: lampiran_kegiatanUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type kegiatanUncheckedUpdateManyWithoutPengajuInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mata_kuliahId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type permohonan_bimbinganUpdateWithoutMahasiswaInput = {
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: penggunaUpdateOneWithoutPermohonan_bimbingan_diterimaNestedInput
  }

  export type permohonan_bimbinganUncheckedUpdateWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    dosenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permohonan_bimbinganUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    dosenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permohonan_bimbinganUpdateWithoutDosenInput = {
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: penggunaUpdateOneWithoutPermohonan_bimbingan_dibuatNestedInput
  }

  export type permohonan_bimbinganUncheckedUpdateWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permohonan_bimbinganUncheckedUpdateManyWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusPermohonan?: Enumstatus_permohonanFieldUpdateOperationsInput | $Enums.status_permohonan
    kalimatPermohonan?: StringFieldUpdateOperationsInput | string
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lampiran_kegiatanCreateManyKegiatanInput = {
    id?: number
    path: string
    ext: string
  }

  export type lampiran_kegiatanUpdateWithoutKegiatanInput = {
    path?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
  }

  export type lampiran_kegiatanUncheckedUpdateWithoutKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
  }

  export type lampiran_kegiatanUncheckedUpdateManyWithoutKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
  }

  export type kegiatanCreateManyMata_kuliahInput = {
    id?: number
    judul: string
    lokasi?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    catatan?: string | null
    status?: $Enums.kegiatan_status
    createdAt?: Date | string
    updatedAt?: Date | string
    pengajuId?: string | null
  }

  export type kegiatanUpdateWithoutMata_kuliahInput = {
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lampiran?: lampiran_kegiatanUpdateManyWithoutKegiatanNestedInput
    pengaju?: penggunaUpdateOneWithoutKegiatanNestedInput
  }

  export type kegiatanUncheckedUpdateWithoutMata_kuliahInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengajuId?: NullableStringFieldUpdateOperationsInput | string | null
    lampiran?: lampiran_kegiatanUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type kegiatanUncheckedUpdateManyWithoutMata_kuliahInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumkegiatan_statusFieldUpdateOperationsInput | $Enums.kegiatan_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pengajuId?: NullableStringFieldUpdateOperationsInput | string | null
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
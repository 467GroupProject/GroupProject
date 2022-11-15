
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Inventory
 * 
 */
export type Inventory = {
  id: number
  quantity: number | null
}

/**
 * Model Order_Product
 * 
 */
export type Order_Product = {
  order_id: number
  product_id: number
  quantity: number
}

/**
 * Model Orders
 * 
 */
export type Orders = {
  id: number
  customer_name: string
  customer_email: string
  customer_address: string
  total_amount: Prisma.Decimal | null
  total_weight: Prisma.Decimal | null
  status: string | null
  date: Date | null
}

/**
 * Model Users
 * 
 */
export type Users = {
  email: string
  password: string
  status: string | null
}

/**
 * Model Weight
 * 
 */
export type Weight = {
  id: number
  weight: Prisma.Decimal | null
  cost: Prisma.Decimal | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inventories
 * const inventories = await prisma.inventory.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<GlobalReject>;

  /**
   * `prisma.order_Product`: Exposes CRUD operations for the **Order_Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_Products
    * const order_Products = await prisma.order_Product.findMany()
    * ```
    */
  get order_Product(): Prisma.Order_ProductDelegate<GlobalReject>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.weight`: Exposes CRUD operations for the **Weight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weights
    * const weights = await prisma.weight.findMany()
    * ```
    */
  get weight(): Prisma.WeightDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Inventory: 'Inventory',
    Order_Product: 'Order_Product',
    Orders: 'Orders',
    Users: 'Users',
    Weight: 'Weight'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InventoryCountOutputType
   */


  export type InventoryCountOutputType = {
    Order_Product: number
  }

  export type InventoryCountOutputTypeSelect = {
    Order_Product?: boolean
  }

  export type InventoryCountOutputTypeGetPayload<S extends boolean | null | undefined | InventoryCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? InventoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (InventoryCountOutputTypeArgs)
    ? InventoryCountOutputType 
    : S extends { select: any } & (InventoryCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof InventoryCountOutputType ? InventoryCountOutputType[P] : never
  } 
      : InventoryCountOutputType




  // Custom InputTypes

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     * 
    **/
    select?: InventoryCountOutputTypeSelect | null
  }



  /**
   * Count Type OrdersCountOutputType
   */


  export type OrdersCountOutputType = {
    Order_Product: number
  }

  export type OrdersCountOutputTypeSelect = {
    Order_Product?: boolean
  }

  export type OrdersCountOutputTypeGetPayload<S extends boolean | null | undefined | OrdersCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrdersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrdersCountOutputTypeArgs)
    ? OrdersCountOutputType 
    : S extends { select: any } & (OrdersCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof OrdersCountOutputType ? OrdersCountOutputType[P] : never
  } 
      : OrdersCountOutputType




  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     * 
    **/
    select?: OrdersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Inventory
   */


  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    quantity: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    quantity?: true
    _all?: true
  }

  export type InventoryAggregateArgs = {
    /**
     * Filter which Inventory to aggregate.
     * 
    **/
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     * 
    **/
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs = {
    where?: InventoryWhereInput
    orderBy?: Enumerable<InventoryOrderByWithAggregationInput>
    by: Array<InventoryScalarFieldEnum>
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }


  export type InventoryGroupByOutputType = {
    id: number
    quantity: number | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect = {
    id?: boolean
    quantity?: boolean
    Order_Product?: boolean | Order_ProductFindManyArgs
    _count?: boolean | InventoryCountOutputTypeArgs
  }


  export type InventoryInclude = {
    Order_Product?: boolean | Order_ProductFindManyArgs
    _count?: boolean | InventoryCountOutputTypeArgs
  } 

  export type InventoryGetPayload<S extends boolean | null | undefined | InventoryArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Inventory :
    S extends undefined ? never :
    S extends { include: any } & (InventoryArgs | InventoryFindManyArgs)
    ? Inventory  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Order_Product' ? Array < Order_ProductGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? InventoryCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (InventoryArgs | InventoryFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Order_Product' ? Array < Order_ProductGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? InventoryCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Inventory ? Inventory[P] : never
  } 
      : Inventory


  type InventoryCountArgs = Merge<
    Omit<InventoryFindManyArgs, 'select' | 'include'> & {
      select?: InventoryCountAggregateInputType | true
    }
  >

  export interface InventoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InventoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InventoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Inventory'> extends True ? Prisma__InventoryClient<InventoryGetPayload<T>> : Prisma__InventoryClient<InventoryGetPayload<T> | null, null>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InventoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InventoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Inventory'> extends True ? Prisma__InventoryClient<InventoryGetPayload<T>> : Prisma__InventoryClient<InventoryGetPayload<T> | null, null>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InventoryFindManyArgs>(
      args?: SelectSubset<T, InventoryFindManyArgs>
    ): PrismaPromise<Array<InventoryGetPayload<T>>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
    **/
    create<T extends InventoryCreateArgs>(
      args: SelectSubset<T, InventoryCreateArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Create many Inventories.
     *     @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InventoryCreateManyArgs>(
      args?: SelectSubset<T, InventoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
    **/
    delete<T extends InventoryDeleteArgs>(
      args: SelectSubset<T, InventoryDeleteArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InventoryUpdateArgs>(
      args: SelectSubset<T, InventoryUpdateArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InventoryDeleteManyArgs>(
      args?: SelectSubset<T, InventoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InventoryUpdateManyArgs>(
      args: SelectSubset<T, InventoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
    **/
    upsert<T extends InventoryUpsertArgs>(
      args: SelectSubset<T, InventoryUpsertArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Find one Inventory that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InventoryFindUniqueOrThrowArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Find the first Inventory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InventoryFindFirstOrThrowArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InventoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Order_Product<T extends Order_ProductFindManyArgs= {}>(args?: Subset<T, Order_ProductFindManyArgs>): PrismaPromise<Array<Order_ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Inventory base type for findUnique actions
   */
  export type InventoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
    /**
     * Filter, which Inventory to fetch.
     * 
    **/
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory: findUnique
   */
  export interface InventoryFindUniqueArgs extends InventoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Inventory base type for findFirst actions
   */
  export type InventoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
    /**
     * Filter, which Inventory to fetch.
     * 
    **/
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     * 
    **/
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     * 
    **/
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     * 
    **/
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }

  /**
   * Inventory: findFirst
   */
  export interface InventoryFindFirstArgs extends InventoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
    /**
     * Filter, which Inventories to fetch.
     * 
    **/
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     * 
    **/
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     * 
    **/
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * Inventory create
   */
  export type InventoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
    /**
     * The data needed to create a Inventory.
     * 
    **/
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }


  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs = {
    /**
     * The data used to create many Inventories.
     * 
    **/
    data: Enumerable<InventoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Inventory update
   */
  export type InventoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
    /**
     * The data needed to update a Inventory.
     * 
    **/
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     * 
    **/
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs = {
    /**
     * The data used to update Inventories.
     * 
    **/
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     * 
    **/
    where?: InventoryWhereInput
  }


  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     * 
    **/
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     * 
    **/
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }


  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
    /**
     * Filter which Inventory to delete.
     * 
    **/
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs = {
    /**
     * Filter which Inventories to delete
     * 
    **/
    where?: InventoryWhereInput
  }


  /**
   * Inventory: findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs = InventoryFindUniqueArgsBase
      

  /**
   * Inventory: findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs = InventoryFindFirstArgsBase
      

  /**
   * Inventory without action
   */
  export type InventoryArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     * 
    **/
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InventoryInclude | null
  }



  /**
   * Model Order_Product
   */


  export type AggregateOrder_Product = {
    _count: Order_ProductCountAggregateOutputType | null
    _avg: Order_ProductAvgAggregateOutputType | null
    _sum: Order_ProductSumAggregateOutputType | null
    _min: Order_ProductMinAggregateOutputType | null
    _max: Order_ProductMaxAggregateOutputType | null
  }

  export type Order_ProductAvgAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_ProductSumAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_ProductMinAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_ProductMaxAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_ProductCountAggregateOutputType = {
    order_id: number
    product_id: number
    quantity: number
    _all: number
  }


  export type Order_ProductAvgAggregateInputType = {
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_ProductSumAggregateInputType = {
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_ProductMinAggregateInputType = {
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_ProductMaxAggregateInputType = {
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_ProductCountAggregateInputType = {
    order_id?: true
    product_id?: true
    quantity?: true
    _all?: true
  }

  export type Order_ProductAggregateArgs = {
    /**
     * Filter which Order_Product to aggregate.
     * 
    **/
    where?: Order_ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Products to fetch.
     * 
    **/
    orderBy?: Enumerable<Order_ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Order_ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_Products
    **/
    _count?: true | Order_ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_ProductMaxAggregateInputType
  }

  export type GetOrder_ProductAggregateType<T extends Order_ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_Product]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_Product[P]>
      : GetScalarType<T[P], AggregateOrder_Product[P]>
  }




  export type Order_ProductGroupByArgs = {
    where?: Order_ProductWhereInput
    orderBy?: Enumerable<Order_ProductOrderByWithAggregationInput>
    by: Array<Order_ProductScalarFieldEnum>
    having?: Order_ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_ProductCountAggregateInputType | true
    _avg?: Order_ProductAvgAggregateInputType
    _sum?: Order_ProductSumAggregateInputType
    _min?: Order_ProductMinAggregateInputType
    _max?: Order_ProductMaxAggregateInputType
  }


  export type Order_ProductGroupByOutputType = {
    order_id: number
    product_id: number
    quantity: number
    _count: Order_ProductCountAggregateOutputType | null
    _avg: Order_ProductAvgAggregateOutputType | null
    _sum: Order_ProductSumAggregateOutputType | null
    _min: Order_ProductMinAggregateOutputType | null
    _max: Order_ProductMaxAggregateOutputType | null
  }

  type GetOrder_ProductGroupByPayload<T extends Order_ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Order_ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_ProductGroupByOutputType[P]>
            : GetScalarType<T[P], Order_ProductGroupByOutputType[P]>
        }
      >
    >


  export type Order_ProductSelect = {
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    Orders?: boolean | OrdersArgs
    Inventory?: boolean | InventoryArgs
  }


  export type Order_ProductInclude = {
    Orders?: boolean | OrdersArgs
    Inventory?: boolean | InventoryArgs
  } 

  export type Order_ProductGetPayload<S extends boolean | null | undefined | Order_ProductArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Order_Product :
    S extends undefined ? never :
    S extends { include: any } & (Order_ProductArgs | Order_ProductFindManyArgs)
    ? Order_Product  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Orders' ? OrdersGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'Inventory' ? InventoryGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (Order_ProductArgs | Order_ProductFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Orders' ? OrdersGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'Inventory' ? InventoryGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Order_Product ? Order_Product[P] : never
  } 
      : Order_Product


  type Order_ProductCountArgs = Merge<
    Omit<Order_ProductFindManyArgs, 'select' | 'include'> & {
      select?: Order_ProductCountAggregateInputType | true
    }
  >

  export interface Order_ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Order_Product that matches the filter.
     * @param {Order_ProductFindUniqueArgs} args - Arguments to find a Order_Product
     * @example
     * // Get one Order_Product
     * const order_Product = await prisma.order_Product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Order_ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Order_ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order_Product'> extends True ? Prisma__Order_ProductClient<Order_ProductGetPayload<T>> : Prisma__Order_ProductClient<Order_ProductGetPayload<T> | null, null>

    /**
     * Find the first Order_Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ProductFindFirstArgs} args - Arguments to find a Order_Product
     * @example
     * // Get one Order_Product
     * const order_Product = await prisma.order_Product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Order_ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Order_ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order_Product'> extends True ? Prisma__Order_ProductClient<Order_ProductGetPayload<T>> : Prisma__Order_ProductClient<Order_ProductGetPayload<T> | null, null>

    /**
     * Find zero or more Order_Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_Products
     * const order_Products = await prisma.order_Product.findMany()
     * 
     * // Get first 10 Order_Products
     * const order_Products = await prisma.order_Product.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const order_ProductWithOrder_idOnly = await prisma.order_Product.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends Order_ProductFindManyArgs>(
      args?: SelectSubset<T, Order_ProductFindManyArgs>
    ): PrismaPromise<Array<Order_ProductGetPayload<T>>>

    /**
     * Create a Order_Product.
     * @param {Order_ProductCreateArgs} args - Arguments to create a Order_Product.
     * @example
     * // Create one Order_Product
     * const Order_Product = await prisma.order_Product.create({
     *   data: {
     *     // ... data to create a Order_Product
     *   }
     * })
     * 
    **/
    create<T extends Order_ProductCreateArgs>(
      args: SelectSubset<T, Order_ProductCreateArgs>
    ): Prisma__Order_ProductClient<Order_ProductGetPayload<T>>

    /**
     * Create many Order_Products.
     *     @param {Order_ProductCreateManyArgs} args - Arguments to create many Order_Products.
     *     @example
     *     // Create many Order_Products
     *     const order_Product = await prisma.order_Product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Order_ProductCreateManyArgs>(
      args?: SelectSubset<T, Order_ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Order_Product.
     * @param {Order_ProductDeleteArgs} args - Arguments to delete one Order_Product.
     * @example
     * // Delete one Order_Product
     * const Order_Product = await prisma.order_Product.delete({
     *   where: {
     *     // ... filter to delete one Order_Product
     *   }
     * })
     * 
    **/
    delete<T extends Order_ProductDeleteArgs>(
      args: SelectSubset<T, Order_ProductDeleteArgs>
    ): Prisma__Order_ProductClient<Order_ProductGetPayload<T>>

    /**
     * Update one Order_Product.
     * @param {Order_ProductUpdateArgs} args - Arguments to update one Order_Product.
     * @example
     * // Update one Order_Product
     * const order_Product = await prisma.order_Product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Order_ProductUpdateArgs>(
      args: SelectSubset<T, Order_ProductUpdateArgs>
    ): Prisma__Order_ProductClient<Order_ProductGetPayload<T>>

    /**
     * Delete zero or more Order_Products.
     * @param {Order_ProductDeleteManyArgs} args - Arguments to filter Order_Products to delete.
     * @example
     * // Delete a few Order_Products
     * const { count } = await prisma.order_Product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Order_ProductDeleteManyArgs>(
      args?: SelectSubset<T, Order_ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_Products
     * const order_Product = await prisma.order_Product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Order_ProductUpdateManyArgs>(
      args: SelectSubset<T, Order_ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_Product.
     * @param {Order_ProductUpsertArgs} args - Arguments to update or create a Order_Product.
     * @example
     * // Update or create a Order_Product
     * const order_Product = await prisma.order_Product.upsert({
     *   create: {
     *     // ... data to create a Order_Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_Product we want to update
     *   }
     * })
    **/
    upsert<T extends Order_ProductUpsertArgs>(
      args: SelectSubset<T, Order_ProductUpsertArgs>
    ): Prisma__Order_ProductClient<Order_ProductGetPayload<T>>

    /**
     * Find one Order_Product that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {Order_ProductFindUniqueOrThrowArgs} args - Arguments to find a Order_Product
     * @example
     * // Get one Order_Product
     * const order_Product = await prisma.order_Product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Order_ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Order_ProductFindUniqueOrThrowArgs>
    ): Prisma__Order_ProductClient<Order_ProductGetPayload<T>>

    /**
     * Find the first Order_Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ProductFindFirstOrThrowArgs} args - Arguments to find a Order_Product
     * @example
     * // Get one Order_Product
     * const order_Product = await prisma.order_Product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Order_ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Order_ProductFindFirstOrThrowArgs>
    ): Prisma__Order_ProductClient<Order_ProductGetPayload<T>>

    /**
     * Count the number of Order_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ProductCountArgs} args - Arguments to filter Order_Products to count.
     * @example
     * // Count the number of Order_Products
     * const count = await prisma.order_Product.count({
     *   where: {
     *     // ... the filter for the Order_Products we want to count
     *   }
     * })
    **/
    count<T extends Order_ProductCountArgs>(
      args?: Subset<T, Order_ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_ProductAggregateArgs>(args: Subset<T, Order_ProductAggregateArgs>): PrismaPromise<GetOrder_ProductAggregateType<T>>

    /**
     * Group by Order_Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ProductGroupByArgs} args - Group by arguments.
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
      T extends Order_ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_ProductGroupByArgs['orderBy'] }
        : { orderBy?: Order_ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Order_ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_ProductGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Order_ProductClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Orders<T extends OrdersArgs= {}>(args?: Subset<T, OrdersArgs>): Prisma__OrdersClient<OrdersGetPayload<T> | Null>;

    Inventory<T extends InventoryArgs= {}>(args?: Subset<T, InventoryArgs>): Prisma__InventoryClient<InventoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Order_Product base type for findUnique actions
   */
  export type Order_ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
    /**
     * Filter, which Order_Product to fetch.
     * 
    **/
    where: Order_ProductWhereUniqueInput
  }

  /**
   * Order_Product: findUnique
   */
  export interface Order_ProductFindUniqueArgs extends Order_ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order_Product base type for findFirst actions
   */
  export type Order_ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
    /**
     * Filter, which Order_Product to fetch.
     * 
    **/
    where?: Order_ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Products to fetch.
     * 
    **/
    orderBy?: Enumerable<Order_ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Products.
     * 
    **/
    cursor?: Order_ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Products.
     * 
    **/
    distinct?: Enumerable<Order_ProductScalarFieldEnum>
  }

  /**
   * Order_Product: findFirst
   */
  export interface Order_ProductFindFirstArgs extends Order_ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order_Product findMany
   */
  export type Order_ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
    /**
     * Filter, which Order_Products to fetch.
     * 
    **/
    where?: Order_ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Products to fetch.
     * 
    **/
    orderBy?: Enumerable<Order_ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_Products.
     * 
    **/
    cursor?: Order_ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Order_ProductScalarFieldEnum>
  }


  /**
   * Order_Product create
   */
  export type Order_ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
    /**
     * The data needed to create a Order_Product.
     * 
    **/
    data: XOR<Order_ProductCreateInput, Order_ProductUncheckedCreateInput>
  }


  /**
   * Order_Product createMany
   */
  export type Order_ProductCreateManyArgs = {
    /**
     * The data used to create many Order_Products.
     * 
    **/
    data: Enumerable<Order_ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order_Product update
   */
  export type Order_ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
    /**
     * The data needed to update a Order_Product.
     * 
    **/
    data: XOR<Order_ProductUpdateInput, Order_ProductUncheckedUpdateInput>
    /**
     * Choose, which Order_Product to update.
     * 
    **/
    where: Order_ProductWhereUniqueInput
  }


  /**
   * Order_Product updateMany
   */
  export type Order_ProductUpdateManyArgs = {
    /**
     * The data used to update Order_Products.
     * 
    **/
    data: XOR<Order_ProductUpdateManyMutationInput, Order_ProductUncheckedUpdateManyInput>
    /**
     * Filter which Order_Products to update
     * 
    **/
    where?: Order_ProductWhereInput
  }


  /**
   * Order_Product upsert
   */
  export type Order_ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
    /**
     * The filter to search for the Order_Product to update in case it exists.
     * 
    **/
    where: Order_ProductWhereUniqueInput
    /**
     * In case the Order_Product found by the `where` argument doesn't exist, create a new Order_Product with this data.
     * 
    **/
    create: XOR<Order_ProductCreateInput, Order_ProductUncheckedCreateInput>
    /**
     * In case the Order_Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Order_ProductUpdateInput, Order_ProductUncheckedUpdateInput>
  }


  /**
   * Order_Product delete
   */
  export type Order_ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
    /**
     * Filter which Order_Product to delete.
     * 
    **/
    where: Order_ProductWhereUniqueInput
  }


  /**
   * Order_Product deleteMany
   */
  export type Order_ProductDeleteManyArgs = {
    /**
     * Filter which Order_Products to delete
     * 
    **/
    where?: Order_ProductWhereInput
  }


  /**
   * Order_Product: findUniqueOrThrow
   */
  export type Order_ProductFindUniqueOrThrowArgs = Order_ProductFindUniqueArgsBase
      

  /**
   * Order_Product: findFirstOrThrow
   */
  export type Order_ProductFindFirstOrThrowArgs = Order_ProductFindFirstArgsBase
      

  /**
   * Order_Product without action
   */
  export type Order_ProductArgs = {
    /**
     * Select specific fields to fetch from the Order_Product
     * 
    **/
    select?: Order_ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Order_ProductInclude | null
  }



  /**
   * Model Orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    total_amount: Decimal | null
    total_weight: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    total_amount: Decimal | null
    total_weight: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    customer_name: string | null
    customer_email: string | null
    customer_address: string | null
    total_amount: Decimal | null
    total_weight: Decimal | null
    status: string | null
    date: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    customer_name: string | null
    customer_email: string | null
    customer_address: string | null
    total_amount: Decimal | null
    total_weight: Decimal | null
    status: string | null
    date: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    customer_name: number
    customer_email: number
    customer_address: number
    total_amount: number
    total_weight: number
    status: number
    date: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    total_amount?: true
    total_weight?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    total_amount?: true
    total_weight?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    customer_name?: true
    customer_email?: true
    customer_address?: true
    total_amount?: true
    total_weight?: true
    status?: true
    date?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    customer_name?: true
    customer_email?: true
    customer_address?: true
    total_amount?: true
    total_weight?: true
    status?: true
    date?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    customer_name?: true
    customer_email?: true
    customer_address?: true
    total_amount?: true
    total_weight?: true
    status?: true
    date?: true
    _all?: true
  }

  export type OrdersAggregateArgs = {
    /**
     * Filter which Orders to aggregate.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs = {
    where?: OrdersWhereInput
    orderBy?: Enumerable<OrdersOrderByWithAggregationInput>
    by: Array<OrdersScalarFieldEnum>
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    id: number
    customer_name: string
    customer_email: string
    customer_address: string
    total_amount: Decimal | null
    total_weight: Decimal | null
    status: string | null
    date: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect = {
    id?: boolean
    customer_name?: boolean
    customer_email?: boolean
    customer_address?: boolean
    total_amount?: boolean
    total_weight?: boolean
    status?: boolean
    date?: boolean
    Order_Product?: boolean | Order_ProductFindManyArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  }


  export type OrdersInclude = {
    Order_Product?: boolean | Order_ProductFindManyArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  } 

  export type OrdersGetPayload<S extends boolean | null | undefined | OrdersArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Orders :
    S extends undefined ? never :
    S extends { include: any } & (OrdersArgs | OrdersFindManyArgs)
    ? Orders  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Order_Product' ? Array < Order_ProductGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (OrdersArgs | OrdersFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Order_Product' ? Array < Order_ProductGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Orders ? Orders[P] : never
  } 
      : Orders


  type OrdersCountArgs = Merge<
    Omit<OrdersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }
  >

  export interface OrdersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrdersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrdersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Orders'> extends True ? Prisma__OrdersClient<OrdersGetPayload<T>> : Prisma__OrdersClient<OrdersGetPayload<T> | null, null>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrdersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrdersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Orders'> extends True ? Prisma__OrdersClient<OrdersGetPayload<T>> : Prisma__OrdersClient<OrdersGetPayload<T> | null, null>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrdersFindManyArgs>(
      args?: SelectSubset<T, OrdersFindManyArgs>
    ): PrismaPromise<Array<OrdersGetPayload<T>>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends OrdersCreateArgs>(
      args: SelectSubset<T, OrdersCreateArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrdersCreateManyArgs>(
      args?: SelectSubset<T, OrdersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends OrdersDeleteArgs>(
      args: SelectSubset<T, OrdersDeleteArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrdersUpdateArgs>(
      args: SelectSubset<T, OrdersUpdateArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrdersDeleteManyArgs>(
      args?: SelectSubset<T, OrdersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrdersUpdateManyArgs>(
      args: SelectSubset<T, OrdersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends OrdersUpsertArgs>(
      args: SelectSubset<T, OrdersUpsertArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Find one Orders that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrdersFindUniqueOrThrowArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Find the first Orders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrdersFindFirstOrThrowArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrdersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Order_Product<T extends Order_ProductFindManyArgs= {}>(args?: Subset<T, Order_ProductFindManyArgs>): PrismaPromise<Array<Order_ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Orders base type for findUnique actions
   */
  export type OrdersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders: findUnique
   */
  export interface OrdersFindUniqueArgs extends OrdersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders base type for findFirst actions
   */
  export type OrdersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }

  /**
   * Orders: findFirst
   */
  export interface OrdersFindFirstArgs extends OrdersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Orders create
   */
  export type OrdersCreateArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The data needed to create a Orders.
     * 
    **/
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }


  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs = {
    /**
     * The data used to create many Orders.
     * 
    **/
    data: Enumerable<OrdersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Orders update
   */
  export type OrdersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The data needed to update a Orders.
     * 
    **/
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs = {
    /**
     * The data used to update Orders.
     * 
    **/
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     * 
    **/
    where?: OrdersWhereInput
  }


  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The filter to search for the Orders to update in case it exists.
     * 
    **/
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     * 
    **/
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }


  /**
   * Orders delete
   */
  export type OrdersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter which Orders to delete.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     * 
    **/
    where?: OrdersWhereInput
  }


  /**
   * Orders: findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs = OrdersFindUniqueArgsBase
      

  /**
   * Orders: findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs = OrdersFindFirstArgsBase
      

  /**
   * Orders without action
   */
  export type OrdersArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    email: string | null
    password: string | null
    status: string | null
  }

  export type UsersMaxAggregateOutputType = {
    email: string | null
    password: string | null
    status: string | null
  }

  export type UsersCountAggregateOutputType = {
    email: number
    password: number
    status: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    email?: true
    password?: true
    status?: true
  }

  export type UsersMaxAggregateInputType = {
    email?: true
    password?: true
    status?: true
  }

  export type UsersCountAggregateInputType = {
    email?: true
    password?: true
    status?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    email: string
    password: string
    status: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    email?: boolean
    password?: boolean
    status?: boolean
  }


  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const usersWithEmailOnly = await prisma.users.findMany({ select: { email: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find one Users that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }

  /**
   * Users: findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users: findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users: findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = UsersFindUniqueArgsBase
      

  /**
   * Users: findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = UsersFindFirstArgsBase
      

  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
  }



  /**
   * Model Weight
   */


  export type AggregateWeight = {
    _count: WeightCountAggregateOutputType | null
    _avg: WeightAvgAggregateOutputType | null
    _sum: WeightSumAggregateOutputType | null
    _min: WeightMinAggregateOutputType | null
    _max: WeightMaxAggregateOutputType | null
  }

  export type WeightAvgAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    cost: Decimal | null
  }

  export type WeightSumAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    cost: Decimal | null
  }

  export type WeightMinAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    cost: Decimal | null
  }

  export type WeightMaxAggregateOutputType = {
    id: number | null
    weight: Decimal | null
    cost: Decimal | null
  }

  export type WeightCountAggregateOutputType = {
    id: number
    weight: number
    cost: number
    _all: number
  }


  export type WeightAvgAggregateInputType = {
    id?: true
    weight?: true
    cost?: true
  }

  export type WeightSumAggregateInputType = {
    id?: true
    weight?: true
    cost?: true
  }

  export type WeightMinAggregateInputType = {
    id?: true
    weight?: true
    cost?: true
  }

  export type WeightMaxAggregateInputType = {
    id?: true
    weight?: true
    cost?: true
  }

  export type WeightCountAggregateInputType = {
    id?: true
    weight?: true
    cost?: true
    _all?: true
  }

  export type WeightAggregateArgs = {
    /**
     * Filter which Weight to aggregate.
     * 
    **/
    where?: WeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weights to fetch.
     * 
    **/
    orderBy?: Enumerable<WeightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weights from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weights.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weights
    **/
    _count?: true | WeightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightMaxAggregateInputType
  }

  export type GetWeightAggregateType<T extends WeightAggregateArgs> = {
        [P in keyof T & keyof AggregateWeight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeight[P]>
      : GetScalarType<T[P], AggregateWeight[P]>
  }




  export type WeightGroupByArgs = {
    where?: WeightWhereInput
    orderBy?: Enumerable<WeightOrderByWithAggregationInput>
    by: Array<WeightScalarFieldEnum>
    having?: WeightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightCountAggregateInputType | true
    _avg?: WeightAvgAggregateInputType
    _sum?: WeightSumAggregateInputType
    _min?: WeightMinAggregateInputType
    _max?: WeightMaxAggregateInputType
  }


  export type WeightGroupByOutputType = {
    id: number
    weight: Decimal | null
    cost: Decimal | null
    _count: WeightCountAggregateOutputType | null
    _avg: WeightAvgAggregateOutputType | null
    _sum: WeightSumAggregateOutputType | null
    _min: WeightMinAggregateOutputType | null
    _max: WeightMaxAggregateOutputType | null
  }

  type GetWeightGroupByPayload<T extends WeightGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WeightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightGroupByOutputType[P]>
            : GetScalarType<T[P], WeightGroupByOutputType[P]>
        }
      >
    >


  export type WeightSelect = {
    id?: boolean
    weight?: boolean
    cost?: boolean
  }


  export type WeightGetPayload<S extends boolean | null | undefined | WeightArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Weight :
    S extends undefined ? never :
    S extends { include: any } & (WeightArgs | WeightFindManyArgs)
    ? Weight 
    : S extends { select: any } & (WeightArgs | WeightFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Weight ? Weight[P] : never
  } 
      : Weight


  type WeightCountArgs = Merge<
    Omit<WeightFindManyArgs, 'select' | 'include'> & {
      select?: WeightCountAggregateInputType | true
    }
  >

  export interface WeightDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Weight that matches the filter.
     * @param {WeightFindUniqueArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeightFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WeightFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Weight'> extends True ? Prisma__WeightClient<WeightGetPayload<T>> : Prisma__WeightClient<WeightGetPayload<T> | null, null>

    /**
     * Find the first Weight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightFindFirstArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeightFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WeightFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Weight'> extends True ? Prisma__WeightClient<WeightGetPayload<T>> : Prisma__WeightClient<WeightGetPayload<T> | null, null>

    /**
     * Find zero or more Weights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weights
     * const weights = await prisma.weight.findMany()
     * 
     * // Get first 10 Weights
     * const weights = await prisma.weight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightWithIdOnly = await prisma.weight.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeightFindManyArgs>(
      args?: SelectSubset<T, WeightFindManyArgs>
    ): PrismaPromise<Array<WeightGetPayload<T>>>

    /**
     * Create a Weight.
     * @param {WeightCreateArgs} args - Arguments to create a Weight.
     * @example
     * // Create one Weight
     * const Weight = await prisma.weight.create({
     *   data: {
     *     // ... data to create a Weight
     *   }
     * })
     * 
    **/
    create<T extends WeightCreateArgs>(
      args: SelectSubset<T, WeightCreateArgs>
    ): Prisma__WeightClient<WeightGetPayload<T>>

    /**
     * Create many Weights.
     *     @param {WeightCreateManyArgs} args - Arguments to create many Weights.
     *     @example
     *     // Create many Weights
     *     const weight = await prisma.weight.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WeightCreateManyArgs>(
      args?: SelectSubset<T, WeightCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Weight.
     * @param {WeightDeleteArgs} args - Arguments to delete one Weight.
     * @example
     * // Delete one Weight
     * const Weight = await prisma.weight.delete({
     *   where: {
     *     // ... filter to delete one Weight
     *   }
     * })
     * 
    **/
    delete<T extends WeightDeleteArgs>(
      args: SelectSubset<T, WeightDeleteArgs>
    ): Prisma__WeightClient<WeightGetPayload<T>>

    /**
     * Update one Weight.
     * @param {WeightUpdateArgs} args - Arguments to update one Weight.
     * @example
     * // Update one Weight
     * const weight = await prisma.weight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeightUpdateArgs>(
      args: SelectSubset<T, WeightUpdateArgs>
    ): Prisma__WeightClient<WeightGetPayload<T>>

    /**
     * Delete zero or more Weights.
     * @param {WeightDeleteManyArgs} args - Arguments to filter Weights to delete.
     * @example
     * // Delete a few Weights
     * const { count } = await prisma.weight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeightDeleteManyArgs>(
      args?: SelectSubset<T, WeightDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weights
     * const weight = await prisma.weight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeightUpdateManyArgs>(
      args: SelectSubset<T, WeightUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Weight.
     * @param {WeightUpsertArgs} args - Arguments to update or create a Weight.
     * @example
     * // Update or create a Weight
     * const weight = await prisma.weight.upsert({
     *   create: {
     *     // ... data to create a Weight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weight we want to update
     *   }
     * })
    **/
    upsert<T extends WeightUpsertArgs>(
      args: SelectSubset<T, WeightUpsertArgs>
    ): Prisma__WeightClient<WeightGetPayload<T>>

    /**
     * Find one Weight that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WeightFindUniqueOrThrowArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WeightFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WeightFindUniqueOrThrowArgs>
    ): Prisma__WeightClient<WeightGetPayload<T>>

    /**
     * Find the first Weight that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightFindFirstOrThrowArgs} args - Arguments to find a Weight
     * @example
     * // Get one Weight
     * const weight = await prisma.weight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WeightFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WeightFindFirstOrThrowArgs>
    ): Prisma__WeightClient<WeightGetPayload<T>>

    /**
     * Count the number of Weights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightCountArgs} args - Arguments to filter Weights to count.
     * @example
     * // Count the number of Weights
     * const count = await prisma.weight.count({
     *   where: {
     *     // ... the filter for the Weights we want to count
     *   }
     * })
    **/
    count<T extends WeightCountArgs>(
      args?: Subset<T, WeightCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeightAggregateArgs>(args: Subset<T, WeightAggregateArgs>): PrismaPromise<GetWeightAggregateType<T>>

    /**
     * Group by Weight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightGroupByArgs} args - Group by arguments.
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
      T extends WeightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightGroupByArgs['orderBy'] }
        : { orderBy?: WeightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WeightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Weight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WeightClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Weight base type for findUnique actions
   */
  export type WeightFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
    /**
     * Filter, which Weight to fetch.
     * 
    **/
    where: WeightWhereUniqueInput
  }

  /**
   * Weight: findUnique
   */
  export interface WeightFindUniqueArgs extends WeightFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Weight base type for findFirst actions
   */
  export type WeightFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
    /**
     * Filter, which Weight to fetch.
     * 
    **/
    where?: WeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weights to fetch.
     * 
    **/
    orderBy?: Enumerable<WeightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weights.
     * 
    **/
    cursor?: WeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weights from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weights.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weights.
     * 
    **/
    distinct?: Enumerable<WeightScalarFieldEnum>
  }

  /**
   * Weight: findFirst
   */
  export interface WeightFindFirstArgs extends WeightFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Weight findMany
   */
  export type WeightFindManyArgs = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
    /**
     * Filter, which Weights to fetch.
     * 
    **/
    where?: WeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weights to fetch.
     * 
    **/
    orderBy?: Enumerable<WeightOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weights.
     * 
    **/
    cursor?: WeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weights from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weights.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WeightScalarFieldEnum>
  }


  /**
   * Weight create
   */
  export type WeightCreateArgs = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
    /**
     * The data needed to create a Weight.
     * 
    **/
    data: XOR<WeightCreateInput, WeightUncheckedCreateInput>
  }


  /**
   * Weight createMany
   */
  export type WeightCreateManyArgs = {
    /**
     * The data used to create many Weights.
     * 
    **/
    data: Enumerable<WeightCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Weight update
   */
  export type WeightUpdateArgs = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
    /**
     * The data needed to update a Weight.
     * 
    **/
    data: XOR<WeightUpdateInput, WeightUncheckedUpdateInput>
    /**
     * Choose, which Weight to update.
     * 
    **/
    where: WeightWhereUniqueInput
  }


  /**
   * Weight updateMany
   */
  export type WeightUpdateManyArgs = {
    /**
     * The data used to update Weights.
     * 
    **/
    data: XOR<WeightUpdateManyMutationInput, WeightUncheckedUpdateManyInput>
    /**
     * Filter which Weights to update
     * 
    **/
    where?: WeightWhereInput
  }


  /**
   * Weight upsert
   */
  export type WeightUpsertArgs = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
    /**
     * The filter to search for the Weight to update in case it exists.
     * 
    **/
    where: WeightWhereUniqueInput
    /**
     * In case the Weight found by the `where` argument doesn't exist, create a new Weight with this data.
     * 
    **/
    create: XOR<WeightCreateInput, WeightUncheckedCreateInput>
    /**
     * In case the Weight was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WeightUpdateInput, WeightUncheckedUpdateInput>
  }


  /**
   * Weight delete
   */
  export type WeightDeleteArgs = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
    /**
     * Filter which Weight to delete.
     * 
    **/
    where: WeightWhereUniqueInput
  }


  /**
   * Weight deleteMany
   */
  export type WeightDeleteManyArgs = {
    /**
     * Filter which Weights to delete
     * 
    **/
    where?: WeightWhereInput
  }


  /**
   * Weight: findUniqueOrThrow
   */
  export type WeightFindUniqueOrThrowArgs = WeightFindUniqueArgsBase
      

  /**
   * Weight: findFirstOrThrow
   */
  export type WeightFindFirstOrThrowArgs = WeightFindFirstArgsBase
      

  /**
   * Weight without action
   */
  export type WeightArgs = {
    /**
     * Select specific fields to fetch from the Weight
     * 
    **/
    select?: WeightSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const InventoryScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const Order_ProductScalarFieldEnum: {
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity'
  };

  export type Order_ProductScalarFieldEnum = (typeof Order_ProductScalarFieldEnum)[keyof typeof Order_ProductScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    customer_name: 'customer_name',
    customer_email: 'customer_email',
    customer_address: 'customer_address',
    total_amount: 'total_amount',
    total_weight: 'total_weight',
    status: 'status',
    date: 'date'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    email: 'email',
    password: 'password',
    status: 'status'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WeightScalarFieldEnum: {
    id: 'id',
    weight: 'weight',
    cost: 'cost'
  };

  export type WeightScalarFieldEnum = (typeof WeightScalarFieldEnum)[keyof typeof WeightScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type InventoryWhereInput = {
    AND?: Enumerable<InventoryWhereInput>
    OR?: Enumerable<InventoryWhereInput>
    NOT?: Enumerable<InventoryWhereInput>
    id?: IntFilter | number
    quantity?: IntNullableFilter | number | null
    Order_Product?: Order_ProductListRelationFilter
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    Order_Product?: Order_ProductOrderByRelationAggregateInput
  }

  export type InventoryWhereUniqueInput = {
    id?: number
  }

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InventoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<InventoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InventoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quantity?: IntNullableWithAggregatesFilter | number | null
  }

  export type Order_ProductWhereInput = {
    AND?: Enumerable<Order_ProductWhereInput>
    OR?: Enumerable<Order_ProductWhereInput>
    NOT?: Enumerable<Order_ProductWhereInput>
    order_id?: IntFilter | number
    product_id?: IntFilter | number
    quantity?: IntFilter | number
    Orders?: XOR<OrdersRelationFilter, OrdersWhereInput>
    Inventory?: XOR<InventoryRelationFilter, InventoryWhereInput>
  }

  export type Order_ProductOrderByWithRelationInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    Orders?: OrdersOrderByWithRelationInput
    Inventory?: InventoryOrderByWithRelationInput
  }

  export type Order_ProductWhereUniqueInput = {
    order_id_product_id?: Order_ProductOrder_idProduct_idCompoundUniqueInput
  }

  export type Order_ProductOrderByWithAggregationInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    _count?: Order_ProductCountOrderByAggregateInput
    _avg?: Order_ProductAvgOrderByAggregateInput
    _max?: Order_ProductMaxOrderByAggregateInput
    _min?: Order_ProductMinOrderByAggregateInput
    _sum?: Order_ProductSumOrderByAggregateInput
  }

  export type Order_ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Order_ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<Order_ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Order_ProductScalarWhereWithAggregatesInput>
    order_id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
  }

  export type OrdersWhereInput = {
    AND?: Enumerable<OrdersWhereInput>
    OR?: Enumerable<OrdersWhereInput>
    NOT?: Enumerable<OrdersWhereInput>
    id?: IntFilter | number
    customer_name?: StringFilter | string
    customer_email?: StringFilter | string
    customer_address?: StringFilter | string
    total_amount?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    total_weight?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter | string | null
    date?: DateTimeNullableFilter | Date | string | null
    Order_Product?: Order_ProductListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_address?: SortOrder
    total_amount?: SortOrder
    total_weight?: SortOrder
    status?: SortOrder
    date?: SortOrder
    Order_Product?: Order_ProductOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = {
    id?: number
  }

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_address?: SortOrder
    total_amount?: SortOrder
    total_weight?: SortOrder
    status?: SortOrder
    date?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    customer_name?: StringWithAggregatesFilter | string
    customer_email?: StringWithAggregatesFilter | string
    customer_address?: StringWithAggregatesFilter | string
    total_amount?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    total_weight?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter | string | null
    date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    email?: StringFilter | string
    password?: StringFilter | string
    status?: StringNullableFilter | string | null
  }

  export type UsersOrderByWithRelationInput = {
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type UsersWhereUniqueInput = {
    email?: string
  }

  export type UsersOrderByWithAggregationInput = {
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    status?: StringNullableWithAggregatesFilter | string | null
  }

  export type WeightWhereInput = {
    AND?: Enumerable<WeightWhereInput>
    OR?: Enumerable<WeightWhereInput>
    NOT?: Enumerable<WeightWhereInput>
    id?: IntFilter | number
    weight?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    cost?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type WeightOrderByWithRelationInput = {
    id?: SortOrder
    weight?: SortOrder
    cost?: SortOrder
  }

  export type WeightWhereUniqueInput = {
    id?: number
  }

  export type WeightOrderByWithAggregationInput = {
    id?: SortOrder
    weight?: SortOrder
    cost?: SortOrder
    _count?: WeightCountOrderByAggregateInput
    _avg?: WeightAvgOrderByAggregateInput
    _max?: WeightMaxOrderByAggregateInput
    _min?: WeightMinOrderByAggregateInput
    _sum?: WeightSumOrderByAggregateInput
  }

  export type WeightScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WeightScalarWhereWithAggregatesInput>
    OR?: Enumerable<WeightScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WeightScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    weight?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    cost?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type InventoryCreateInput = {
    id: number
    quantity?: number | null
    Order_Product?: Order_ProductCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id: number
    quantity?: number | null
    Order_Product?: Order_ProductUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Order_Product?: Order_ProductUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Order_Product?: Order_ProductUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    id: number
    quantity?: number | null
  }

  export type InventoryUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Order_ProductCreateInput = {
    quantity: number
    Orders: OrdersCreateNestedOneWithoutOrder_ProductInput
    Inventory: InventoryCreateNestedOneWithoutOrder_ProductInput
  }

  export type Order_ProductUncheckedCreateInput = {
    order_id: number
    product_id: number
    quantity: number
  }

  export type Order_ProductUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    Orders?: OrdersUpdateOneRequiredWithoutOrder_ProductNestedInput
    Inventory?: InventoryUpdateOneRequiredWithoutOrder_ProductNestedInput
  }

  export type Order_ProductUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Order_ProductCreateManyInput = {
    order_id: number
    product_id: number
    quantity: number
  }

  export type Order_ProductUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Order_ProductUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    customer_name: string
    customer_email: string
    customer_address: string
    total_amount?: Decimal | DecimalJsLike | number | string | null
    total_weight?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    date?: Date | string | null
    Order_Product?: Order_ProductCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    customer_name: string
    customer_email: string
    customer_address: string
    total_amount?: Decimal | DecimalJsLike | number | string | null
    total_weight?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    date?: Date | string | null
    Order_Product?: Order_ProductUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_address?: StringFieldUpdateOperationsInput | string
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order_Product?: Order_ProductUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_address?: StringFieldUpdateOperationsInput | string
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order_Product?: Order_ProductUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    customer_name: string
    customer_email: string
    customer_address: string
    total_amount?: Decimal | DecimalJsLike | number | string | null
    total_weight?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    date?: Date | string | null
  }

  export type OrdersUpdateManyMutationInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_address?: StringFieldUpdateOperationsInput | string
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_address?: StringFieldUpdateOperationsInput | string
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    email: string
    password: string
    status?: string | null
  }

  export type UsersUncheckedCreateInput = {
    email: string
    password: string
    status?: string | null
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyInput = {
    email: string
    password: string
    status?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeightCreateInput = {
    weight?: Decimal | DecimalJsLike | number | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type WeightUncheckedCreateInput = {
    id?: number
    weight?: Decimal | DecimalJsLike | number | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type WeightUpdateInput = {
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type WeightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type WeightCreateManyInput = {
    id?: number
    weight?: Decimal | DecimalJsLike | number | string | null
    cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type WeightUpdateManyMutationInput = {
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type WeightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type Order_ProductListRelationFilter = {
    every?: Order_ProductWhereInput
    some?: Order_ProductWhereInput
    none?: Order_ProductWhereInput
  }

  export type Order_ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type InventoryRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type Order_ProductOrder_idProduct_idCompoundUniqueInput = {
    order_id: number
    product_id: number
  }

  export type Order_ProductCountOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Order_ProductAvgOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Order_ProductMaxOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Order_ProductMinOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Order_ProductSumOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_address?: SortOrder
    total_amount?: SortOrder
    total_weight?: SortOrder
    status?: SortOrder
    date?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    total_amount?: SortOrder
    total_weight?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_address?: SortOrder
    total_amount?: SortOrder
    total_weight?: SortOrder
    status?: SortOrder
    date?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_address?: SortOrder
    total_amount?: SortOrder
    total_weight?: SortOrder
    status?: SortOrder
    date?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    total_amount?: SortOrder
    total_weight?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type UsersCountOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type WeightCountOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    cost?: SortOrder
  }

  export type WeightAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    cost?: SortOrder
  }

  export type WeightMaxOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    cost?: SortOrder
  }

  export type WeightMinOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    cost?: SortOrder
  }

  export type WeightSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    cost?: SortOrder
  }

  export type Order_ProductCreateNestedManyWithoutInventoryInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutInventoryInput>, Enumerable<Order_ProductUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutInventoryInput>
    createMany?: Order_ProductCreateManyInventoryInputEnvelope
    connect?: Enumerable<Order_ProductWhereUniqueInput>
  }

  export type Order_ProductUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutInventoryInput>, Enumerable<Order_ProductUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutInventoryInput>
    createMany?: Order_ProductCreateManyInventoryInputEnvelope
    connect?: Enumerable<Order_ProductWhereUniqueInput>
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

  export type Order_ProductUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutInventoryInput>, Enumerable<Order_ProductUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutInventoryInput>
    upsert?: Enumerable<Order_ProductUpsertWithWhereUniqueWithoutInventoryInput>
    createMany?: Order_ProductCreateManyInventoryInputEnvelope
    set?: Enumerable<Order_ProductWhereUniqueInput>
    disconnect?: Enumerable<Order_ProductWhereUniqueInput>
    delete?: Enumerable<Order_ProductWhereUniqueInput>
    connect?: Enumerable<Order_ProductWhereUniqueInput>
    update?: Enumerable<Order_ProductUpdateWithWhereUniqueWithoutInventoryInput>
    updateMany?: Enumerable<Order_ProductUpdateManyWithWhereWithoutInventoryInput>
    deleteMany?: Enumerable<Order_ProductScalarWhereInput>
  }

  export type Order_ProductUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutInventoryInput>, Enumerable<Order_ProductUncheckedCreateWithoutInventoryInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutInventoryInput>
    upsert?: Enumerable<Order_ProductUpsertWithWhereUniqueWithoutInventoryInput>
    createMany?: Order_ProductCreateManyInventoryInputEnvelope
    set?: Enumerable<Order_ProductWhereUniqueInput>
    disconnect?: Enumerable<Order_ProductWhereUniqueInput>
    delete?: Enumerable<Order_ProductWhereUniqueInput>
    connect?: Enumerable<Order_ProductWhereUniqueInput>
    update?: Enumerable<Order_ProductUpdateWithWhereUniqueWithoutInventoryInput>
    updateMany?: Enumerable<Order_ProductUpdateManyWithWhereWithoutInventoryInput>
    deleteMany?: Enumerable<Order_ProductScalarWhereInput>
  }

  export type OrdersCreateNestedOneWithoutOrder_ProductInput = {
    create?: XOR<OrdersCreateWithoutOrder_ProductInput, OrdersUncheckedCreateWithoutOrder_ProductInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_ProductInput
    connect?: OrdersWhereUniqueInput
  }

  export type InventoryCreateNestedOneWithoutOrder_ProductInput = {
    create?: XOR<InventoryCreateWithoutOrder_ProductInput, InventoryUncheckedCreateWithoutOrder_ProductInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutOrder_ProductInput
    connect?: InventoryWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrder_ProductNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_ProductInput, OrdersUncheckedCreateWithoutOrder_ProductInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_ProductInput
    upsert?: OrdersUpsertWithoutOrder_ProductInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<OrdersUpdateWithoutOrder_ProductInput, OrdersUncheckedUpdateWithoutOrder_ProductInput>
  }

  export type InventoryUpdateOneRequiredWithoutOrder_ProductNestedInput = {
    create?: XOR<InventoryCreateWithoutOrder_ProductInput, InventoryUncheckedCreateWithoutOrder_ProductInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutOrder_ProductInput
    upsert?: InventoryUpsertWithoutOrder_ProductInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<InventoryUpdateWithoutOrder_ProductInput, InventoryUncheckedUpdateWithoutOrder_ProductInput>
  }

  export type Order_ProductCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutOrdersInput>, Enumerable<Order_ProductUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutOrdersInput>
    createMany?: Order_ProductCreateManyOrdersInputEnvelope
    connect?: Enumerable<Order_ProductWhereUniqueInput>
  }

  export type Order_ProductUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutOrdersInput>, Enumerable<Order_ProductUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutOrdersInput>
    createMany?: Order_ProductCreateManyOrdersInputEnvelope
    connect?: Enumerable<Order_ProductWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Order_ProductUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutOrdersInput>, Enumerable<Order_ProductUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutOrdersInput>
    upsert?: Enumerable<Order_ProductUpsertWithWhereUniqueWithoutOrdersInput>
    createMany?: Order_ProductCreateManyOrdersInputEnvelope
    set?: Enumerable<Order_ProductWhereUniqueInput>
    disconnect?: Enumerable<Order_ProductWhereUniqueInput>
    delete?: Enumerable<Order_ProductWhereUniqueInput>
    connect?: Enumerable<Order_ProductWhereUniqueInput>
    update?: Enumerable<Order_ProductUpdateWithWhereUniqueWithoutOrdersInput>
    updateMany?: Enumerable<Order_ProductUpdateManyWithWhereWithoutOrdersInput>
    deleteMany?: Enumerable<Order_ProductScalarWhereInput>
  }

  export type Order_ProductUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Enumerable<Order_ProductCreateWithoutOrdersInput>, Enumerable<Order_ProductUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Order_ProductCreateOrConnectWithoutOrdersInput>
    upsert?: Enumerable<Order_ProductUpsertWithWhereUniqueWithoutOrdersInput>
    createMany?: Order_ProductCreateManyOrdersInputEnvelope
    set?: Enumerable<Order_ProductWhereUniqueInput>
    disconnect?: Enumerable<Order_ProductWhereUniqueInput>
    delete?: Enumerable<Order_ProductWhereUniqueInput>
    connect?: Enumerable<Order_ProductWhereUniqueInput>
    update?: Enumerable<Order_ProductUpdateWithWhereUniqueWithoutOrdersInput>
    updateMany?: Enumerable<Order_ProductUpdateManyWithWhereWithoutOrdersInput>
    deleteMany?: Enumerable<Order_ProductScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type Order_ProductCreateWithoutInventoryInput = {
    quantity: number
    Orders: OrdersCreateNestedOneWithoutOrder_ProductInput
  }

  export type Order_ProductUncheckedCreateWithoutInventoryInput = {
    order_id: number
    quantity: number
  }

  export type Order_ProductCreateOrConnectWithoutInventoryInput = {
    where: Order_ProductWhereUniqueInput
    create: XOR<Order_ProductCreateWithoutInventoryInput, Order_ProductUncheckedCreateWithoutInventoryInput>
  }

  export type Order_ProductCreateManyInventoryInputEnvelope = {
    data: Enumerable<Order_ProductCreateManyInventoryInput>
    skipDuplicates?: boolean
  }

  export type Order_ProductUpsertWithWhereUniqueWithoutInventoryInput = {
    where: Order_ProductWhereUniqueInput
    update: XOR<Order_ProductUpdateWithoutInventoryInput, Order_ProductUncheckedUpdateWithoutInventoryInput>
    create: XOR<Order_ProductCreateWithoutInventoryInput, Order_ProductUncheckedCreateWithoutInventoryInput>
  }

  export type Order_ProductUpdateWithWhereUniqueWithoutInventoryInput = {
    where: Order_ProductWhereUniqueInput
    data: XOR<Order_ProductUpdateWithoutInventoryInput, Order_ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type Order_ProductUpdateManyWithWhereWithoutInventoryInput = {
    where: Order_ProductScalarWhereInput
    data: XOR<Order_ProductUpdateManyMutationInput, Order_ProductUncheckedUpdateManyWithoutOrder_ProductInput>
  }

  export type Order_ProductScalarWhereInput = {
    AND?: Enumerable<Order_ProductScalarWhereInput>
    OR?: Enumerable<Order_ProductScalarWhereInput>
    NOT?: Enumerable<Order_ProductScalarWhereInput>
    order_id?: IntFilter | number
    product_id?: IntFilter | number
    quantity?: IntFilter | number
  }

  export type OrdersCreateWithoutOrder_ProductInput = {
    customer_name: string
    customer_email: string
    customer_address: string
    total_amount?: Decimal | DecimalJsLike | number | string | null
    total_weight?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    date?: Date | string | null
  }

  export type OrdersUncheckedCreateWithoutOrder_ProductInput = {
    id?: number
    customer_name: string
    customer_email: string
    customer_address: string
    total_amount?: Decimal | DecimalJsLike | number | string | null
    total_weight?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    date?: Date | string | null
  }

  export type OrdersCreateOrConnectWithoutOrder_ProductInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_ProductInput, OrdersUncheckedCreateWithoutOrder_ProductInput>
  }

  export type InventoryCreateWithoutOrder_ProductInput = {
    id: number
    quantity?: number | null
  }

  export type InventoryUncheckedCreateWithoutOrder_ProductInput = {
    id: number
    quantity?: number | null
  }

  export type InventoryCreateOrConnectWithoutOrder_ProductInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutOrder_ProductInput, InventoryUncheckedCreateWithoutOrder_ProductInput>
  }

  export type OrdersUpsertWithoutOrder_ProductInput = {
    update: XOR<OrdersUpdateWithoutOrder_ProductInput, OrdersUncheckedUpdateWithoutOrder_ProductInput>
    create: XOR<OrdersCreateWithoutOrder_ProductInput, OrdersUncheckedCreateWithoutOrder_ProductInput>
  }

  export type OrdersUpdateWithoutOrder_ProductInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_address?: StringFieldUpdateOperationsInput | string
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersUncheckedUpdateWithoutOrder_ProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_address?: StringFieldUpdateOperationsInput | string
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryUpsertWithoutOrder_ProductInput = {
    update: XOR<InventoryUpdateWithoutOrder_ProductInput, InventoryUncheckedUpdateWithoutOrder_ProductInput>
    create: XOR<InventoryCreateWithoutOrder_ProductInput, InventoryUncheckedCreateWithoutOrder_ProductInput>
  }

  export type InventoryUpdateWithoutOrder_ProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUncheckedUpdateWithoutOrder_ProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Order_ProductCreateWithoutOrdersInput = {
    quantity: number
    Inventory: InventoryCreateNestedOneWithoutOrder_ProductInput
  }

  export type Order_ProductUncheckedCreateWithoutOrdersInput = {
    product_id: number
    quantity: number
  }

  export type Order_ProductCreateOrConnectWithoutOrdersInput = {
    where: Order_ProductWhereUniqueInput
    create: XOR<Order_ProductCreateWithoutOrdersInput, Order_ProductUncheckedCreateWithoutOrdersInput>
  }

  export type Order_ProductCreateManyOrdersInputEnvelope = {
    data: Enumerable<Order_ProductCreateManyOrdersInput>
    skipDuplicates?: boolean
  }

  export type Order_ProductUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Order_ProductWhereUniqueInput
    update: XOR<Order_ProductUpdateWithoutOrdersInput, Order_ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<Order_ProductCreateWithoutOrdersInput, Order_ProductUncheckedCreateWithoutOrdersInput>
  }

  export type Order_ProductUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Order_ProductWhereUniqueInput
    data: XOR<Order_ProductUpdateWithoutOrdersInput, Order_ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type Order_ProductUpdateManyWithWhereWithoutOrdersInput = {
    where: Order_ProductScalarWhereInput
    data: XOR<Order_ProductUpdateManyMutationInput, Order_ProductUncheckedUpdateManyWithoutOrder_ProductInput>
  }

  export type Order_ProductCreateManyInventoryInput = {
    order_id: number
    quantity: number
  }

  export type Order_ProductUpdateWithoutInventoryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    Orders?: OrdersUpdateOneRequiredWithoutOrder_ProductNestedInput
  }

  export type Order_ProductUncheckedUpdateWithoutInventoryInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Order_ProductUncheckedUpdateManyWithoutOrder_ProductInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Order_ProductCreateManyOrdersInput = {
    product_id: number
    quantity: number
  }

  export type Order_ProductUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    Inventory?: InventoryUpdateOneRequiredWithoutOrder_ProductNestedInput
  }

  export type Order_ProductUncheckedUpdateWithoutOrdersInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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
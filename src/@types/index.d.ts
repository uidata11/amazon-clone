type Message = string | null;

type Func<T = void> = () => T;

type PropsFunc<P = any, T = void> = (props: P) => T;

PropsFunc<string, string>;

export * as ProductItem from "./product";

type Fn1<T = void> = (name: string) => T;

const fn1: Fn1 = (name: string): string => {
  console.log("hello", name);
  return name;
};

// const n = fn1("world");
// console.log(n);

const fn2: Fn1 = (name: string): string => {
  return name;
};
fn2("aa");

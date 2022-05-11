/**
 * union & intersection
 */

// union: 여러가지 타입을 가짐
 function sayAndReturnNumberOrString(phrase: number | string) {
  console.log(`Hey, ${phrase}`);
  return phrase;
}

interface ExtraConfig {
  encrypt: boolean;
  dbName: string;
}

function printDBConfig(config: IDBConfig & ExtraConfig) {
  console.log(config);
}

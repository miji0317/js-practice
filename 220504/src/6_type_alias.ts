/**
 * type alias: 나만의 타입 생성
 */
type ID = string | number;

type Input = string;

// 인터페이스는 확장성이 고려됨, type은 확장성 고려 X
type Point = {
  x: number;
  y: number;
}

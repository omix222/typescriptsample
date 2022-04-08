function hello(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(hello("TypeScript"));

  interface Pointlike {
      x:number;
      y:number;
  }

  interface Named {
      name:String;
  }
  function logPoint (point:Pointlike) {
      console.log("X = "+point.x+",Y="+point.y);
  }
  function logName(x: Named) {
    console.log("Hello, " + x.name);
  }
  //PointlikeインターフェースとNamedインターフェースの両方の特性を持つ形で定義
  //構造的型システム（オブジェクトの構造が同じであれば型に互換性があるということ）
  const obj = {
      x:0,
      y:100,
      name:"Origin",
  };
  logPoint(obj);
  logName(obj);

  let num = 123;
  //以下とすると、エラー   src/index.ts:31:3 - error TS2322: Type 'string' is not assignable to type 'number'.
  //num = "aaa";
  let num2:number =12;
  //以下も型相違でエラー
  //let num3:number="1";

  //クラスの書き方
  class Person {
      name:string;
      age:number;
      constructor(name:string,age:number) {
          this.name=name;
          this.age=age;
      }
  }
  // new で生成する
  const p1 = new Person("hogehoge",1);
  logName(p1);


  enum SEASONS{SPRING, SUMMER, AUTUMN, WINTER};
  console.log(SEASONS.AUTUMN);
let season:SEASONS;         
season = SEASONS.SUMMER;    
if(season == SEASONS.SUMMER){
  console.log("夏ですね");
} else {
  console.log("夏ではないですね");
}

// 型が不明な値に型付けを行うことができます
interface Person {
    name: string;
    age: number;
}
let foo = <Person>{}
foo.name = "Yamada";    // 型アサーションが無いとエラーになる
let bar = {} as Person
bar.name = "Yamada";    // 型アサーションが無いとエラーになる

//ジェネリクス
function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
//reversed[0] = '1';     // Error!
//reversed = ['1', '2']; // Error!

reversed[0] = 1;       // Okay
console.log(reversed);
reversed = [1, 2];     // Okay
console.log(reversed);
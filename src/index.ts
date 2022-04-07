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
  const obj = {
      x:0,
      y:100,
      name:"Origin",
  };
  logPoint(obj);
  logName(obj);

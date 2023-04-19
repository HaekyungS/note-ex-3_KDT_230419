let basicData = {
  header: {},
  main: {},
  footer: {},
};

let fromJsonData = {
  header: {
    content: "header 부분 입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc",
    },
  },
  main: {
    content: "main 부분 입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333",
    },
  },
  footer: {
    content: "footer 부분 입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666",
    },
  },
};

function exampleOne(basicData, fromJsonData) {
  let value = "";
  let basicDataKeys = Object.keys(basicData);
  // 객체의 키값만큼 반복문을 하려고 키값을 배열로 담았다.

  for (let i = 0; i < basicDataKeys.length; i++) {
    // console.log(fromJsonData[basicDataKeys[i]])
    // 어떤 식으로 값이 나올 지 확인.
    // console.log(fromJsonData[basicDataKeys[i]].style)
    // 해당 객체 스타일도 출력이 어떻게 되는지 확인

    let style = "";
    // style에 대한 string을 만들기 위해 변수선언

    for (let key in fromJsonData[basicDataKeys[i]].style) {
      style += `${key}:${fromJsonData[basicDataKeys[i]].style[key]};`;
      // style 변수에 innerHTML에 넣어 적용이 가능하도록 style을 작성
    }
    // console.log(style)
    // 출력본 확인

    value += `<${basicDataKeys[i]} style="${style}"> ${
      fromJsonData[basicDataKeys[i]].content
    } </${basicDataKeys[i]}>`;
    // value에 innerHTML 에 작성하는 string처럼 조합을 해줌.
    // <태그명 스타일> 컨텐트 </태그명>
  }

  return value;
  // value 만 리턴
}

// console.log(exampleOne(basicData, fromJsonData));
// 최종 함수호출 시 출력되는 값 확인

const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);

class ExampleTwo {
  constructor(x, y) {
    // 객체 혹은  JSON을 생성하기 위한 함수, 클래스 작성.
    // 문자열을 인스턴스로 받는다 -> 걔를 JSON 혹은 객체화를 한다.
    this.x = x;
    this.y = y;
  }
  
  // 위 constructor에 데이터타입 제한.
  set x(value) {
    if (typeof value === "string") {
      this._x = value;
    }else{
      console.log("문자열만 입력 가능합니다.")
    }
  }
  set y(value) {
    if (typeof value === "string") {
      this._y = value;
    }
  }
}

// console.log(new ExampleTwo(2,5))

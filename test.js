let basicData = {
  subject: ["삐카츄", "라이츄", "파이리", "꼬부기"],
  object: ["사과", "바나나", "포도", "딸기"],
  verb: ["먹었다.", "먹는다.", "먹을 것이다", "먹을 것이다."],
};

class SentenceGenerator {
  constructor(data) {
    if (typeof data !== "object" || Array.isArray(data)) {
      throw new Error("데이터는 객체여야 합니다.");
    }

    this._data = {};

    this.subject = data.subject;
    this.object = data.object;
    this.verb = data.verb;
  }

  set subject(subject) {
    this._data.subject = this._validateType(subject);
  }
  set object(object) {
    this._data.object = this._validateType(object);
  }
  set verb(verb) {
    this._data.verb = this._validateType(verb);
  }

  _validateType(value) {
    if (typeof value !== "string") {
      throw new Error(`값 ${value}은(는) 문자열이 아닙니다.`);
    }
    return value;
  }

  generate() {
    const { subject, object, verb } = this._data;

    const subjectIndex = Math.floor(Math.random() * subject.length);
    const objectIndex = Math.floor(Math.random() * object.length);
    const verbIndex = Math.floor(Math.random() * verb.length);

    const sentence = `${subject[subjectIndex]} ${verb[verbIndex]} ${object[objectIndex]}`

    return sentence;G
  }
}

const sentenceGenerator = new SentenceGenerator(basicData);
console.log(sentenceGenerator.generate())

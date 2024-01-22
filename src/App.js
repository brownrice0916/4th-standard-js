import { useState } from "react";
import "./App.css";

function App() {
  const initialArray = ["banana", "apple", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  //useState 결과물은 배열
  //[스테이트,스테이트를제어하는함수]
  //구조분해할당

  /** 함수들 */
  const handleForEach = () => {
    let tempResult = "";
    array.forEach((fruit, i) => {
      tempResult += `${i}:${fruit} ,`;
    });

    setResult(tempResult);
  };

  const handleFilter = () => {
    const filteredList = array.filter((fruit) => fruit.includes(query));

    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    //Map의 역할 => 원본의 가공 복제
    const upperList = array.map((fruit) => fruit.toUpperCase());
    setResult(upperList.join(","));
  };

  const handleReduce = () => {
    const reducedList = array.reduce((acc, cur) => {
      return `${acc} + ${cur}`;
    });
    setResult(reducedList);
  };

  const handlePush = () => {
    setResult([...array, query].join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(","));
  };

  const handleSlice = () => {
    const newArr = [...array];
    const slicedArray = newArr.slice(0, -2);
    setArray(slicedArray);
    setResult(slicedArray.join(","));
  };

  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const handleIndexOf = () => {
    setResult(array.indexOf(query));
  };
  const handleIncludes = () => {
    setResult(array.includes(query).toString());
  };
  const handleFind = () => {
    const foundElement = array.find((fruit) => fruit.includes(query));

    if (foundElement) {
      setResult(foundElement);
    } else {
      setResult("Not found");
    }
  };

  const handleSome = () => {
    setResult(array.some((fruit) => fruit.includes(query)).toString());
  };

  const handleEvery = () => {
    setResult(array.every((fruit) => fruit.length >= 5).toString());
  };

  const handleSort = () => {
    setResult(array.sort().join(","));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
      </div>
      <div
        style={{ border: "1px solid #000", padding: "10px", margin: "10px 0" }}
      >
        <strong>원본배열</strong> : {array.join(", ")}
      </div>
      <div
        style={{ border: "1px solid #000", padding: "10px", margin: "10px 0" }}
      >
        <strong>결과물</strong> : {result}
      </div>
    </div>
  );
}

export default App;

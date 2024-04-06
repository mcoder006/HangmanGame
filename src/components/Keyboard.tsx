import "./Keyboard.css"

let keyboardWords: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 pt-14 max-w-[700px]">
      {
        keyboardWords.map((word, index) => {
          return <button key={index} className={`btn active p-2 px-3 uppercase bg-gray-500 rounded btn hover:bg-[hsl(200, 100%, 75%)]`}>{word}</button>
        })
      }
    </div>
  );
}

export default Keyboard;

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

type KeyboardProps = {
  activeLetter: string[];
  inactivateLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabledBtn: boolean;
};

const Keyboard = ( {  activeLetter, inactivateLetter, disabledBtn, addGuessedLetter }: KeyboardProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 pt-14 max-w-[500px] pb-40 md:pb-10">
      {
        keyboardWords.map((word, index) => {
          const isActive = activeLetter.includes(word);
          const inActive = inactivateLetter.includes(word);

          return (
            <button
              onClick={() => addGuessedLetter(word)}
              key={index}
              disabled={inActive || isActive || disabledBtn}
              className={`btn active p-2 px-3 uppercase bg-gray-500 rounded btn hover:bg-[hsl(200, 100%, 75%)]
              ${isActive ? "activeBtn" : ""}
              ${inActive ? "inactiveBtn" : ""}
          `}
            >
              {word}
            </button>
          );
        })
      }
    </div>
  );
}

export default Keyboard;

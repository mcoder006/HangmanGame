
type wordProps = {
  hangWords: string;
  guessedLetter: string[];
  revealWord: boolean;
};

const HangmanWords = ({ hangWords, guessedLetter, revealWord=false }: wordProps) => {
  const guessedLetters: string[] = guessedLetter;

  return (
    <div className="flex gap-[14px] font-mono uppercase font-bold font-2xl mt-2 md:mt-4">
      {hangWords.split("").map((letter, index) => {
        return (
          <div
            className="p-2 mt-8 text-xl border-b-2 border-black dark:border-white md:text-2xl"
            key={index}
          >
            <div
              className={`${
                guessedLetters.includes(letter) || revealWord ? "visible" : "hidden"
              }
              text-${!guessedLetter.includes(letter) && revealWord ? "red-700" : ""}
              `}
            >
              {letter}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HangmanWords;

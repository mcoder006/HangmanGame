import HangmanBody from "./components/HangmanBody";
import HangmanWords from "./components/HangmanWords";
import Keyboard from "./components/Keyboard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useEffect, useState, useCallback } from "react";
import words from "./wordList.json";

const App = () => {
  
   const getWord = () => {
     return words[Math.floor(Math.random() * words.length)];
   };
   
   const [wordGuess] = useState(getWord());

   const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

   const incorrectLetters = guessedLetters.filter(
     (letter) => !wordGuess.includes(letter)
   );

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordGuess.split("")
       .every((letter) => guessedLetters.includes(letter));

   const addGuessedLetter = useCallback((keyLetter: string) => {
    if (guessedLetters.includes(keyLetter) || isLoser || isWinner) {
      return;
    }
    setGuessedLetters((currentLetters) => [...currentLetters, keyLetter]);
   }, [guessedLetters, isLoser, isWinner]);


   useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) {
        return
      }
      else {
        e.preventDefault();
        addGuessedLetter(key);
        console.log(key);
      }
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
    
   }, [guessedLetters])

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen space-y-4 text-black bg-gradient-to-br dark:from-slate-700 dark:to-slate-600 from-slate-500 to-slate-100 dark:text-white md:text-2xl">
      {isWinner && (
        <h1 className="text-2xl font-bold md:text-3xl">
          Winner! -Refresh To Try Again
        </h1>
      )}

      {isLoser && (
        <h1 className="text-2xl font-bold capitalize md:text-3xl">
          better Luck Next Time! -Refresh To Try Again
        </h1>
      )}

      <h1 className="text-xl md:text-2xl">Hangman Game</h1>

      <HangmanBody numberOfGuess={incorrectLetters.length} />

      <HangmanWords 
      hangWords={wordGuess} 
      guessedLetter={guessedLetters}
      revealWord={isLoser}
      />

      <Keyboard
        activeLetter={guessedLetters.filter((letter) =>
          wordGuess.includes(letter)
        )}
        disabledBtn={isLoser || isWinner}
        inactivateLetter={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />

      <ThemeSwitcher />
    </div>
  );
};

export default App;

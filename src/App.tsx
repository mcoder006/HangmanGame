import HangmanBody from "./components/HangmanBody";
import HangmanWords from "./components/HangmanWords";
import Keyboard from "./components/Keyboard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useState } from "react";
import words from "./wordList.json";

const App = () => {
   const [wordGuess, setWordGuess] = useState(() => {
    return 'hello'
    //  return words[Math.floor(Math.random() * words.length)];
   });

   const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

   const incorrectLetters = guessedLetters.filter(
     (letter) => !wordGuess.includes(letter)
   );

  //  console.log(incorrectLetters);
   
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen space-y-4 text-black bg-gradient-to-br dark:from-slate-700 dark:to-slate-600 from-slate-500 to-slate-100 dark:text-white md:text-2xl">
      <h1 className="text-xl md:text-2xl">Hangman Game</h1>
      
      <HangmanBody numberOfGuess={incorrectLetters.length} />
      
      <HangmanWords hangWords={wordGuess} guessedLetter={guessedLetters} />

      <Keyboard />
      
      <ThemeSwitcher />
    </div>
  );
};

export default App;

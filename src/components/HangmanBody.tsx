
const Head = () => {
  return (
    <div className="md:h-14 md:w-14 h-10 w-10 absolute border-[5px] -right-[10.5%] md:top-[50px] top-[30px]  border-black rounded-full dark:border-white" />
  );
};

const Body = () => {
  return (
    <div className="md:h-[150px] absolute h-[70px] w-[7px] bg-black dark:bg-white right-0 top-[70px] md:top-[101px]" />
  );
};

const RightHand = () => {
  return (
    <div className="h-[40px] w-[7px] bg-black absolute rotate-[35deg] top-[70px] -right-[12px] md:h-[60px] md:top-[120px] md:-right-[18px] dark:bg-white" />
  );
};

const LeftHand = () => {
  return (
    <div className="h-[40px] w-[7px] bg-black absolute -rotate-[35deg] top-[70px] dark:bg-white right-[12px] md:h-[60px] md:top-[120px] md:right-[18px]" />
  );
};

const RightFoot = () => {
  return (
    <div className="h-[40px] w-[7px] bg-black absolute -rotate-[35deg] bottom-[41px] -right-[12px] md:h-[60px] md:bottom-[60px] md:-right-[18px] dark:bg-white" />
  );
};

const LeftFoot = () => {
  return (
    <div className="h-[40px] w-[7px] bg-black absolute rotate-[35deg] bottom-[41px] right-[12px] md:h-[60px] md:bottom-[60px] md:right-[18px] dark:bg-white" />
  );
};


type HangmanBodyProps = {
  numberOfGuess: number;
};

type BodyPartType = React.FunctionComponent<{}>;

const HangmanBody = ({ numberOfGuess }: HangmanBodyProps) => {

  const BodyParts: BodyPartType[] = [
    Head,
    Body,
    RightHand,
    LeftHand,
    RightFoot,
    LeftFoot,
  ];
  
  return (
    <>
      <div className="relative">
        <div className="absolute h-[30px] right-0 md:h-[50px] w-[7px] bg-black dark:bg-white" />
        
        {BodyParts.slice(0, numberOfGuess).map((Component, index) => (
          <Component key={index} />
        ))}

        <div className="h-[7px] md:w-[250px] bg-black dark:bg-white w-[150px] " />
        <div className="md:h-[350px] h-[200px] w-[7px] bg-black dark:bg-white" />
        <div className="h-[7px] md:w-[250px] bg-black dark:bg-white md:-mr-[200px] w-[150px] md:-ml-28 -ml-[4.8rem]" />
      </div>
    </>
  );
};

export default HangmanBody;

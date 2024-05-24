const Square = () => {
  return (
    <div className="w-full h-auto bg-white dark:bg-neutral-950 aspect-square {classes}"></div>
  );
};

const SquareLine = () => {
  return (
    <div className="relative flex w-full divide-x h-[30px] sm:h-[45px] md:h-[60px] xl:h-[88px] divide-neutral-300 dark:divide-neutral-700 divide-dashed">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

const SquareLines = () => {
  return (
    <div
      className="absolute w-full h-auto"
      style={{
        zIndex: -1,
      }}
    >
      <div className="absolute top-0 left-0 w-1/2 h-auto bg-neutral-100 dark:bg-neutral-800">
        <div className="absolute inset-0 z-30 w-full h-full pointer-events-none bg-gradient-to-tl from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent"></div>
        <div className="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-neutral-700 border-neutral-300 dark:border-neutral-900">
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-auto bg-neutral-100 dark:bg-neutral-800">
        <div className="absolute inset-0 z-30 w-full h-full pointer-events-none bg-gradient-to-tr from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent"></div>
        <div className="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-neutral-700 border-neutral-300 dark:border-neutral-900">
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
          <SquareLine />
        </div>
      </div>
    </div>
  );
};

export default SquareLines;

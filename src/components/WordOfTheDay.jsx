
export default function WordOfTheDay({word, definition, example}) {
    return(
        <div className="flex flex-col items-center">
        <h1 className="text-2xl">
          Word of The Day
        </h1>
        <h1 className="text-2xl text-skin-secondary">
          {word}
        </h1>
        <p className="text-sm sm:text-lg">{definition}</p>
        <p className="italic text-xs sm:text-base">
        {example}
        </p>
        </div>
    )

}
import React, { useEffect, useState } from 'react'

export default function PasswordIndicator({isLong, alphanumeric, capitalize, symbol}) {

  const [level, setLevel] = useState(0);

  useEffect(() => {
    let tempLevel = 0;
    if(isLong) tempLevel ++;
    if(alphanumeric) tempLevel ++;
    if(capitalize) tempLevel ++;
    if(symbol) tempLevel ++;
    setLevel(tempLevel);

  }, [isLong, alphanumeric, capitalize, symbol])

  return (
    <div className="p-4 rounded-md border border-white">
        <div className="text-xl font-bold mb-4">Password must</div>
        <MustHaveList label="Have at least 8 characters" fulfilled={isLong} />
        <MustHaveList label="Contains both letters and numbers" fulfilled={alphanumeric} />
        <MustHaveList label="Contains capital letters" fulfilled={capitalize} />
        <MustHaveList label="Contains symbols" fulfilled={symbol} />
        <PasswordStrengh level={level} />
    </div>
  )
}

function MustHaveList({label, fulfilled}) {
    return (
        <div className={`${fulfilled && "text-green-500"}`}>
            {label}
        </div>
    )
}

function PasswordStrengh({level = 0}){
    return (
      <div className="mt-4">
        <div className="text-xl font-bold">Password strength</div>
        <div className="flex gap-1 mt-4">
          <div
            className={`w-full h-1 ${
              level > 3
                ? "bg-green-400"
                : level > 2
                ? "bg-orange-400"
                : level >= 1
                ? "bg-red-500"
                : "bg-white"
            }`}
          />
          <div
            className={`w-full h-1 ${
              level > 3
                ? "bg-green-400"
                : level > 2
                ? "bg-orange-400"
                : "bg-white"
            }`}
          />
          <div
            className={`w-full h-1 ${
              level > 3
                ? "bg-green-400"
                : "bg-white"
            }`}
          />
        </div>
      </div>
    );
}

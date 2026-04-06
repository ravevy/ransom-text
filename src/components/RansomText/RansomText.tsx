import Image from "next/image";
import { useMemo } from "react";

interface RansomTextProps {
  text: string;
  size?: number;
  wrapperClassName?: string;
}

export default function RansomText({
  text,
  size = 40,
  wrapperClassName,
}: RansomTextProps) {
  const pathToImage = process.env.NEXT_PUBLIC_ASSET_URL;

  if (!pathToImage) {
    console.error("ASSET_URL is not defined in the environment variables.");
    return <div>Error: ASSET_URL is not defined.</div>;
  }

  const memoizedLetters = useMemo(
    () => getRansomLetters(text, size, pathToImage),
    [text, size],
  );

  return (
    <div aria-label={text} className={`w-fit ${wrapperClassName ?? ""}`}>
      <span aria-hidden="true" className="inline-flex">
        {memoizedLetters}
      </span>
    </div>
  );
}

const maxFiles: Record<string, number> = {
  A: 35,
  B: 18,
  C: 17,
  D: 19,
  E: 25,
  F: 18,
  G: 18,
  H: 16,
  I: 21,
  J: 17,
  K: 17,
  L: 20,
  M: 24,
  N: 27,
  O: 21,
  P: 18,
  Q: 15,
  R: 25,
  S: 38,
  T: 19,
  U: 16,
  V: 17,
  W: 16,
  X: 11,
  Y: 21,
  Z: 18,
  "0": 9,
  "1": 11,
  "2": 8,
  "3": 14,
  "4": 24,
  "5": 10,
  "6": 11,
  "7": 15,
  "8": 9,
  "9": 9,
};

const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const getRansomLetters = (
  string: string,
  size: number,
  pathToImage: string,
) => {
  const letterCount: Record<string, number> = {};

  const letters = string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .split("");

  return letters.map((letter, index) => {
    if (letter === " ") {
      return (
        <span key={`${letter}-${index}`} style={{ width: size }}>
          {" "}
        </span>
      );
    }

    if (!validLetters.includes(letter)) {
      return <span key={`${letter}-${index}`} />;
    }

    const used = (letterCount[letter] ?? 0) + 1;
    letterCount[letter] = used;

    const fileNumber = (used - 1) % (maxFiles[letter] ?? 1);

    return (
      <span
        key={`${letter}-${index}`}
        style={{
          display: "flex",
          width: size,
          height: size,
          maxWidth: size,
          maxHeight: size,
        }}
      >
        <Image
          src={`${pathToImage}${letter}/${fileNumber}.png`}
          alt={letter}
          width={size}
          height={size}
          className="object-contain"
        />
      </span>
    );
  });
};

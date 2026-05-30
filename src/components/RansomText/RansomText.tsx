import { useMemo } from "react";

const DEFAULT_ASSET_URL =
  "https://ravevy.github.io/ransom-text-assets/letters/";

export interface RansomTextProps {
  text: string;
  size?: number;
  wrapperClassName?: string;
}

export default function RansomText({
  text,
  size = 40,
  wrapperClassName,
}: RansomTextProps) {
  const pathToImage = process.env.RANSOM_TEXT_ASSET_URL ?? DEFAULT_ASSET_URL;

  const memoizedLetters = useMemo(
    () => getRansomLetters(text, size, pathToImage),
    [text, size, pathToImage],
  );

  return (
    <div
      aria-label={text}
      className={wrapperClassName}
      style={{ width: "fit-content" }}
    >
      <span
        aria-hidden="true"
        style={{ display: "inline-flex", flexWrap: "wrap" }}
      >
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

const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

const getRansomLetters = (
  string: string,
  size: number,
  pathToImage: string,
) => {
  const letterCount: Record<string, number> = {};

  const letters = string
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .split("")
    .filter((letter) => validLetters.includes(letter));

  return letters.map((letter, index) => {
    if (letter === " ") {
      return (
        <span key={`${letter}-${index}`} style={{ width: size }}>
          {" "}
        </span>
      );
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
        <img
          src={`${pathToImage}${letter}/${fileNumber}.webp`}
          alt={letter}
          width={size}
          height={size}
          style={{ objectFit: "contain" }}
        />
      </span>
    );
  });
};

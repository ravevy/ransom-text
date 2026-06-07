import { useMemo } from "react";

const DEFAULT_ASSET_URL =
  "https://ravevy.github.io/ransom-text-assets/letters/";

export interface RansomTextProps {
  text: string;
  size?: number;
  wrapperClassName?: string;
  assetUrl?: string;
}

export default function RansomText({
  text,
  size = 40,
  wrapperClassName,
  assetUrl: pathToImage = DEFAULT_ASSET_URL,
}: RansomTextProps) {
  const memoizedLetters = useMemo(
    () => getRansomLetters(text, size, pathToImage),
    [text, size, pathToImage],
  );

  return (
    <div role="img" aria-label={text} className={wrapperClassName}>
      <span aria-hidden="true" style={{ display: "flex", flexWrap: "wrap" }}>
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

  const normalized = string
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .split("")
    .filter((letter) => validLetters.includes(letter))
    .join("");

  const words = normalized.split(" ");

  return words.map((word, wordIndex) => (
    <span key={`word-${wordIndex}`} style={{ display: "inline-flex" }}>
      {word.split("").map((letter, letterIndex) => {
        const used = (letterCount[letter] ?? 0) + 1;
        letterCount[letter] = used;
        const fileNumber = (used - 1) % (maxFiles[letter] ?? 1);

        return (
          <span
            key={`${letter}-${wordIndex}-${letterIndex}`}
            style={{
              display: "flex",
              width: "fit-content",
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
              className="w-fit"
            />
          </span>
        );
      })}
      {wordIndex < words.length - 1 && (
        <span style={{ width: size, display: "inline-flex" }} />
      )}
    </span>
  ));
};

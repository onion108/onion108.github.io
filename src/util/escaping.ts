import { map, toString } from "./iterator";

export function escapePlainToHtml(plain: string): string {
    return toString(map((char: string) => {
        if (char === "<")  return "&lt;";
        if (char === ">") return "&gt;";
        if (char === "&") return "&amp;";
        return char;
    }, plain));
}

import { classToString } from "@/utils/class-to-string";

export const ButtonLink = classToString`
    text-deepSaffron
    text-base
    underline
    underline-offset-2
    ease-in-out duration-300

    hover:text-usafaBlue 
    hover:underline-offset-4

    disabled:opacity-60 
    disabled:hover:shadow-none
    disabled:hover:bg-transparent
    disabled:hover:text-deepSaffron
    disabled:cursor-not-allowed
    disabled:text-gray-400
`;

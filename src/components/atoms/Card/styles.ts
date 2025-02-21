import { classToString } from "@/utils/class-to-string";

export const Container = classToString`
    flex 
    flex-col 
    justify-center 
    items-start 
    bg-darkGunmetal 
    p-6 
    w-full
    h-full
    rounded-xl 
    shadow-md 
    gap-3
    hover:shadow-lg 
    hover:scale-105 
    transition-transform 
    duration-300
`;

export const Title = classToString`
    font-gotham 
    font-semibold 
    text-xl 
    text-floralWhite
    border-l-4 
    border-mayaBlue 
    pl-2
`;

export const Content = classToString`
    font-gotham 
    font-medium 
    text-antiflashWhite
    my-2
`;

export const Author = classToString`
    font-gotham 
    text-sm 
    text-paleCerulean
    mb-6
`;

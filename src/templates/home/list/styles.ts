import { classToString } from "@/utils/class-to-string";

export const Container = classToString`
    flex 
    flex-col
    gap-10
    items-center 
    justify-center 
    w-full
    h-full
`;

export const InputContainer = classToString`
    fixed
    top-0
    w-full
    bg-white
    shadow-md
    p-4
`;

export const CardContainer = classToString`
    grid 
    items-center 
    justify-center 
    grid-cols-1 
    gap-4 
    w-full
    pt-20
    
    md:grid-cols-2 
    lg:grid-cols-3
`;

export const NoResults = classToString`
    text-center 
    text-2xl 
    text-gray-500
    font-gotham
    font-bold
`;

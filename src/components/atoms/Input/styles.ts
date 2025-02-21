import { classToString } from "@/utils/class-to-string";

export const Container = classToString`
    w-full
`;

export const Content = classToString`
    relative
    w-full
    h-auto
`;

export const Input = classToString`
    peer

    border-slateGray
    w-full
    h-full
    bg-transparent
    text-darkGunmetal/80
    font-sans
    font-normal
    outline
    outline-0
    border
    text-sm
    px-3
    py-2.5
    rounded-md
    transition-all

    focus:border-slateGray
    focus:outline-0
    focus:border-t-transparent

    disabled:opacity-50

    placeholder-shown:border

    data-[has-value=true]:placeholder-shown:border-t-transparent
    data-[has-value=true]:border-t-transparent
`;

export const Label = classToString`
    peer-disabled:opacity-50
    peer-placeholder-shown:text-base
    peer-focus:text-[11px]
    peer-placeholder-shown:before:border-transparent
    peer-disabled:before:opacity-65
    peer-placeholder-shown:after:border-transparent
    peer-focus:text-slateGray
    peer-focus:before:!border-slateGray
    peer-focus:after:!border-slateGray
    peer-focus:leading-loose
    peer-disabled:after:opacity-65
    peer-placeholder-shown:leading-[3.75]

    -top-2.5
    text-[11px]
    text-slateGray/70 
    flex
    w-full
    h-full
    select-none
    pointer-events-none
    absolute
    left-0
    font-normal
    !overflow-visible
    truncate
    leading-loose
    transition-all

    before:content[' ']
    before:block
    before:box-border
    before:mt-2.5
    before:w-2.5
    before:h-1.5
    before:mr-1
    before:border-slateGray
    before:rounded-tl-md
    before:border-t
    before:border-l
    before:pointer-events-none
    before:transition-all

    after:content[' ']
    after:block
    after:mt-2.5
    after:flex-grow
    after:box-border
    after:w-2.5
    after:h-1.5
    after:ml-1
    after:border-slateGray
    after:rounded-tr-md
    after:border-t
    after:pointer-events-none
    after:transition-all
`;

export const ErrorMessage = classToString`
    mt-2
    text-sm
    text-rustyRed
`;

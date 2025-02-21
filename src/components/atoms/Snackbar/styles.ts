import { classToString } from "@/utils/class-to-string";

export const ContainerStatus = classToString`
    fixed
    scale-0
    z-50
    bottom-16
    left-1/2
    translate-x-[-50%]
    w-72 md:w-80
    rounded-md
    py-3
    px-2

    lg:w-[22rem]
    xl:bottom-6

    data-[status=success]:bg-forestGreen
    data-[status=success]:text-richBlack
    data-[status=error]:bg-rustyRed
    data-[status=error]:text-white
    data-[status=warning]:bg-ripeMango
    data-[status=warning]:text-richBlack
    data-[status=info]:bg-skyBlue
    data-[status=info]:text-richBlack
`;

export const BarTime = classToString`
    absolute
    top-0
    left-0
    bg-antiflashWhite
    rounded-tl-md
    w-full
    h-1
`;

export const Content = classToString`
    flex
    flex-row
    gap-3
    justify-between
    items-center
`;

export const Text = classToString`
    flex
    flex-row
    justify-center
    items-center
    gap-2
    font-semibold
    text-sm

    md:text-base
`;

export const Message = classToString`
    w-full
`;

export const CloseIcon = classToString`
    w-8
    h-8
    p-1
    cursor-pointer
    bg-transparent
    rounded-full
    ease-in-out
    duration-300

    hover:bg-darkElectricBlue/25

    data-[status=success]:text-richBlack
    data-[status=error]:text-white
    data-[status=warning]:text-richBlack
    data-[status=info]:text-richBlack
`;

export const IconInformationBlack = classToString`
    w-6
    h-6
    text-richBlack 
`;

export const IconInformationWhite = classToString`
    w-6
    h-6
    text-white
`;

export const Container = `
    fixed
    top-0
    left-0
    w-full
    h-full
    bg-black/60
    duration-500
    ease-in-out
    flex
    justify-center
    items-center

    data-[open=false]:opacity-0
    data-[open=false]:z-[-1]
    data-[open=true]:opacity-100
    data-[open=true]:z-50
`;

export const HitBoxClose = `
    absolute
    top-1/2
    -translate-y-1/2
    left-1/2
    -translate-x-1/2
    bg-transparent
    w-full
    h-full
    cursor-pointer
`;

export const Modal = `
    relative
    z-50
    bg-white
    rounded-lg
    shadow-2xl
    duration-500
    ease-in-out
    h-full
    w-full
    max-w-full

    sm:w-full
    xl:h-auto
    xl:w-full
    xl:max-w-screen-md
    2xl:max-w-screen-md mx-auto

    data-[open=false]:translate-y-[50%]
    data-[open=false]:opacity-0
    data-[open=true]:translate-y-0
    data-[open=true]:opacity-100
`;

export const Header = `
    overflow-hidden
    flex
    justify-between
    items-center
    p-6
    border-b
    border-darkElectricBlue
    bg-antiflashWhite
    mt-14

    xl:mt-0
`;

export const Title = `
    text-lg
    text-usafaBlue
    font-semibold
    font-gotham

    lg:text-2xl
`;

export const ButtonClose = `
    group
    flex
    items-center
    justify-center
    p-2
    rounded-full
    bg-transparent
    text-black
    ease-in-out
    duration-300

    hover:bg-sunsetOrange
    hover:text-white
`;

export const ButtonCloseIcon = `
    group-hover:text-white

    w-6
    h-6
    ease-in-out
    duration-300
`;

export const Content = `
    overflow-auto
    max-h-[80vh]

    sm:max-h-[85vh]
    md:max-h-[90vh]
`;

export const Container = `
    w-full
`;

export const Content = `
    relative
    w-full
    h-auto
`;

export const Select = `
    peer focus:border-darkMidnightBlue

    border-t-slateGray
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
    rounded-[7px]
    appearance-none
    transition-all

    focus:outline-0
    focus:border-t-transparent

    disabled:opacity-65

    placeholder-shown:border

    data-[has-value=true]:border-t-transparent
`;

export const Label = `
    peer-disabled:opacity-65
    peer-disabled:before:opacity-65
    peer-focus:text-[11px]
    peer-placeholder-shown:before:border-transparent
    peer-placeholder-shown:after:border-transparent
    peer-disabled:after:opacity-65
    peer-placeholder-shown:leading-[3.75]
    peer-focus:text-slateGray
    peer-focus:before:!border-slateGray
    peer-focus:after:!border-slateGray
    peer-focus:leading-loose

    text-darkGunMetal/70
    flex
    w-full
    h-full
    text-slateGray/70
    select-none
    pointer-events-none
    absolute
    left-0
    font-normal
    !overflow-visible
    truncate
    leading-loose
    transition-all

    before:relative
    before:content[' ']
    before:box-border
    before:mt-2.5
    before:w-2.5
    before:h-1.5
    before:mr-1
    before:border-slateGray
    before:rounded-tl-md before:border-t
    before:border-l
    before:pointer-events-none
    before:transition-all

    after:relative
    after:content[' ']
    after:block
    after:mt-2.5
    after:flex-grow
    after:box-border
    after:w-2.5 after:h-1.5
    after:ml-1
    after:border-slateGray
    after:rounded-tr-md after:border-t
    after:pointer-events-none
    after:transition-all

    data-[has-value=false]:top-2
    data-[has-value=true]:-top-[0.65rem]
    data-[has-value=false]:text-base
    data-[has-value=true]:text-[11px]
    data-[has-value=true]:before:top-0
    data-[has-value=false]:before:-top-[1.15rem]
    data-[has-value=true]:before:block
    data-[has-value=true]:after:top-0
    data-[has-value=false]:after:-top-[1.15rem]
`;

export const ArrowIcon = `
    w-5
    h-5
    pointer-events-none
    absolute
    right-3
    top-3
    text-darkMidnightBlue/65
`;

export const ErrorMessage = `
    mt-2
    text-sm
    text-rustyRed
`;

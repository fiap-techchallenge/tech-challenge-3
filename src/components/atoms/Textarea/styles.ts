export const Container = `
    w-full
`;

export const Content = `
    relative
    w-full
    h-40
`;

export const TextArea = `
    peer

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
    border-chineseWhite
    transition-all

    placeholder-shown:border
    placeholder-shown:border-blue-richBlack

    focus:border-slateGray
    focus:outline-0
    focus:border-t-transparent

    disabled:opacity-65

    data-[resize=true]:resize-y
    data-[resize=false]:resize-none
    data-[has-value=true]:placeholder-shown:border-t-transparent
    data-[has-value=false]:placeholder-shown:border-t-chineseWhite
    data-[has-value=true]:border-t-transparent
`;

export const Label = `
    peer-placeholder-shown:text-blue-slateGray
    peer-disabled:opacity-65
    peer-disabled:peer-placeholder-shown:opacity-65
    peer-placeholder-shown:text-base
    peer-focus:text-[11px]
    peer-placeholder-shown:before:border-transparent
    peer-disabled:before:opacity-65
    peer-placeholder-shown:after:border-transparent
    peer-disabled:after:opacity-65
    peer-placeholder-shown:leading-[3.75]
    peer-focus:text-slateGray
    peer-focus:before:!border-slateGray
    peer-focus:after:!border-slateGray
    peer-focus:leading-loose

    flex
    w-full
    h-full
    text-slateGray/70
    select-none
    pointer-events-none
    absolute left-0
    font-normal
    !overflow-visible
    truncate
    leading-loose
    transition-all
    -top-2.5
    text-[11px]
    text-darkGunMetal/70

    before:content[' ']
    before:block
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
    before:border-chineseWhite

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
    after:border-chineseWhite
`;

export const ErrorMessage = `
    mt-2
    text-sm
    text-rustyRed
`;

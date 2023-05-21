interface ButtonProps {
    text: string;
}

export function Button({ text }: ButtonProps) {
    return(
        <button className="rounded-md bg-green h-11 px-12 text-primary-white font-semibold text-xl hover:opacity-80 hover:transition-opacity hover:duration-200">
            {text}
        </button>
    )
}
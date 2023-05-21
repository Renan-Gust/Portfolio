import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function Button(props: ButtonProps) {
    return(
        <button {...props} className="rounded-md bg-green h-11 px-10 text-primary-white font-semibold text-lg hover:opacity-80 hover:transition-opacity hover:duration-200">
            {props.text}
        </button>
    )
}
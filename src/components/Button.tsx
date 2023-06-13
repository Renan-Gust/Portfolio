import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    href?: string;
}

export function Button(props: ButtonProps) {
    return(
        <button {...props} className="rounded-md bg-green text-primary-white font-semibold text-lg hover:opacity-80 hover:transition-opacity hover:duration-200">
            <a href={props.href} className="px-10 h-11 flex items-center">
                {props.text}
            </a>
        </button>
    )
}
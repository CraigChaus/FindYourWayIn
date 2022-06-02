import { MouseEventHandler } from "react";

export declare interface AppProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    children?: React.ReactNode; // best, accepts everything (see edge case below)
    functionChildren?: (name: string) => React.ReactNode; // recommended function as a child render prop type
    style?: React.CSSProperties; // to pass through style props
    onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
    //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
}
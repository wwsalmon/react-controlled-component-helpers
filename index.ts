import {Dispatch, FormEvent, SetStateAction} from "react";

export const getSelectStateProps = (state: string, setState: Dispatch<SetStateAction<string>>) => ({
    value: state,
    onChange: (e: FormEvent<HTMLSelectElement>) => setState((e.target as HTMLSelectElement).value),
});

export const getInputStateProps = (state: string, setState: Dispatch<SetStateAction<string>>) => ({
    value: state,
    onChange: (e: FormEvent<HTMLInputElement>) => setState((e.target as HTMLInputElement).value),
});

export const getTextAreaStateProps = (state: string, setState: Dispatch<SetStateAction<string>>) => ({
    value: state,
    onChange: (e: FormEvent<HTMLTextAreaElement>) => setState((e.target as HTMLTextAreaElement).value),
});
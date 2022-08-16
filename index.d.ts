import {Dispatch, FormEvent, SetStateAction} from "react";

export const getSelectStateProps: (state: string, setState: Dispatch<SetStateAction<string>>) => {
    value: string;
    onChange: (e: FormEvent<HTMLSelectElement>) => any;
};
export const getInputStateProps: (state: string, setState: Dispatch<SetStateAction<string>>) => {
    value: string;
    onChange: (e: FormEvent<HTMLInputElement>) => any;
};
export const getTextAreaStateProps: (state: string, setState: Dispatch<SetStateAction<string>>) => {
    value: string;
    onChange: (e: FormEvent<HTMLTextAreaElement>) => any;
};

//# sourceMappingURL=index.d.ts.map

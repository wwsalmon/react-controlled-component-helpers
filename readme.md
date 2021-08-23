# react-controlled-component-helpers

Helper functions to make React controlled components less verbose.

Instead of:

```tsx
<input value={state} onChange={(e: EventTarget) => setState((e.target as HTMLInputElement).value)}/>
```

Use this:

```tsx
import {getInputStateProps} from "./index";

<input {...getInputStateProps(state, setState)}/>
```

The source code is straightforward if you want to check it out:

```ts
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
```

This package only supports a few components at the moment. If you want to help add support for more, contributions are welcome through [GitHub](https://github.com/wwsalmon/react-controlled-component-helpers)! 
import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
    const [value, setValue] = useState<number>(0);

    const incriment = () => setValue( (prevState) => prevState + 1 );
    const decriment = () => setValue( (prevState) => prevState - 1 );

    const renderTimes = useRef<number>(-1);
    useEffect(()=>{
        renderTimes.current = renderTimes.current + 1;
    });

    const ref = useRef<HTMLInputElement>(null!);
    const focusInput = () => {
        ref.current.focus();

    }

    return (
        <div>
            <div>value: {value}</div>
            <button onClick={incriment}>+1</button>
            <button onClick={decriment}>-1</button>
            <div>This was re-rendered { renderTimes.current } times!!!</div>
            <input ref={ref} type="text" />
            <button onClick={focusInput}>Click me</button>
        </div>
    );
};

export default Counter;
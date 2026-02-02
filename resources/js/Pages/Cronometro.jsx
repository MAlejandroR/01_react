import { useEffect, useRef, useState } from 'react';

export default function Cronometro() {
    const idInterval = useRef(null);
    const [milisegundos, set_milisegundos] = useState(0);
    const [segundos, set_segundos] = useState(0);
    const [minutos, set_minutos] = useState(0);
    const [start_stop, set_start_stop] = useState('Start');
    const [running, set_running] = useState(false);
    //
    // useEffect(() => {
    //     if (!running) return;
    //     setInterval(()=>{
    //         set_ticks(ticks+1)
    //     },1000)
    //
    //
    //
    // }, []);

    const format = (numero) => {
        return numero.toString().padStart(2, '0');
    };

    const start = () => {
        set_running((r) => !r);
        set_start_stop(running ? 'Start' : 'Stop');
    };
    useEffect(() => {
        if (running) {
            idInterval.current = setInterval(() => {
                set_milisegundos((ms) => {
                    if (ms == 99) {
                        set_segundos((s) => s + 1);
                        return 0;
                    }
                    return ms + 1;
                });
            }, 10);
        } else {
            clearInterval(idInterval.current);
        }
    }, [running]);

    const reset = () => {
        set_milisegundos(0);
        set_segundos(0);
        set_running(false);
        set_start_stop('Start');
    };

    return (
        <div className="bg-base-200 flex min-h-screen items-center justify-center">
            <div className="card bg-base-100 w-96 p-8 shadow-xl">
                {/* Display */}
                <div className="mb-6 flex items-end justify-center gap-4">
                    <div className="bg-base-200 rounded-lg px-4 py-3 text-center">
                        <div className="font-mono text-4xl">
                            {format(minutos)}
                        </div>
                        <div className="text-xs opacity-60">MIN</div>
                    </div>

                    <div className="pb-4 font-mono text-3xl">:</div>

                    <div className="bg-base-200 rounded-lg px-4 py-3 text-center">
                        <div className="font-mono text-4xl">
                            {format(segundos)}
                        </div>
                        <div className="text-xs opacity-60">SEG</div>
                    </div>

                    <div className="pb-4 font-mono text-3xl">:</div>

                    <div className="bg-base-200 rounded-lg px-4 py-3 text-center">
                        <div className="font-mono text-2xl">
                            {format(milisegundos)}
                        </div>
                        <div className="text-xs opacity-60">MS</div>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex justify-center gap-4">
                    <button onClick={start} className="btn btn-primary">
                        {start_stop}
                    </button>
                    <button onClick={reset} className="btn btn-outline">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

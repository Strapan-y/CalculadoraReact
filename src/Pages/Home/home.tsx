import { useState } from "react";
import Display from "../../components/DisplayComponent";
import Buttons from "../../components/buttonsComponent";


// Componente principal de la Calculadora
function Home() {
    const [expression, setExpression] = useState("0");
    const [scientificMode, setScientificMode] = useState(false);

    // Cambiar entre modo claro y oscuro
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
    };

    // Manejo de clics en los botones
    const handleClick = (value: string) => {
        if (value === "C") {
            setExpression("0");
        } else if (value === "=") {
            try {
                setExpression(eval(expression).toString());
            } catch {
                setExpression("Error");
            }
        } else {
            setExpression((prev) => (prev === "0" ? value : prev + value));
        }
    };

    return (
        <div className="relative h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            {/* Botón para cambiar de tema */}
            <button
                onClick={toggleDarkMode}
                className="absolute top-4 right-4 text-sm bg-gray-200 dark:bg-gray-700 text-black px-3 py-1 rounded shadow transition-colors duration-300"
            >
                Cambiar tema
            </button>

            {/* Botón para cambiar entre modos */}
            <button
                onClick={() => setScientificMode(!scientificMode)}
                className="absolute top-4 left-4 text-sm bg-blue-500 text-black px-3 py-1 rounded shadow"
            >
                {scientificMode ? "Modo Básico" : "Modo Científico"}
            </button>

            {/* Contenedor de la calculadora */}
            <div className="w-[340px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl space-y-4">
                <Display value={expression} />
                <Buttons onClick={handleClick} />

                {/* Botones científicos */}
                {scientificMode && (
                    <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => handleClick("sin(")} className="btn">sin</button>
                        <button onClick={() => handleClick("cos(")} className="btn">cos</button>
                        <button onClick={() => handleClick("tan(")} className="btn">tan</button>
                        <button onClick={() => handleClick("√(")} className="btn">√</button>
                        <button onClick={() => handleClick("^2")} className="btn">x²</button>
                        <button onClick={() => handleClick("Math.PI")} className="btn">π</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;

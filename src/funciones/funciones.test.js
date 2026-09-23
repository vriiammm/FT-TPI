import { esMayorDeEdad, suma, saludar} from "./funciones";
import {describe, test, expect} from "vitest";

describe("sumar", () => {
    test ("devuelve 8 cuando se suma 5 y 3", () =>{
        const a = 5;
        const b = 3;

        const resultado = suma(a, b);

        expect(resultado).toBe(8);
    });

    test ("devuelve 0 cuando se suman dos 0", () =>{
        const a = 0;
        const b = 0;

        const resultado = suma(a, b);

        expect(resultado).toBe(0);
    });
});

describe("esMayorDeEdad", ()=>{

    test("Es mayor de edad?", ()=> { 

        const edad = 20
        const resultado = esMayorDeEdad(edad)
        expect (resultado).toBe(true)
    });
    
        test("Es mayor de edad?", ()=> { 

        const edad = 15
        const resultado = esMayorDeEdad(edad)
        expect (resultado).toBe(false)
    });
});

describe ("saludos", () => {
    test ("hola ezequiel",() => {
        const nombre = "a"
        const saludo = saludar(nombre)
        expect(saludo).toBe("Hola, a")
    });
});
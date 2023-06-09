/*
Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario.

*
Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión . El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo. En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. El rango de visión de cada dígito es su propio valor.

Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión. Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12.
*/

function range_vision(number) {
    if (number < 0) {
        return ("El número debe ser positivo");
    }
    const numStr = number.toString(); // paso a str
    let valMinVis = 10000; //no funciona con null
    let minVis = false;
    for (let i = 0; i < numStr.length; i++) {
        const numActual = parseInt(numStr[i]);//valor a int
        let vision = numActual;
        let visIzq = i - 1;
        let visDer = i + 1;

        while (visIzq >= 0 || visDer < numStr.length) {
            if (visIzq >= 0) {
                vision += parseInt(numStr[visIzq]);
                visIzq--;
            }
            if (visDer < numStr.length) {
                vision += parseInt(numStr[visDer]);
                visDer++;
            }
        }
 while (visIzq >= 0 || visDer < numStr.length) {
            if (visIzq >= 0) {
                vision += parseInt(numStr[visIzq]);
                visIzq--;
            }
            if (visDer < numStr.length) {
                vision += parseInt(numStr[visDer]);
                visDer++;
            }
        }

        if (valMinVis > vision) {
            valMinVis = vision;
            minVis = numActual === 1;
        } else if (vision === valMinVis && numActual === 1) {
            minVis = true;
        }
    }

    return minVis;
}

module.exports = range_vision;
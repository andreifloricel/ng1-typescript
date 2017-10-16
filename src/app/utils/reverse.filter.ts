
export function reverse ( /*injectable*/ ) {

    const reverse: Function = ( input: string ): string => {
        return input.split('').reverse().join('');
    };

    return reverse;

}
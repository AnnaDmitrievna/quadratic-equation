module.exports = function solveEquation(equation) {
    let a,b,c;
    let part1 = equation.split('*')[0];
    let part2 = equation.split('*')[1];
    let part3 = equation.split('*')[2];
    a = parseInt(part1.trim());
    b = parseInt(part2.split('x^2 ')[1].split(' ').join('').trim());
    c = parseInt(part3.split('x ')[1].split(' ').join('').trim());
    let result = solveQuadraticEquation(a, b, c).sort(function(a, b){
        return a - b;
    });
    return result

    function solveQuadraticEquation(a, b, c) {
        var d = b * b - 4 * a * c,
            ds,
            mbmds,
            mbpds;
        if (a === 0) {
            if (b === 0) {
                if (c === 0) {
                    return [undefined, undefined, undefined];
                } else {
                    return [];
                }
            } else {
                return [-c / b];
            }
        }

        if (d < 0) {
            return [];
        } else if (d === 0) {
            return [-b / (2 * a)];
        }

        ds = Math.sqrt(d);
        if (b >= 0) {
            mbmds = -b - ds;
            return [Math.round(mbmds / (2 * a)), Math.round(2 * c / mbmds)];
        } else {
            mbpds = -b + ds;
            return [Math.round(2 * c / mbpds), Math.round(mbpds / (2 * a))];
        }
    }
};

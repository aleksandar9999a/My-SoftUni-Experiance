let solution = {
    add: (...vectors) => {
        return vectors.reduce((r, e) => {
            r[0] += e[0];
            r[1] += e[1];
            return r;
        }, [0, 0]);
        
    },

    multiply: (vectors, multi) => {
        return vectors.map(e => e * multi);
    },

    length: (vectors) => {
        return Math.sqrt(vectors[0] * vectors[0] + vectors[1] * vectors[1]);
    },

    dot: (...vectors) => {
        return vectors
            .reduce((r, e) => {
                r[0] *= e[0];
                r[1] *= e[1];
                return r;
            }, [1, 1])
            .reduce((r, e) => r += e, 0);
    },

    cross:(...vectors) => {
        return vectors
            .reduce((r, e, i) => {
                if (i % 2 === 0){
                    r[0] *= e[0]
                    r[1] *= e[1]
                }else{
                    r[0] *= e[1];
                    r[1] *= e[0];
                }

                return r;
            }, [1, 1])
            .reduce((r, e) => r -= e, 0);
    }
}

//console.log(solution.add([1, 1], [1, 0]))
//console.log(solution.multiply([3.5, -2], 2))
//console.log(solution.length([3, 4]))
//console.log(solution.dot([1, 0], [0, -1]))
console.log(solution.cross([3, 7], [1, 0]));
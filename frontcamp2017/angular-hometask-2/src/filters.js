export const startFrom = function() {
    return function (data, startFrom) {
        return data.slice(startFrom);
    }
};

export const range = function() {
    return function (input, total) {
        total = parseInt(total);

        for (let i = 0; i < total; i++) {
            input.push(i);
        }

        return input;
    };
};

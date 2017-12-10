module.exports = function(source) {
    let parsedSourceJSON = JSON.parse(source);

    function eachRecursive(obj) {
        for (var k in obj) {
            if (typeof obj[k] == "object" && obj[k] !== null){
                eachRecursive(obj[k]);
            } else {
                // Remove property if its a number
                if (!isNaN(+k)) {
                    delete obj[k];
                }
            }
        }

        return obj;
    }

    parsedSourceJSON = eachRecursive(parsedSourceJSON);

    return JSON.stringify(parsedSourceJSON);
};
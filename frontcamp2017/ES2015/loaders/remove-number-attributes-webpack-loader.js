module.exports = function(source) {
    let parsedSourceJSON = JSON.parse(source);

    function loopThroughObjectProps(obj) {
        for (var k in obj) {
            if (typeof obj[k] == "object" && obj[k] !== null){
                loopThroughObjectProps(obj[k]);
            } else {
                // Remove property if its a number
                if (!isNaN(+k)) {
                    delete obj[k];
                }
            }
        }

        return obj;
    }

    parsedSourceJSON = loopThroughObjectProps(parsedSourceJSON);

    return JSON.stringify(parsedSourceJSON);
};
module.exports = function(source) {
    let parsedSourceJSON = JSON.parse(source);

    function loopThroughObjectProps(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (typeof obj[prop] == "object" && obj[prop] !== null){
                    loopThroughObjectProps(obj[prop]);
                } else {
                    // Remove property if its a number
                    if (!isNaN(+prop)) {
                        delete obj[prop];
                    }
                }
            }
        }

        return obj;
    }

    parsedSourceJSON = loopThroughObjectProps(parsedSourceJSON);

    return JSON.stringify(parsedSourceJSON);
};
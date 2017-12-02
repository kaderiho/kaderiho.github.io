module.exports = function () {
    return {
        visitor: {
            ExpressionStatement(path) {
                // remove ONLY not oommented console.log
                if (path.node.expression.callee.object.name && path.node.expression.callee.property.name) {
                    path.remove();
                }
            }
        }
    };
};

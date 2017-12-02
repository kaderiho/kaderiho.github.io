module.exports = function () {
    return {
        visitor: {
            ExpressionStatement(path) {
                if (!path.node.expression.callee) {
                    return;
                }

                if (!path.node.expression.callee.object || !path.node.expression.callee.property) {
                    return;
                }

                if (path.node.expression.callee.object.name === 'console' && path.node.expression.callee.property.name === 'log') {
                    path.remove();
                }
            }
        }
    };
};

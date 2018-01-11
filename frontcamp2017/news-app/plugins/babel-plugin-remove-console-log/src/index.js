module.exports = function () {
    return {
        visitor: {
            ExpressionStatement(path) {
                // Remove all commented console.log expressions
                if (path.node.trailingComments && path.node.trailingComments.length) {
                    if (path.node.trailingComments[0].value.indexOf('console.log') !== -1) {
                        path.remove();
                        return;
                    }
                }

                // Remove all not-commented console.log expressions
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

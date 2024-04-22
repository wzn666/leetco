function treeToArray(tree) {
    let result = [];

    function traverse(node) {
        if (node) {
            result.push(node.value); // 假设每个节点都有一个 'value' 属性

            if (node.children) {
                for (let child of node.children) {
                    traverse(child);
                }
            }
        }
    }

    traverse(tree);

    return result;
}

// 示例用法
let tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
            children: [
                { value: 'grandchild1' },
                { value: 'grandchild2' }
            ]
        },
        {
            value: 'child2',
            children: [
                { value: 'grandchild3' }
            ]
        }
    ]
};

console.log(treeToArray(tree));
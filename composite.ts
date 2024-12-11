interface TreeNode {
    name: string;
    display(): void;
}

class LeafNode implements TreeNode {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log('----Leaf name: ', this.name);
    }
}

class BranchNode implements TreeNode {
    name: string;
    private nodes: TreeNode[] = [];  //composite design pattern

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        if (this.nodes.length)
            console.log('--Branch name: ', this.name);
        else
            console.log('Branch name: ', this.name);

        this.nodes.forEach(node => node.display());
    }

    addNode(node: TreeNode) {
        this.nodes.push(node);
    }

    removeNode(node: TreeNode) {
        const index = this.nodes.findIndex(n => n.name === node.name)
        if (index >= 0)
            this.nodes.splice(index, 1);
    }
}


//Client
const root = new BranchNode('Root');
const b1 = new BranchNode('Branch-B1');
const b2 = new BranchNode('Branch-B2');
const b3 = new BranchNode('Branch-B3');
const b4 = new BranchNode('Branch-B4');

const l1 = new LeafNode('Leaf-l1');
const l2 = new LeafNode('Leaf-l2');
const l3 = new LeafNode('Leaf-l3');
const l4 = new LeafNode('Leaf-l4');


root.addNode(b1);
root.addNode(b2);

b1.addNode(l1);
b1.addNode(l2);

b2.addNode(l3);
b2.addNode(l4);

root.display();

// b2.display();

// l4.display();


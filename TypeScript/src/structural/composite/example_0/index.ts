import { Component } from "./abstract/Component";
import { Composite } from "./concrete/Composite";
import { Leaf } from "./concrete/Leaf";

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log("Client: I've got a simple component:");
clientCode(simple);

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
branch2.add(new Leaf());

tree.add(branch1);
tree.add(branch2);

console.log("Client: Now I've got a composite tree:");
clientCode(tree);

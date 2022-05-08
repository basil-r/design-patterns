## Encapsulate what is changing.
#### Highlight aspects of the application that can change and separate them from those that always remain constant.
##### Select the variable components and encapsulate them so that they can be modified or extended later without affecting the constant components.
## Prefer composition over inheritance.
## Program at the interface level.
#### Program at the interface level, not at the implementation level.
##### An interface will be used to represent each aspect of a behavior, and each implementation of a behavior aspect will be represented by an implementation of that interface.
## Strive for loose coupling of interacting objects.
##### If two objects can interact without having practically any information about each other, such objects are called loosely coupled.
* The only thing that one object knows about another is that it implements some interface.
* Any one object at runtime can be replaced with another - and the second will not notice it.
* Adding new types of one does not require modification of the second
* These objects can be reused independently of each other
* Changes in one or the other object do not affect the other side
## Classes should be open for extension, but closed for change.
## Code should depend on abstraction, not specific classes.
#### Dependency inversion principle.
##### It requires that high-level components do not depend on low-level components; instead, both must depend on abstractions.
A "high-level" component is a class whose behavior is defined in the context of other, "low-level" components.
* References to specific classes should not be stored in variables. When using new, a reference to a specific class is retained. Use the factory!
* The architecture should not have classes derived from concrete classes. Inheriting from a specific class creates a dependency on it. Define classes derived from abstractions - interfaces or abstract classes
* Methods must not override methods implemented in any of its base classes. If you override the implemented method, then the base class is a poor abstraction. Methods implemented in the base class must be used by all subclasses.
## Interact only with friends.
#### Minimum Awareness Principle: Communicate only with close friends.
When designing a system for any object, special attention should be paid to the number of classes with which it interacts, and how this interaction is organized.
This principle prevents the creation of architectures with a large number of tightly coupled classes in which a change in one part of the system cascades to other parts.
##### Let's take an arbitrary object; according to the principle, from any method of this object only methods should be called that belong to:
* to the object itself;
* objects passed in method parameters;
* any object created inside the method;
* any component of the object.
## Do not call us - we will call you ourselves.
#### The Hollywood principle allows low-level components to be plugged into the system, but high-level components themselves determine when and how they should be used. In other words, high-level components prevent low-level components from “taking the initiative”.
## A class should only have one reason to change.
##### The principle dictates that each class should be assigned one — and only one — responsibility.
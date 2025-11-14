Reflection/Critical Thinking

1. How does TypeScript enforce type safety?
TypeScript checks the types of variables and function parameters before running the code. This helps catch small mistakes early, like using a string where a number is expected.

2. How did inheritance reduce code duplication?
The shared logic like displayDetails() and product properties are in the Product class, so subclasses like PhysicalProduct and DigitalProduct only need to add what’s different.

3. Benefits of encapsulation and access modifiers?
Encapsulation hides details inside the class. Using private or protected keeps data safe and makes the program easier to understand and change later.

4. How would polymorphism help if adding a new product type?
If we add something like a SubscriptionProduct, it can extend Product and use the same methods while adding its own logic, without changing existing code.
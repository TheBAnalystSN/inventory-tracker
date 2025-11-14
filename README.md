# Inventory Tracker – TypeScript SBA

This project is an Inventory Tracker built using **TypeScript**, focusing on classes, inheritance, modules, and structuring an application using clean folder organization. It demonstrates how to manage product types, apply tax rules, and display product information using TypeScript OOP concepts.

---

## Project Structure & How Bryan Santos Helped Me

One of the biggest challenges I had was organizing my folders correctly so TypeScript could recognize my imports and exports. **Bryan Santos helped me fix my folder structure**, and once I followed his guidance, my modules began working without errors.

Here is the final folder structure:
inventory-tracker/
│── package.json
│── tsconfig.json
│── dist/ (compiled JavaScript output)
└── src/
├── app.ts
└── models/
├── Product.ts
├── PhysicalProduct.ts
├── DigitalProduct.ts

Organizing the project this way helped avoid TypeScript module resolution issues and made the code easier to maintain.

---

## What the Inventory Tracker Does

The Inventory Tracker demonstrates:

- Creating multiple product classes with TypeScript  
- Using inheritance to extend base classes  
- Applying tax rules differently for physical and digital products  
- Displaying fully formatted product details  
- Structuring code using TypeScript modules  
- Compiling TS → JS using a TypeScript configuration file  
- Running the project through Node after compilation  

---

## How to Run the Project

### **1. Install Dependencies**

```sh
npm install

npm run build

node dist/app.js

Sources I Used

While completing this assignment, I used the following resources for guidance:

W3Schools – for reviewing JavaScript fundamentals

TypeScript Classes Documentation – to understand constructors, inheritance, and access modifiers

MDN Web Docs (Mozilla Developer Network) – for deeper explanations of related JavaScript behavior

Help from Bryan Santos, especially for correcting my folder structure

These sources helped me better understand object-oriented programming in TypeScript and how modules should be organized

This project helped me understand how to work with classes, inheritance, and modules in TypeScript. At first, I struggled with the folder structure and kept receiving import/export errors, which slowed me down. After getting help and reviewing documentation, I learned how TypeScript expects files to be organized, and everything became much clearer.

I also learned how TypeScript compiles into JavaScript using tsconfig.json, how to resolve errors related to ES modules vs. CommonJS, and how to run my compiled code through Node. Overall, the project pushed me, but it gave me a stronger foundation in TypeScript and object-oriented programming


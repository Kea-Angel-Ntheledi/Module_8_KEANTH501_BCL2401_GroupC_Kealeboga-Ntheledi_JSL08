// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"

// 2. Define a class called `BankBranch` for managing branch information.

// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.

class BankBranch {
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      BankBranch.bankBranchInstance = this;
    } 
    return BankBranch.bankBranchInstance;
  }


  // 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.
  getBranchInfo() {
    return this.branchInfo;
  }
}
  // 5. In the usage section:
  //    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
  //    - Use the `getBranchInfo` method to retrieve branch information from the instances.
  //    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.""

  const branchA = new BankBranch("Branch A Info");
  const branchB = new BankBranch("Branch B Info");

  console.log(branchA === branchB);
  console.log(branchA.getBranchInfo());
  console.log(branchB.getBranchInfo());

  // This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

  // NOTES:
  // This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
  // Even if we attempt to create another instance of the branch, we receive the original instance,
  // ensuring that there is only one set of branch information throughout the application.

  // - We define a `BankBranch` class that represents bank branch information.
  // - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
  // - The `bankBranchInstance` variable is used to hold the single instance of the class.
  // - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
  //   If it does, it returns the existing instance; otherwise, it creates a new one.
  // - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
  // - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
  //   ensuring that there is only one set of branch information throughout the application.

  // Define a variable to hold the singleton instance

  // Define methods to manage branch information

  // Other methods related to branch management can be added here.


// Usage
 // true, both variables point to the same instance
# Bulk File Renamer Tool

A simple, lightweight Node.js utility for bulk renaming files in a specified directory. This tool provides a flexible way to rename files based on a custom renaming function you define.

## Features

- Simple and easy to use
- Rename files in bulk with a custom renaming function
- Pure Node.js, no external dependencies

## Installation

Since this tool is a simple script, it doesn't need to be installed through npm. You can copy the `index.js` file into your project or any desired directory.

## Usage

1. Ensure you have Node.js installed on your system.
2. Copy the `index.js` file into your project or a specific directory.
3. Modify the `myDirectoryPath` variable in the `index.js` file to specify the directory containing the files you want to rename.
4. Define your custom renaming logic in the `renameFunction`. This function takes the current filename as an argument and should return the new filename.
5. Run the script with Node.js:

   ```bash
   node index.js
   ```

### Example

Suppose you want to prepend "new_" to every file name in the directory "/path/to/your/directory". Your `renameFunction` would look like this:

```javascript
(fileName) => {
return 'new_' + fileName;
}
```

## Customizing Renaming Function

The `renameFunction` is where you define how the files should be renamed. It receives the current filename as an argument and must return the new filename. Here's the prototype:

```javascript
/**
* @param {string} fileName - The current file name
* @return {string} The new file name
  */
  function renameFunction(fileName) {
  // Implement your renaming logic here
  return fileName; // Modify this line
  }
  ```

## Contributing

Feel free to fork the repository and submit pull requests with enhancements or fixes.

## License

This project is open source and available under the MIT License.

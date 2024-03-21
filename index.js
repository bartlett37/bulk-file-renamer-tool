const fs = require('fs-extra');
const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require('path');

/**
 * Renames files in a given directory based on the provided renaming function.
 *
 * @param {string} dirPath - The path to the directory containing the files to be renamed.
 * @param {Function} renameFunction - A function that takes the current file name and returns the new file name.
 */
function bulkRenameFiles(dirPath, renameFunction) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err);
      return;
    }

    files.forEach((currentFileName) => {
      const currentFilePath = path.join(dirPath, currentFileName);
      const newFileName = renameFunction(currentFileName);
      const newFilePath = path.join(dirPath, newFileName);

      fs.rename(currentFilePath, newFilePath, (err) => {
        if (err) {
          console.error(`Error renaming file ${currentFileName} to ${newFileName}:`, err);
        } else {
          console.log(`Successfully renamed ${currentFileName} to ${newFileName}`);
        }
      });
    });
  });
}

export {
  bulkRenameFiles
}

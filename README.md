# Dependency Cleaner
Dependency cleaner is an extension built for Visual Studio Code to make removing dependencies from your projects easier. The idea came to me when I was in work and noticed our node_modules folder was becoming convoluted and in turn, hard to manage. It's easy enough to remove references from our projects but we tend to forget to perform an npm uninstall. This extension aims to overcome this problem and make the process a little easier.

## How to use

![alt text](https://raw.githubusercontent.com/Jackthomsonn/dependency-cleaner/master/images/dependency-cleaner.gif)

## Known Issues

No issues reported as of yet please feel free to report anything you find!

## Release Notes

### 1.0.3
* This release fixes a bug where a dependency reference was saved upon the extensions instantiation meaning no references after its first instance would be recognised

### 1.0.0
Initial Release
* Added initial functionality
* Cleaned up hierarchy of folders

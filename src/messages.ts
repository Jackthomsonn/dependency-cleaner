import * as vscode from 'vscode'

export function showSuccessMessage(successMessage: string) {
  return vscode.window.showInformationMessage(successMessage)
}

export function showErrorMessage(errorMessage: string) {
  return vscode.window.showErrorMessage(errorMessage)
}
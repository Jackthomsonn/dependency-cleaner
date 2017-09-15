import * as vscode from 'vscode'

export function showSuccessMessage(successMessage: string) {
  return vscode.window.showInformationMessage(successMessage)
}

export function showErrorMessage(errorMessage: string) {
  return vscode.window.showErrorMessage(errorMessage)
}

export function showInfoMessage(infoMessage: string) {
  return vscode.window.showInformationMessage(infoMessage)
}
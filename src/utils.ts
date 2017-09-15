import * as vscode from 'vscode'

export const editor: vscode.TextEditor = vscode.window.activeTextEditor

export function getDependencyName() {
  let selectedLine: number = editor.selection.active.line
  let dependencyReference = editor.document.lineAt(selectedLine).text

  if (dependencyReference === '' || !dependencyReference) {
    vscode.window.showErrorMessage('No dependency reference available')
  }

  if (dependencyReference.includes('import')) {
    return dependencyReference.split('from').pop().replace(/['";]+/g, '').trim()
  } else {
    return dependencyReference.split('require').pop().replace(/['";, ()]+/g, '').trim()
  }
}
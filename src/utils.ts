import * as vscode from 'vscode'

export const editor: vscode.TextEditor = vscode.window.activeTextEditor
export const selectedLine: number = editor.selection.active.line
export const dependencyReference: string = editor.document.lineAt(selectedLine).text

export function getDependencyName() {
  if (dependencyReference === '' || !dependencyReference) {
    vscode.window.showErrorMessage('ERROR')
  }

  if (dependencyReference.includes('import')) {
    return dependencyReference.split('from').pop().replace(/['";]+/g, '').trim()
  } else {
    return dependencyReference.split('require').pop().replace(/['";, ()]+/g, '').trim()
  }
}
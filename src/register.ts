import * as vscode from 'vscode'
import { executeCommand } from './shell'
import { getDependencyName, editor } from './utils'
import { showSuccessMessage, showErrorMessage } from './messages'

export function registerExtension() {
  return vscode.commands.registerCommand('extension.remove', () => {
    if (!editor) {
      return
    } else if (editor.selection.isEmpty) {
      return showErrorMessage('Make sure you highlight your dependency declaration')
    }
    else {
      executeCommand(`npm uninstall ${getDependencyName()} --save`)
        .then(showSuccessMessage)
        .catch(showErrorMessage)
    }
  })
}
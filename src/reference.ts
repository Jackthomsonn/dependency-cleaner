import * as vscode from 'vscode'
import { showSuccessMessage } from './messages'
import { editor, getDependencyName } from './utils'

export function removeReference(resolve) {
  vscode.window.activeTextEditor
    .edit((selectedText) => selectedText.replace(editor.selection, ''))
    .then(resolve(`Removed dependency ${getDependencyName()} successfully`))
}
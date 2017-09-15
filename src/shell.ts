import * as vscode from 'vscode'
import { exec } from 'child_process'
import { removeReference } from './reference'

export function executeCommand(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: vscode.workspace.rootPath }, (error: Error, stdout: string, stderr: string) => {
      if (!error || error === null) {
        removeReference(resolve)
      } else {
        reject(error.message)
      }
    })
  })
}
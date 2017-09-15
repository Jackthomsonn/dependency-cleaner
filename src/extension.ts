import * as vscode from 'vscode'
import { registerExtension } from './register'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(registerExtension())
}
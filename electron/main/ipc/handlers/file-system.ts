// Handlers for file system-related IPC (file system).

import fs from 'node:fs/promises'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleReadFile(_event: any, filePath: string): Promise<string> {
  return fs.readFile(filePath, 'utf-8')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleReadFileBuffer(_event: any, filePath: string): Promise<Buffer> {
  return fs.readFile(filePath)
}

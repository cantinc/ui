import { type UploadFile } from '../../../ui'

export const extReg = /^(.+)\.([^.]+)$/

export const getExtension = (file?: UploadFile | File): string => {
  if (!file?.name) {
    return '???'
  }

  const fileName = file.name.match(extReg)

  if (!fileName?.[2]) {
    return '???'
  }

  return fileName[2].toLowerCase()
}

export * from './User'
export * from './Group'
export * from './Post'
export * from './Comment'
export * from './inputTypes'
export * from './Auth'

import { adminNexusSettings } from '@prisma-tools/nexus'
export const adminSettings = adminNexusSettings()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { buildSettingsSchema, generatePages, generateGraphql } from '@prisma-tools/admin/dist/generateAdmin';

buildSettingsSchema();

generatePages();

// generateGraphql();

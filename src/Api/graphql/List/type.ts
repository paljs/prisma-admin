import { objectType } from '@nexus/schema'

export const List = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'List',
  definition(t) {
    t.int('id')
    t.list.int('intger')
    t.list.float('flout')
    t.list.string('string')
    t.list.field('enums', { type: 'Rols' })
    t.list.boolean('boolean')
  },
})

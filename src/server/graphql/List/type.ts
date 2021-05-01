import { objectType } from 'nexus'

export const List = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'List',
  definition(t) {
    t.int('id')
    t.list.int('integer')
    t.list.float('float')
    t.list.string('string')
    t.list.field('enums', { type: 'Rols' })
    t.list.boolean('boolean')
  },
})

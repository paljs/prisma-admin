import { objectType } from '@nexus/schema'

export const List = objectType({
  name: 'List',
  definition(t) {
    t.int('id', { nullable: false })
    t.int('intger', { nullable: false, list: [true] })
    t.float('flout', { nullable: false, list: [true] })
    t.string('string', { nullable: false, list: [true] })
    t.field('enums', { nullable: false, list: [true], type: 'Rols' })
    t.boolean('boolean', { nullable: false, list: [true] })
  },
})

const fetch = require('node-fetch')

const AyahType = require('./schemas/AyahType')
const SurahType = require('./schemas/SurahType')
const QuranType = require('./schemas/QuranType')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean
} = require('graphql')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      quran: {
        type: QuranType,
        args: {
          edition: {
            type: GraphQLString,
            defaultValue: ''
          }
        },
        resolve: (root, args) => fetch(`http://api.alquran.cloud/quran${args.edition == '' ? '': '/' + args.edition}`)
          .then(response => response.json())
          .then(json => json.data)
      },
      surahs: {
        type: new GraphQLList(SurahType),
        resolve: root => fetch('http://api.alquran.cloud/surah')
          .then(response => response.json())
          .then(json => json.data)
      },
      surah: {
        type: SurahType,
        args: {
          number: {
            type: GraphQLInt
          }
        },
        resolve: (root, args) => fetch(`http://api.alquran.cloud/surah/${args.number}`)
          .then(response => response.json())
          .then(json => json.data)
      }
    })
  })
})
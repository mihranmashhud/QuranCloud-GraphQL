const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} = require('graphql')

const SurahType = require('./SurahType')

module.exports = new GraphQLObjectType({
  name: 'Quran',
  description: '...',

  fields: () => ({
    surahs: {
      type: new GraphQLList(SurahType),
      resolve: json => json.surahs
    },
    surah: {
      type: SurahType,
      args: {
        number: {
          type: GraphQLInt
        }
      },
      resolve: (json, args) => json.surahs[args.number - 1]
    }
  })
})
const fetch = require('node-fetch')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean
} = require('graphql')

const SurahType = new GraphQLObjectType({
  name: 'Surah',
  description: '...',

  fields: () => ({
    code: {
      type: GraphQLInt,
      resolve: json => json.code
    },
    status: {
      type: GraphQLString,
      resolve: json => json.status
    },
    name: {
      type: GraphQLString,
      resolve: json => json.data.name
    },
    englishName: {
      type: GraphQLString,
      resolve: json => json.data.englishName
    },
    englishNameTranslation: {
      type: GraphQLString,
      resolve: json => json.data.englishNameTranslation
    },
    revelationType: {
      type: GraphQLString,
      resolve: json => json.data.revelationType
    },
    numberOfAyahs: {
      type: GraphQLInt,
      resolve: json => json.data.numberOfAyahs
    },
    ayahs: {
      type: new GraphQLList(AyahType),
      resolve: json => json.data.ayahs
    }
  })
})

const AyahType = new GraphQLObjectType({
  name: 'Ayah',
  description: '...',

  fields: () => ({
    number: {
      type: GraphQLInt,
      resolve: json => json.number
    },
    text: {
      type: GraphQLString,
      resolve: json => json.text
    },
    numberInSurah: {
      type: GraphQLInt,
      resolve: json => json.numberInSurah
    },
    juz: {
      type: GraphQLInt,
      resolve: json => json.juz
    },
    manzil: {
      type: GraphQLInt,
      resolve: json => json.manzil
    },
    page: {
      type: GraphQLInt,
      resolve: json => json.page
    },
    ruku: {
      type: GraphQLInt,
      resolve: json => json.ruku
    },
    hizbQuarter: {
      type: GraphQLInt,
      resolve: json => json.hizbQuarter
    },
    sajda: {
      type: GraphQLBoolean,
      resolve: json => json.sajda
    }
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      surah: {
        type: SurahType,
        args: {
          number: {
            type: GraphQLInt
          }
        },
        resolve: (root, args) => fetch(`http://api.alquran.cloud/surah/${args.number}`)
          .then(response => response.json())
      }
    })
  })
})
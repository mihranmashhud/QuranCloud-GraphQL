const fetch = require('node-fetch')

const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType
} = require("graphql")

const AyahType = require('./AyahType')

module.exports = new GraphQLObjectType({
  name: 'Surah',
  description: '...',
  fields: () => ({
    number: {
      type: GraphQLInt,
      resolve: json => json.number
    },
    name: {
      type: GraphQLString,
      resolve: json => json.name
    },
    englishName: {
      type: GraphQLString,
      resolve: json => json.englishName
    },
    englishNameTranslation: {
      type: GraphQLString,
      resolve: json => json.englishNameTranslation
    },
    revelationType: {
      type: GraphQLString,
      resolve: json => json.revelationType
    },
    numberOfAyahs: {
      type: GraphQLInt,
      resolve: json => json.numberOfAyahs
    },
    ayahs: {
      type: new GraphQLList(AyahType),
      resolve: json => json.hasOwnProperty('ayahs') ? json.ayahs : fetch(`http://api.alquran.cloud/surah/${json.number}`)
        .then(response => response.json())
        .then(json => json.data.ayahs)
    }
  })
})
const {
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType
} = require('graphql')

module.exports = new GraphQLObjectType({
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
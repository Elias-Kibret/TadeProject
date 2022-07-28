// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import news from './news'
import TopNewsRowFromat from './TopNewsRowFromat'
import TopNewsColumanFormat from './TopNewsColumanFormat'
import publication from './publication'
import SelectedAwards from './SelectedAwards'
import Awards from './Awards'
import selectedPublications from './selectedPublications'
import research from './research'
import SelectedResearch from './SelectedResearch'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    news,
    TopNewsColumanFormat,
    TopNewsRowFromat,
    publication,
    SelectedAwards,
    Awards, 
    selectedPublications,
    SelectedResearch,
    research
  ]),
})

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import news from './news'
import TopNewsRowFromat from './TopNewsRowFromat'
import TopNewsColumanFormat from './TopNewsColumanFormat'
import Toppublication from './Toppublication'
import SelectedAwards from './SelectedAwards'
import Awards from './Awards'
import SelectedPresentations from './SelectedPresentations'
import selectedPublications from './selectedPublications'
import Presentations from './Presentations'
import Journalpublications from './Journalpublications'
import ConferencePublications from './ConferencePublications'
import Contact from './Contact'
import researchInterest from './researchInterest'
import Organizers from './Organizers'
import AreaOfContributions from './AreaOfContributions'

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
    Toppublication,
    SelectedAwards,
    Awards, 
    selectedPublications,
    SelectedPresentations,
    Presentations,
    Contact,
    researchInterest,
    Organizers,
    AreaOfContributions,
    Journalpublications,
    ConferencePublications
  
  ]),
})

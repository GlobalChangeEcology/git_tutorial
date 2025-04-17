import { defineAppSetup } from '@slidev/types'
import StickyNote from '../components/StickyNote.vue'
import Admonition from '../components/Admonition.vue'
import QuoteBlock from '../components/QuoteBlock.vue'
import Timeline from '../components/Timeline.vue'
import InteractivePoll from '../components/InteractivePoll.vue'
import CustomTable from '../components/CustomTable.vue'
import CustomImage from '../components/CustomImage.vue'



export default defineAppSetup(({ app }) => {
    app.component('StickyNote', StickyNote)
    app.component('Admonition', Admonition)
    app.component('QuoteBlock', QuoteBlock)
    app.component('Timeline', Timeline)
    app.component('InteractivePoll', InteractivePoll)
    app.component('CustomTable', CustomTable)
    app.component('CustomImage', CustomImage)
  
  })
module.exports = {
  title: "EVT",
  subtitle: "EventEmitter's typesafe replacement",
  description: "Accessible yet powerful. Designed to make the most of TypeScript. Deno/Node/Browser/RN.",
  preview: "https://evt.land/assets/img/social_preview.png", //Social media preview image
  baseUrl: "https://evt.land",
  apiUrl: "https://docs.evt.land",
  learnMoreUrl: "https://docs.evt.land",
  githubUrl: "https://github.com/garronej/evt",
  stackblitzUrl: "https://stackblitz.com/edit/evt-playground?embed=1&file=index.ts&hideExplorer=1",
  "quotes": [
    {
      "logo": "assets/img/logo_connext.png",
      "url": "https://connext.network",
      "quote": `At <a target="_blank" rel="noopener noreferrer" href="https://connext.network">Connext</a>, we are building complex, distributed systems that rely heavily on event-driven processes. 
We eventually found that the capabilities of the Node.js EventEmitter could not handle some of our more complex event-based needs 
such as attaching an event based on a filter. 
We are grateful to have found EVT as a suitable replacement which gives us strong typing and a powerful API for all of our eventing needs. 
We were able to eliminate a lot of boilerplate and complicated code around resolving promises and detaching listeners by using <span class="code">waitFor</span>. 
We have also exposed the EVT interface through our API so our users can make use of these powerful features.`,
      "author": `Rahul Sethuram, CTO at <a target="_blank" rel="noopener noreferrer" href="https://connext.network">Connext</a>`
    },
    {
      "logo": "assets/img/logo_the_graph.png",
      "url": "https://thegraph.com",
      "quote": `It's been a great experience so far.<br>
Tried EventEmitter3 before but it's such a hassle to define event types cleanly.<br>
Now with EVT, all of our interfaces have an <span class="code">events</span> member that has <span class="code">foo: Evt&lt;FooEvent&gt;</span> members for all event types.`,
      "author": `Jannis Pohlmann, Tech Lead & Co-Founder at <a target="_blank" rel="noopener noreferrer" href="https://thegraph.com"><span style="white-space:nowrap;">The Graph</span></a>`
    },
    {
      "logo": "assets/img/logo_semasim.png",
      "url": "https://www.semasim.com",
      "quote": `EVT catches at compile time countless errors that other event management libraries would have let slip through. 
It forces you to write code in ways TypeScript can understand so you always know what is what.`,
      "author": `William Thiery, Frontend Dev at <a target="_blank" rel="noopener noreferrer" href="https://semasim.com">Semasim</a>`
    }
  ]
}

-React is basically a js library or ui library..sometimes referred as frameworks
-React diye dynamic websites banano jai with the help of virtual dom
-Basically kono component change hole, first e virtual dom change hoi..react er og dom er shathe compare kore update kore.
-Components holo reusable piece of codes that can be reused to build elements on a page
-Components can  be broken down to compositions jeita diye UI banano jai
-Components can be functions or classes..can also take props like args or attributes
-State as in the data that component manages internally like fetched data, UI data etc
-Global state - relates to the website as a whole
-Hooks basically enables functions to use state within its functional component(without writing a class)
-jsx
-SPA..single page app ...can deploy to any kind of host
-SSR..server side render ...needs a server like vercel
-SSG..static side generation ...


-render...take my react components..convert to actual html and show them to screen
-strictmode..wrappercomponent..looks for any problems
-app.jsx or any jsx is the main component..shits we see there are in the website
-rafce..react arrow function component export..for creating dirrect arrow functions with export


-main.jsx e render hoi..app.jsx e shob component gula import hoi, export hoi app theke
-props diye khali content na..styling o change kora jai
-props ke {} wrap kori..bhitore ja thakbe sheita children or title..whatever we want

-inline mane side by side with the location

********pagegular modhe shob component call hobe..lets say homepage..homepage er modhe navbar..cards..joblisting..view jobs..eigula component call hobe


*********App.jsx er modhe shob layout call hobe ar page gula  call hobe layout er routes er modhe

import link from react touter dom..to embed links instead of anchor tags


- basically...html snippet section ta component X.jsx e copy kore thik korbo
then, oita pages er Xpages.jsx e import korbo
then, oita app.jsx e import e routes er modhe boshabo

simple as that

- Useeffect allows our component to have sideeffects...like lets say homepage and jobs e backend theke jobs display korar jonno useefct use korbo..dynamic right? instead of just using jobs,json..so new kono job add hole jate sideeffect ta dekha jai ei 2 page e so useeffect

-api theke job pele store to kora lagbe kotha frontend e...so usestate o use kora lagbe

-react suspense naam e ekta jinish aseh jeita..render while fetching kore

--dataloader is basically a function that can be used instead of useeffect

- useloaderdata is besically used to check the result of the fetched data by the loader function




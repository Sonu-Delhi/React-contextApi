import React, { useContext } from 'react'
import { store } from './store'

// const App = () => {
//   return (
//     <div>
//       {
//         <store.Consumer>
//             {
//                 (ctx)=><p>Counter : {ctx.counter}</p>
//             }
//         </store.Consumer>
//       }
//     </div>
//   )
// }


// useContext
const App = () => {
    let ctxstore = useContext(store)
    return (
      <div>
        <p>Counter : {ctxstore.counter}</p>
      </div>
    )
  }

export default App

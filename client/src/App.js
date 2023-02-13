import React, { useEffect,useState } from 'react'

function App() {

    const [backenddata,setBackendData] = useState([{}])

    useEffect(() => {
      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData (data)
        }
      )
    }, [] )

  return (
    <div>
          {(typeof backenddata.user === 'undefined' ) ? (
            <p>Loading...</p>
          ): (
            backenddata.user.map((user,i) => (
              <p key={i}>{user}</p>
            ))
          )}
    </div>
  )
}

export default App
import React from 'react';

function App({data}:{data:any}) {
    return (
        <>
            <h1> Hello World! </h1>
            <div>{data.data}</div>
        </>
    );
}

export default App;

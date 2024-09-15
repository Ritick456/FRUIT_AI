import React, { useState } from 'react'

const Chatbot = () => {

    const [value , setvalue] = useState('');
    const [response ,  setresponse] = useState(
        'hi how can i help you'
    );

    function handlechange(e){
        setvalue(e.target.value);
    }
    async function handlesubmit(){
        const res = await axios.post()
        setresponse(res.data)
    }

  return5 (
    <div>
        <div>
            <input type="text" onChange={handlechange}/>
        </div>
        <div>
            <button onSubmit={handlesubmit}>
                Click me for answer
            </button>
        </div>
        <div>
            <p>
                {response}
            </p>
        </div>
    </div>
  )
}

export default Chatbot
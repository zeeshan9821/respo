import React, { useState } from 'react'
import Show from './Show'

const Detail = () => {
    const [data, setData] = useState({})
    const [Uname, setUname] = useState("")
    const [DLoad, setDLoad] = useState(false)
    const [repositories, setRepositories] = useState([])
    const [Loading, setLoading] = useState(false)


    const changeHandler = e => {
        setUname(e.target.value)
    }

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true);
        const profile = await fetch(`https://api.github.com/users/${Uname}`)
        const profileJson = await profile.json()
       
        const repo = await fetch(profileJson.repos_url)
        const repoJson = await repo.json();
        console.log(repoJson)

        if (profileJson) {
            setData(profileJson)
            setRepositories(repoJson)
            setDLoad(true)
        }
        setLoading(false);
    }

    return (
    <React.Fragment>
        <div className='search' style={{ padding: '20px'}} >
            <div className='input' style={{ width: '100%', float:"center" }}>
                
                <input
                    placeholder='Username'
                    type='text'
                    value={Uname}
                    onChange={changeHandler} />

            </div>
            <br></br>
            <button
                style={{ width: '160px' }}
                type="submit" onClick={submitHandler}>
                
                        Search
                    </button>
            {Loading && <div>
                <div className="ui text loader">Loading...</div>
            </div>}
            {!Loading && DLoad && <Show data={data} repositories={repositories} />}
        </div>
    </React.Fragment>
    );
}


export default Detail;
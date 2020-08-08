import React from 'react'

const Display = ({ data, repositories }) => {
    return (
        <table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Location</th>
                    <th>Bio-Data</th>
                    <th>Repositories</th>
                </tr></thead>
            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{!data.avatar_url ? ('') : (
                        <img src={data.avatar_url}
                            alt={data.avatar_url} />
                    )}
                    </td>
                    <td>{data.location}</td>
                    <td>{data.bio}</td>
                    <td>{repositories.map((items) => (
                        <div  key={items.name}>
                            <div >
                            
                                <div >
                                    <a href={items.html_url}>{items.name}</a>
                                </div>
                            </div>
                        </div>
                    ))}</td>
                </tr>

            </tbody>
        </table>
    )
}
export default Display
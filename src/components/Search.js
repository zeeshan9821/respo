import React, { useState } from "react";
import "../App.css";



function Search() {
    const [EValue, setEValue] = useState("")
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState(false)
    const [Repos, setRepos] = useState([])

    React.useEffect(() => {
        if (!EValue) {
            return;
        }
        setLoading(true);
        fetch(`https://api.github.com/search/repositories?q=${EValue}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setLoading(false);
                setRepos(data.items);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                console.Error(err);
            });
    }, [EValue]);

    return (
    <React.Fragment>
        <div className="section" >
        <div className="searchbar">
                <div >
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            setEValue(e.target.elements.find.value);
                        }}>
                        <input
                            type="text"
                            name="find"
                            className="search"
                            placeholder="Search Repositories"
                        />
                    </form>
                    {Loading && <div>
                        <div >Loading..</div>
                    </div>}
                    {Error && (
                        <div>
                            Error.. Try Again!
                        </div>
                    )}
                    <div >
                        {Repos.map(repo => {
                            return (
                                <div>
                                   
                                    <div>
                                        <a  href={repo.html_url} target="_blank"> {repo.name}</a>
                                        <div >{repo.description}</div>
                                        <div>{repo.language}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="photo" >
                <div >
                    <div className="image">
                        <img style={{width:"500px",height:"350px"}}src="https://img.freepik.com/free-photo/smiling-young-man-holding-documents-while-sitting-desk-with-laptop_107420-20738.jpg?size=626&ext=jpg" />
                    </div>
                    <br></br>
                    <div className="name">
                        <b>JONY</b>
                        <br></br>
                   
                    <br></br>
                    <button  type="button" class="btn btn-primary btn-sm">Edit Profile</button>
                     
                    <br></br>
                    <ul class="navbar-nav flex-column text-left">
					<li class="nav-item active">
					    <a class="nav-link"><i class="fas fa-home fa-fw mr-2"></i>Nearly <span class="sr-only">(current)</span></a>
					</li>
                    <br></br>
					<li class="nav-item">
					    <a class="nav-link" ><i class="fas fa-bookmark fa-fw mr-2"></i>Switzerland</a>
					</li>
                    <br></br>
					<li class="nav-item">
					    <a class="nav-link"><i class="fas fa-user fa-fw mr-2"></i><href>zeeshan@gmail.com</href></a>
					</li>
				</ul>

                    </div>
                </div>
            </div>
           
        </div>
        </React.Fragment>
        );
}

export default Search;
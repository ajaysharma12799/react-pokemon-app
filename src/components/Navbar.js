import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg bg-dark navbar-dark text-white mb-3">
            <div className="container">
                <h4 className="display-5">Pokemon</h4>
                <form class="d-flex">
                <input class="form-control me-2" placeholder="Search Pokemon" />
                <button class="btn btn-success">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar

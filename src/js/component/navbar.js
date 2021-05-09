import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						className="logo"
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black-700x700.png"
					/>
				</a>
				<form className="d-flex">
					<input
						className="input form-control mr-sm-2"
						type="search"
						placeholder="Search Star Wars"
					/>
					<button
						className="search-btn btn btn-outline-light my-2 my-sm-0"
						type="submit">
						<div className="btn-text">
							<i className="fas fa-search"></i>
						</div>
					</button>
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenu2"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favoritos
						</button>
						<ul
							className="dropdown-menu"
							aria-labelledby="dropdownMenu2">
							<li>
								<button className="dropdown-item" type="button">
									Favorito1
								</button>
							</li>
							<li>
								<button className="dropdown-item" type="button">
									Favorito2
								</button>
							</li>
							<li>
								<button className="dropdown-item" type="button">
									Favorito3
								</button>
							</li>
						</ul>
					</div>
				</form>
			</div>
		</nav>
	);
};

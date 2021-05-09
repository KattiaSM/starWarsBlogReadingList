import React from "react";
import PropTypes from "prop-types";

export class Characters extends React.Component {
	render(props) {
		return (
			<div className="card-characters card col-lg-6 col-md-6  ">
				<div className="card-body">
					<img
						src="https://files.brainfall.com/wp-content/uploads/2015/10/which_star_wars_character_are_you_featured_large.jpg"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">
						Name: {this.props.name}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Gender: {this.props.gender}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Birth-Year: {this.props.birth_year}
					</h6>
					<a href="#" className="btn btn-light">
						<i className="fas fa-info-circle"></i>
					</a>
					<a href="#" className="btn btn-light">
						<i className="fas fa-heart"></i>
					</a>
				</div>
			</div>
		);
	}
}

Characters.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	birth_year: PropTypes.string
};

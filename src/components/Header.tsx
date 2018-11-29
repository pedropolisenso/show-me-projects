import React from 'react';

import SearchIcon from '../components/SVGs/search-icon'

const Header = () => {
	return (
		<header>
			<div className="icon-search">
				<SearchIcon />
			</div>
			<h1>Search projects informations</h1>
			<p>This is a project for found informations about any repository from company on github, so try use it and have fun!</p>
		</header>
	);
};

export default Header;

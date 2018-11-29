import React from 'react';

import Stars from '../components/SVGs/stars';
import Github from '../components/SVGs/github';

interface ListProps {
	data: Data[]
 }

 interface Data {
	full_name: string,
	html_url: string,
	updated_at: string,
	contributors: number,
	language: string,
	forks_count: number,
	description: string,
	stargazers_count: number
 }

 const List = (props: ListProps) => {
	return (
		<div className="item-description">
			{props.data.map((item, i) => {
				return(
					<div className="container-item" key={i}>
						<div className="header-description">
							<span>Project:</span> {item.full_name}
							<div className="icon-github">
								<Github />
							</div>
						</div>
						<div className="details">
							<div className="text-itens link-description">
								<span>Access project: </span>
								<a href={item.html_url} target="_blank">{item.html_url}</a>
							</div>
							<div className="text-itens last-update-description">
								<span>Last update:</span> {item.updated_at}
							</div>
							<div className="text-itens stars-description">
								<span>Stars:</span> {item.stargazers_count} <Stars />
							</div>
							<div className="text-itens contributors-description">
								<span>Contributors:</span> 8 people
							</div>
							<div className="text-itens language-description">
								<span>Language Used:</span> {item.language}
							</div>
							<div className="text-itens forks-description">
								<span>Forks Number:</span> {item.forks_count} to contribute
							</div>
							<div className="text-itens about-description">
								<span>The Description:</span> {item.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
 }

 export default List;

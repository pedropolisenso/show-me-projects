import React, { Component } from 'react';
import List from './List';
import { handleUrl } from '../utils/handleUrl';
import HTTP from '../configs/interception';

interface State {
	search: string,
	loading: boolean,
	pages: number,
	repositories: any,
	totalRepos: number,
	currentPage: number,
	error: string
}

interface Props {}

class Search extends Component<Props, State> {
	constructor(props: Props){
    super(props);
    this.state = {
      search: '',
			loading: false,
			pages: 0,
			repositories: [],
			totalRepos: 0,
			currentPage: 2,
			error: ''
    };
	}
	
	handleChange = (event: any) => {
    this.setState({
      search: event.target.value,
    });
	};

	loadMoreRepositories = (event: any) => {
		const { search, pages, currentPage, repositories } = this.state;
		const username = handleUrl(search);
		
		if (currentPage > pages) {
			return;
		}

		HTTP.get(`/${username}/repos?page=${currentPage}&per_page=20`)
		.then(({ data }) => {
			this.setState({ 
				currentPage: currentPage + 1,
				repositories: repositories.concat(data)
			});
		})
		.catch((error: string) => error);

		event.preventDefault();
	}
	
	handleSubmit = (event: any) => {
		const username = handleUrl(this.state.search);

		this.setState({
			loading: true,
			error: ''
		});

		HTTP.get(`/${username}`)
		.then(({ data }) => data.public_repos)
		.then((repos: number) => {
			HTTP.get(`/${username}/repos?page=1&per_page=20`)
			.then(({ data }) => {
				this.setState({
					pages: (Math.round(repos/20) + 1),
					repositories: data,
					loading: false,
					totalRepos: repos,
					error: ''
				})
			})
		})
		.catch((err: string) => {
			this.setState({
				loading: false,
				error: 'User or Company not found. Try again!',
				repositories: []
			});

			return err;
		})
		event.preventDefault();
	}

  render() {
		const { loading, repositories, totalRepos, error } = this.state;

		return (
			<div>
				<div className="search-field">
					<form onSubmit={this.handleSubmit}>
						<input onChange={this.handleChange} className="search" type="text" required />
						<button className="search-button">search</button>
					</form>
					<span>Try something like this: <strong>https://github.com/Netflix or only Netflix</strong>
					</span>
				</div>
				
				{loading && <p>loading...</p>}
				{error && <p className='error-message'>{error}</p>}
				
				<List data={repositories} />
			
				{repositories.length > 0 && repositories.length !== totalRepos &&
					<button onClick={this.loadMoreRepositories} className="load-more">load more</button>
				}
			</div>
    );
  }
}

export default Search;

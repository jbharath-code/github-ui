import React from 'react';
import styles from './styles.sass';

class ReposDetails extends React.Component {

	renderLicense = (license) => {
		return (
			<div>
				<span>
					{license.spdx_id}
				</span>
			</div>
		);
	}

	renderRepos = (repos) => {
		repos = repos.map((repo, index) => {
			return (
				<div className="repo-block" key={index}>
					<div>
						<a href={repo.html_url}>
							{repo.name}
						</a>
					</div>
					<div>
						{repo.description}
					</div>
					<div>
						<span>
							{repo.language}
						</span>
						{
							(repo.hasOwnProperty('license') && repo.license) 
							? 
							this.renderLicense(repo.license) 
							: 
							null
						}
						<span>
							{repo.upated_at}
						</span>
					</div>
				</div>
			);
		});

		return repos;
	}

    render() {
		return (
            <div>
				{
					(this.props.hasOwnProperty('repos') && this.props.repos.length > 0) 
					? 
					this.renderRepos(this.props.repos)
					: 
					<div>
						User has no repos
					</div>
				}
            </div>
        );
    }
}

ReposDetails.propTypes = {};

ReposDetails.defaultProps = {};

export default ReposDetails;

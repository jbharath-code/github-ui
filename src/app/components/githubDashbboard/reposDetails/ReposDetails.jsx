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
					<div className="repo-details">
						<div>
							<h3>
								<a className="repo-link" href={repo.html_url}>
									{repo.name}
								</a>
							</h3>
						</div>
						<div className="repo-description">
							{repo.description}
						</div>
						<div className="repo-metadata">
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
								{repo.updated_at}
							</span>
						</div>	
					</div>
					<div className="star">
						<div className="star-action">
							<span>
								<img className="star-image"
									src="https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/07/10/8/icons8-star-50.png"	
								/>
								Star							
							</span>
						</div>
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

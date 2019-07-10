import React from 'react';
import styles from './styles.sass';
import moment from 'moment';
import colors from '../../../constants/colors';

class ReposDetails extends React.Component {

	renderLicense = (license) => {
		return (
			<div className="license-box">
				<img
					className="license-image"
					src="https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/07/10/24/balance.svg"
				/>	
				{license.name}
			</div>
		);
	}

	renderLanguage = (language) => {
		return (
			<div className="language-box">
				<div className="language-color" style={{
					background: colors[language.toLowerCase()]
				}}/>
				<div className="language-text">
					{language}
				</div>
			</div>
		);
	}

	renderUpdatedAt = (updated) => {
		var dateTime = moment(new Date(updated));
		var nowDate = moment(new Date());
		var diff  = nowDate.diff(dateTime, 'days');
		let text = "";
		if(diff < 60){
			text = `${diff} days ago`
		}
		else{
			text = `on ${dateTime.format('ll')}`
		}
		return (
			<div>
				Updated {text}
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
							{
								(repo.hasOwnProperty('language') && repo.language) 
								? 
								this.renderLanguage(repo.language) 
								: 
								null
							}
							{
								(repo.hasOwnProperty('license') && repo.license) 
								? 
								this.renderLicense(repo.license) 
								: 
								null
							}
							{
								(repo.hasOwnProperty('updated_at') && repo.updated_at) 
								? 
								this.renderUpdatedAt(repo.updated_at) 
								: 
								null
							}
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

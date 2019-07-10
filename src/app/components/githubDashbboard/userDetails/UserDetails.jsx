import React from 'react';
import styles from './styles.sass';

class UserDetails extends React.Component {


	renderUser = (user) =>{
		return (
			<div className="user-block">
				<img className="user-image" src={user.avatar_url} />
				<div className="user-name-handle">
					<div className="user-name">
						{user.name}
					</div>
					<div className="user-handle">
						{user.login}
					</div>
				</div>
				<div className="user-follow">
					Follow
				</div>
				<div>
					<div className="user-bio">
						{user.bio}
					</div>
					<div className="user-company">
						<span>
							<img className="image-icon"
								src="https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/07/10/29/friends.svg"
							/>
						</span>
						<span>
							{user.company}
						</span>
					</div>
					<div className="user-location">
						<span>
							<img className="image-icon"
								src="https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/07/10/49/placeholder.svg"
							/>
						</span>
						<span>
							{user.location}
						</span>
					</div>
					{
						user.email 
						? 
							<div className="user-email">
								<span>
									<img className="image-icon"
										src="https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/07/10/71/mail.svg"
									/>
								</span>
								<span>
									{user.email}
								</span>
							</div>
						:
						null
					}
				</div>
			</div>
		);
	}

    render() {
        return (
            <div>
				{
					(this.props.hasOwnProperty('user') && this.props.user) 
					? 
					this.renderUser(this.props.user)
					: 
					<div>
						User has no details
					</div>
				}
            </div>
        );
    }
}

UserDetails.propTypes = {};

UserDetails.defaultProps = {};

export default UserDetails;

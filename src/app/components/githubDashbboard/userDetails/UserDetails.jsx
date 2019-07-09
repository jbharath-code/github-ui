import React from 'react';


class UserDetails extends React.Component {


	renderUser = (user) =>{
		return (
			<div>
				<img src={user.avatar_url} />
				<div>
					{user.name}
				</div>
				<div>
					{user.login}
				</div>
				<div>
					{user.bio}
				</div>
				<div>
					<div>
						{user.company}
					</div>
					<div>
						{user.location}
					</div>
					<div>
						{user.email}
					</div>
				</div>
			</div>
		);
	}

    render() {
		console.log(this.props);
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

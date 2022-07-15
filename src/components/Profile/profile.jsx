import React from "react"
import Classes from './profile.module.css'




const Profile = () => {
    return (
        <div className={Classes.profile_container}>
            <div className={Classes.wrrap_1}>
                <div className={Classes.profile_avatar}>
1
                </div>
                <div className={Classes.profile_link}>
2
                </div>
                <div className={Classes.profile_friends}>
3
                </div>
            </div>
            <div className={Classes.wrrap_2}>
                <div className={Classes.profile_info}>
21
                </div>

                <div className={Classes.profile_photo}>
22
                </div>
                <div className={Classes.profile_posts}>
23
                </div>
            </div>
        </div>
    )
}

export default Profile;
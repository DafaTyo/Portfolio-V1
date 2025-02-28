import AvatarCard from "../components/avatar-card"
import CertificationCard from "../components/certification-card"
import GithubProjectCard from "../components/github-project-card"
import SkillCard from "../components/skill-card"
import SosialCard from "../components/social-card"

const ProfilePage = () => {
    return (
        <div className="bg-[#E3E3ED] p-10 grid gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 flex flex-col gap-6">
                <AvatarCard/>
                <SosialCard/>
                <SkillCard />
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                <GithubProjectCard style=""/>
                <CertificationCard style=""/>
            </div>
        </div>
    )
}

export default ProfilePage  
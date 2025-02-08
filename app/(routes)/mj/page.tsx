import Basic from "@/app/templates/basic/basic"

export default function MJ() {
    const user = {
        userName: "MJ",
        profession: "Software Engineer",
        aboutMe: "I'm a software engineer who loves building web applications using React and Next.js. I'm passionate about learning new technologies and sharing my knowledge with the community.",
        whatsapp: "https://wa.me/1234567890",
        instagram: "https://www.instagram.com/mj.codes",
    }
    return <Basic user = {user} />
}
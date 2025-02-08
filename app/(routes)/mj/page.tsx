import type { Metadata } from 'next';

import Basic from "@/app/templates/basic/basic"
import mj from "@/app/assets/image/profile/mj.jpeg"

const User = {
    initials: 'MJ',
    userName: "MJ Health",
    image: mj,
    profession: "Proffesional Nurse",
    aboutMe: "Welcome to MJ health, your trusted partner in intimate wellness and enhancement. We specialize in crafting natural, effective, and discreet solutions designed to elevate your intimate life and boost your confidence. Whether you're looking to enhance your natural beauty, improve your intimate experiences, or achieve your personal wellness goals, our carefully curated range of products is here to support you every step of the way.",
    socials: [{name: 'whatsapp', url: "https://wa.me/+2349138804076", color: 'light-green'},
        {name: 'instagram', url: "https://www.instagram.com/mj", color: 'red-400'}]
}


export const metadata: Metadata = {
    title: `${User.userName}`,
    description: 'your trusted partner in intimate wellness and enhancement.',
    openGraph: {
    title: 'Whatsapp',
      description: 'your trusted partner in intimate wellness and enhancement.',
      url: '/mj', //full vercel url
      images: [
        {
          url: '/profile/mj.jpeg', 
          width: 800,
          height: 600,
          alt: `${ User.initials} image`,
        },
      ],
    },
};

export default function MJ() {

    return <div className="flex items-center justify-center h-screen">
                    <Basic user = {User} />
                </div>
}
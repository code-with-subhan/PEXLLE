interface TimeLineComments {
    id: number
    profileImage: string,
    Title: string,
    subtitle: string,
    Time: string,
    img?: string,
    favouriteCount: number,
    share: number,
    messages: number,
    description: string
}

export const TimeLineAllComments: TimeLineComments[] = [
    { id: 1, profileImage: "https://i.pravatar.cc/100?img=2", Title: "Moyo Shiro", subtitle: "@moyo", Time: "9:00AM", favouriteCount: 34, share: 21, messages: 56, description: "Just launched my new portfolio website! 🚀 Check out these 15 standout examples of creative, sleek, and interactive portfolio designs that inspired me. Which one's your favorite? #WebDesign #PortfolioInspiration" },
    { id: 2, profileImage: "https://i.pravatar.cc/100?img=3", Title: "Sophia", subtitle: "@Sophia", Time: "12:00PM", favouriteCount: 34, share: 21, messages: 36, img: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", description: "Dreaming of distant worlds... 🖼️ This AI-generated image captures the essence of exploration. What stories does it spark in your imagination?" },
    { id: 3, profileImage: "https://i.pravatar.cc/100?img=5", Title: "Alex Chen", subtitle: "@alec", Time: "5:20AM", favouriteCount: 44, share: 93, messages: 46, description: "Just finished a 10k run! 🏃‍♂️💨 Personal best time. Remember, every step forward is a step towards your goals. #Fitness #RunningCommunity" },
    { id: 4, profileImage: "https://i.pravatar.cc/100?img=4", Title: "Emma Watson", subtitle: "@emmaw", Time: "3:00AM", favouriteCount: 54, share: 11, messages: 136, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", description: "Excited to announce my new book 'Tech for Good' is now available for pre-order! 📚 It explores how we can harness technology to create positive change in the world. #TechForGood #NewBook" },
    { id: 5, profileImage: "https://i.pravatar.cc/100?img=6", Title: "Carlos Rodriguez", subtitle: "@carlor", Time: "2:10AM", favouriteCount: 74, share: 67, messages: 67, description: "Just tried the new VR experience at the tech expo. Mind. Blown. 🤯 The future is here, and it's immersive! Can't wait to see how this technology evolves. #VR #TechExpo" },
]



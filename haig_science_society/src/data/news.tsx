import { News } from "@/types/News";
import img1 from "./image1.png"
import img2 from "./image2.png"
import img3 from "./image3.png"


export const sampleNews: News[] = [
    {
        image: img1,
        title: "Storing carbon in buildings could help address climate change",
        date: "January 9, 2025",
        sourceTitle: "Science Daily",
        sourceLink: "https://www.sciencedaily.com/releases/2025/01/250109141128.htm#:~:text=Summary%3A,engineers%20and%20earth%20systems%20scientists.",
        department: "Engineering",
        description: `
        A study by UC Davis and Stanford shows that construction materials like concrete and plastics could help trap billions of tons of CO2, reducing greenhouse gases. Concrete has the biggest potential since it’s widely used, and new methods involve adding materials like biochar or carbonated aggregates. While some technologies need more testing, many are ready to use, offering a sustainable way to build and fight climate change.

        `
    },
    {
        image: img2,
        title: "NASA Invests in Artemis program to support long-term lunar exploration",
        date: "January 23, 2025",
        sourceTitle: "NASA",
        sourceLink: "https://www.nasa.gov/news-release/nasa-invests-in-artemis-studies-to-support-long-term-lunar-exploration/",
        department: "Engineering",
        description: `
        NASA awarded $24 million to nine U.S. companies for Moon exploration. Projects focus on logistics, robotics, and mobility for Artemis missions. Companies like Blue Origin and Lockheed Martin will develop solutions for long-term lunar stays. This work supports future Moon and Mars missions.

        `
    },
    {
        image: img3,
        title: "Generative AI search is set to be a breakthrough technology in 2025",
        date: "January 3, 2025",
        sourceTitle: "MIT Technology Review",
        sourceLink: "https://www.technologyreview.com/2025/01/03/1108820/generative-ai-search-apple-google-microsoft-breakthrough-technologies-2025/#:~:text=Google's%20introduction%20of%20AI%20Overviews,or%20task%20you%20need%20done.",
        department: "Engineering",
        description: `
        Google, Microsoft, and OpenAI are showing AI overviews provides direct answers to questions, making search more conversational. However, this technology has serious implications for online advertising because search products often summary information instead of showing them directly. For example, reduced website traffic, ad revenue loss, and legal battles over content use. 

        `
    },
]
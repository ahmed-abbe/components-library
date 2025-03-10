import Heading from "./components/Heading";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banners/Index";
import Card from "./components/Cards/Index";
import Testimonials from "./components/Testimonials/Index";
import { HiOutlineCloudUpload } from "react-icons/hi";
import avatar from "./assets/avatar.jpg";

const App = () => {
    // First index is empty to get the default badge UI
    const badgeColors = [
        "",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
    ];

    return (
        <main className="components-library">
            <Heading>Components Library</Heading>
            <section className="badges">
                <div className="container">
                    <Heading>Badges</Heading>
                    <div className="badges-container">
                        {badgeColors.map((color, index) => (
                            <div key={index}>
                                <Badge color={color}>Badge</Badge>
                                <Badge color={color} pill={true}>
                                    Badge
                                </Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="banners">
                <div className="container">
                    <Heading>Banners</Heading>
                    <div className="banner-container">
                        <div>
                            <Banner role="success">
                                <Banner.Title>Congratulations!</Banner.Title>
                                <Banner.Description>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquid pariatur, ipsum
                                    similique veniam.
                                </Banner.Description>
                            </Banner>
                            <Banner role="success">
                                <Banner.Title>Congratulations!</Banner.Title>
                            </Banner>
                        </div>
                        <div>
                            <Banner role="warning">
                                <Banner.Title>Attention</Banner.Title>
                                <Banner.Description>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquid pariatur, ipsum
                                    similique veniam quo totam eius aperiam
                                    dolorum.
                                </Banner.Description>
                            </Banner>
                            <Banner role="warning">
                                <Banner.Title>Attention</Banner.Title>
                            </Banner>
                        </div>
                        <div>
                            <Banner role="error">
                                <Banner.Title>
                                    There is a problem with your application
                                </Banner.Title>
                                <Banner.Description>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquid pariatur, ipsum
                                    similique veniam quo totam eius aperiam
                                    dolorum.
                                </Banner.Description>
                            </Banner>
                            <Banner role="error">
                                <Banner.Title>
                                    There is a problem with your application
                                </Banner.Title>
                            </Banner>
                        </div>
                        <div>
                            <Banner role="neutral">
                                <Banner.Title>Update available</Banner.Title>
                                <Banner.Description>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquid pariatur, ipsum
                                    similique veniam.
                                </Banner.Description>
                            </Banner>
                            <Banner role="neutral">
                                <Banner.Title>Update available</Banner.Title>
                            </Banner>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards">
                <div className="container">
                    <Heading>Cards</Heading>
                    <Card icon={<HiOutlineCloudUpload />} iconBgColor="#3F75FE">
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Description>
                            Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi lobortis.
                        </Card.Description>
                    </Card>
                </div>
            </section>
            <section className="testimonials">
                <div className="container">
                    <Heading>Testimonials</Heading>
                    <Testimonials
                        image={avatar}
                        name="Jhon Doe"
                        position="Workcation, CTO"
                    >
                        <Testimonials.Review>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed urna nulla vitae laoreet augue. Amet
                            feugiat est integer dolor auctor adipiscing nunc
                            urna, sit.
                        </Testimonials.Review>
                    </Testimonials>
                    <Testimonials name="Jhon Doe" position="Workcation, CTO">
                        <Testimonials.Review>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo expedita voluptas culpa sapiente alias
                            molestiae. Numquam corrupti in laborum sed rerum et
                            corporis.
                        </Testimonials.Review>
                    </Testimonials>
                </div>
            </section>
        </main>
    );
};

export default App;

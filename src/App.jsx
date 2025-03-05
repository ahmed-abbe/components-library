import Heading from "./components/Heading";
import Badge from "./components/Badge/Badge";

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
        </main>
    );
};

export default App;

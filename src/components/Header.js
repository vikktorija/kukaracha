import Link from "./Link";

function Header(props) {
    const linksElements = props.links.map((link, idx) => {
        return <Link linkName={link} key={idx} />
    });

    return (
        <header>
            <nav>
                {linksElements}
            </nav>
        </header>
    )
}

export default Header;
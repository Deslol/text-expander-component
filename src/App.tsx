import "./styles.css";
import {useState} from "react";

type TextExpanderProps = {
    collapsedNumWords?: number;
    expandButtonText?: string;
    collapseButtonText?: string;
    buttonColor?: string;
    expanded?: boolean;
    className?: string;
    children: React.ReactNode;
}

export default function App() {
    return (
        <div>
            <TextExpander className='box'>
                Space travel is the ultimate adventure! Imagine soaring past the stars
                and exploring new worlds. It's the stuff of dreams and science fiction,
                but believe it or not, space travel is a real thing. Humans and robots
                are constantly venturing out into the cosmos to uncover its secrets and
                push the boundaries of what's possible.
            </TextExpander>

            <TextExpander
                collapsedNumWords={20}
                expandButtonText="Show text"
                collapseButtonText="Collapse text"
                buttonColor="#ff6622"
                className='box'
            >
                Space travel requires some seriously amazing technology and
                collaboration between countries, private companies, and international
                space organizations. And while it's not always easy (or cheap), the
                results are out of this world. Think about the first time humans stepped
                foot on the moon or when rovers were sent to roam around on Mars.
            </TextExpander>

            <TextExpander expanded={true} className="box">
                Space missions have given us incredible insights into our universe and
                have inspired future generations to keep reaching for the stars. Space
                travel is a pretty cool thing to think about. Who knows what we'll
                discover next!
            </TextExpander>
        </div>
    );
}

function TextExpander(
    {
        collapsedNumWords = 30,
        expandButtonText = 'Show Less',
        collapseButtonText = 'Show More',
        buttonColor,
        expanded,
        className,
        children,
    }: TextExpanderProps
) {
    const [isExpanded, setIsExpanded] = useState(expanded ?? false)

    const buttonStyling = {
        color: buttonColor ?? 'blue',
        textDecoration: 'underline'
    }

    return <div className={className}>
        <p>{typeof children === "string" ?
            <p>{isExpanded ? children : children?.slice(0, collapsedNumWords)}</p> : children}</p>
        <p
            className='text-button'
            onClick={e => setIsExpanded(!isExpanded)}
            style={buttonStyling}
        >{isExpanded ? expandButtonText : collapseButtonText}</p>
    </div>;
}


import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Gdje se nalazi zgrada 10?",
        value: "Gdje se nalazi zgrada 10?"
    },
    { text: "Smijem li instalirati Wireshark aplikaciju?", value: "Smijem li instalirati Wireshark aplikaciju?" },
    { text: "Što ima danas na jelovniku u menzi?", value: "Što ima danas na jelovniku u menzi?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

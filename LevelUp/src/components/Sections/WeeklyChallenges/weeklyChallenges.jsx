import styles from "./weeklyChallenges.module.css";
import { Tabs } from "../../Contents/WeeklyChallengesTab/challengesTab.jsx";

export const WeeklyChallenges = () => {
    return (
        <section id="weeklyChallenges" className={styles.weeklyChallenges}>
            <h2>Weekly Challenges</h2>
            <Tabs />
        </section>
    )
}
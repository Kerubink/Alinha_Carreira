import styles from "./weeklyChallenges.module.css";

export const WeeklyChallenges = () => {
    return (
        <section id="weeklyChallenges" className={styles.weeklyChallenges}>
            <h2>Weekly Challenges</h2>
            <ul>
                <li>Challenge 1</li>
                <li>Challenge 2</li>
                <li>Challenge 3</li>
            </ul>
        </section>
    )
}
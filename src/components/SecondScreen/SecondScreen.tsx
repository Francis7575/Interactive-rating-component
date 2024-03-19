import ThankYouImage from '../../assets/illustration-thank-you.svg'
import styles from './SecondScreen.module.css'

type Props = {
    selectedRating: number
}

const SecondScreen = ({ selectedRating }: Props) => {
    return (
        <div className={styles.text_center}>
            <img src={ThankYouImage} alt="" />
            <div>
                <p className={styles.selected}>You selected {selectedRating} out of 5</p>
                <h2 className={styles.heading}>Thank you!</h2>
                <p className={styles.paragraph}>
                    We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}

export default SecondScreen
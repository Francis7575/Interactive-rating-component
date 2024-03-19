import IconStar from '../../assets/icon-star.svg'
import BackgroundIconStar from '../../assets/backgroud-icon-star.svg'
import styles from './FirstScreen.module.css'
import SecondScreen from '../SecondScreen/SecondScreen'
import { useState } from 'react'

const FirstScreen = () => {
    const [selectedRating, setSelectedRating] = useState<number>(0)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const handleSelectedRating = (rating: number) => {
        setSelectedRating(rating)
    }

    const handleSubmission = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true)
    }

    return (
        <main className={styles.main_container} >
            <div className={styles.first_screen}>
                {!isSubmitted && ( // the form will be displayed as long as isSubmitted is false
                    <form action="" onSubmit={handleSubmission}>
                        <div className={styles.background_star}>
                            <img src={BackgroundIconStar} alt="" />
                            <img className={styles.star_icon} src={IconStar} alt="Star Icon" />
                        </div>
                        <h1 className={styles.heading}>How did we do?</h1>
                        <p className={styles.paragraph}>
                            Please let us know how we did with your support request.
                            All feedback is appreciated to help us improve our offering!
                        </p>
                        <div className={styles.buttons_container}>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                    type="button"
                                    onClick={() => handleSelectedRating(rating)}
                                    className={styles.rating}
                                    key={rating}
                                >{rating}
                                </button>
                            ))}
                        </div>
                        <button disabled={selectedRating === undefined}
                            className={styles.submit_btn}
                            type="submit">Submit
                        </button>
                    </form>
                )}
                {isSubmitted && <SecondScreen selectedRating={selectedRating} />}
            </div>
        </main>
    )
}
export default FirstScreen
import IconStar from '../../assets/icon-star.svg'
import BackgroundIconStar from '../../assets/backgroud-icon-star.svg'
import styles from './FirstScreen.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {
    rating: (rating: number) => void
}

const FirstScreen = ({ rating }: Props) => {
    const [selectedRating, setSelectedRating] = useState<number>(0)
    const [url, setUrl] = useState<string>("")

    const handleSelectedRating = (ratingParam: number) => { 
        setSelectedRating(ratingParam)
        setUrl('/submitted')
        rating(ratingParam) 
    }

    return (
        <>
            <section className={styles.first_screen}>
                <form action="">
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
                    <Link to={url}>
                        <button
                            disabled={selectedRating === 0}
                            className={styles.submit_btn}
                            type="submit"
                        >
                            Submit
                        </button>
                    </Link>
                </form>
            </section>
        </>
    )
}
export default FirstScreen
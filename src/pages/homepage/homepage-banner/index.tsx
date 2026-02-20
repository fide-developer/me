import { Banner } from "@component/banner"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import styles from './index.module.scss'
import { Link } from "@component/common-ui/link"


export const HomePageBanner: React.FC = () => {
    return (
        <Banner>
            <DotLottieReact
                className={styles.lottieAnimation}
                src="https://lottie.host/73f98910-610b-4878-b067-4c58062d7a1d/kAGkekqoiW.lottie"
                loop
                autoplay
            />
            <div>
                <h1 className={styles.bannerTitle}>
                    AI-Enhanced Frontend Engineer who loves <Link asExternal href="#">cats</Link>
                </h1>
            </div>
        </Banner>
    )
} 

export default HomePageBanner
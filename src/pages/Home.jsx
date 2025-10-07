import { Link } from "react-router-dom"

import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.home} >
        <Link to="/love" className={styles.linkETA} >EU TE AMO</Link>
    </div>
  )
}

export default Home
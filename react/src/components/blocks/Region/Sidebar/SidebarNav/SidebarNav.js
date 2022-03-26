import React from 'react'
import PropTypes from 'prop-types'
import styles from './SidebarNav.styles.css'

import { faChevronDown, faEdit, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props

  return (
    <article className={styles.sidebarOne}>
    <section className={styles.sidebarUser}>
        <div className={styles.sidebarUserInfo}>
          <h4>SlackCloneApp </h4>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <span className={styles.sidebarUserEditIcon}><FontAwesomeIcon icon={faEdit} /></span>
      </section>
    </article>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
}

export default SidebarNav

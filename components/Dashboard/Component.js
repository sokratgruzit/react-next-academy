import React, { Component } from "react";
import DropDown from "../UI/DropDown/DropDown";

import styles from "../../styles/Dashboard/Component.module.scss";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    return (
      <div className={styles.selectors}>
        <div className={styles.coll}>
          <label className={styles.label}>Country (required)</label>
          <DropDown zIndex="10" />
        </div>
        <div className={styles.coll}>
          <label className={styles.label}>City (required)</label>
          <DropDown zIndex="10" />
        </div>
      </div>
    );
  }
}

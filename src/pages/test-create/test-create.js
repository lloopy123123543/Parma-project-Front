import React from "react";
import "./test-create.css";
import "../pages/global.css";
import TestHeader from "../../components/TestHeader";
import TestInput from "../../components/TestInput";
import TestOptions from "../../components/TestOptions";

import React, { Component } from 'react'

export default class TestCreate extends Component {
  render() {
    return (
      <div className="container">
        <TestHeader/>
        <TestInput/>
        <TestOptions/>
    </div>
    )
  }
}

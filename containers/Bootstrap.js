import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BootstrapSwitch } from "../components";
import { isBootstrapComplete } from "../store/bootstrap";

const mapStateToProps = state => ({
  boostrapComplete: isBootstrapComplete(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BootstrapSwitch);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { BootstrapSwitch } from "../components";
import { isBootstrapComplete, ActionCreators } from "../store/bootstrap";

const mapStateToProps = state => ({
  bootstrapComplete: isBootstrapComplete(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BootstrapSwitch);

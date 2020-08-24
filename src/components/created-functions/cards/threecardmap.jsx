import React, { Fragment } from "react";
import {Col} from "react-bootstrap";
import Card from "./big-cards";

const CardMap = (arr) => <Fragment> {arr.map(e => <Col key = {e.key} sm = {e.colxs} md = {e.colsm} lg ={e.column}><Card link = {e.url} title = {e.title} img = {e.img} /></Col>)}</Fragment>

export default CardMap;
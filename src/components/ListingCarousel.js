import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListingItem from "./ListingItem";
import { fetchData } from "../actions/listings";
import styled from "styled-components";
import {MdNavigateNext, MdNavigateBefore} from "react-icons/md";

const S_ListingCarousel = styled.div`
  margin: auto 100px;

  .container {
    display:flex;
  }
  
  .heading {
    margin-left: 40px;
    text-align: left;
  }

  .property-postings{
    display: flex;
    position: relative;

  }

  .btn-circle {
    width: 50px;
    height: 50px;
    border:2px solid #ddd;
    text-align: center;
    font-size: 25px;
    border-radius: 50%;
    border-radius:27px;
    display: inline-block;
    cursor: pointer;
    position: static;
    z-index: 1;
  }

  .btn-container{
    display:flex;
    width: 25px;
    justify-content:center;
    align-items: center;
  }
  
  .btn-left{
    margin-right: -60px;
  }

  .btn-right{
    margin-left: -60px;
  }

  .close{
    display: none;
  }
`

function mapStateToProps(state) {
  return {
    listings: state.listings.listings,
    firstRender: state.listings.firstRender,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData);
    },
  };
}

class ListingCarousel extends Component {
  static propTypes = {
    listings: PropTypes.object,
    firstRender: PropTypes.bool,
  };

  constructor(props) {
    super();
    this.state = {
      listings: props.listings,
      isTest: [],
      firstRender:
        typeof props.firstRender !== "undefined" ? props.firstRender : true,
      currentPage: 1,
    };
    this.updateListing = this.updateListing.bind(this);
    this.handleRightClick=this.handleRightClick.bind(this);
    this.handleLeftClick=this.handleLeftClick.bind(this);
  }

  handleRightClick() {
    this.setState({
      currentPage: this.state.currentPage+1
    })
  }

  handleLeftClick() {
    this.setState({
      currentPage: this.state.currentPage-1
    })
  }

  componentWillUpdate(nextProps) {
    if (nextProps.listings !== this.props.listings) {
      this.setState((state) => {
        return {
          ...this.state,
          listings: nextProps.listings,
          firstRender: nextProps.firstRender,
        };
      });
    }
  }

  updateListing(id) {
    this.setState({
      ...this.state,
      listings: this.state.listings.map((listing) => {
        const isTest = listing.id === id;
        if (!isTest) return listing;
        return {
          ...listing,
          isTest,
        };
      }),
    });
  }

  render() {
    const { listings } = this.state;

    if (this.state.firstRender) {
      this.props.fetchData();
    }

    if (!listings) return null;

    const lastListing = this.state.currentPage * 3;
    const firstListing = lastListing - 3;
    const displayedListing = listings.slice(firstListing, lastListing);
    const numPages = Math.ceil(listings.length/3);

    const items = displayedListing.map((listing, index) => {
      return (
        <ListingItem
          listing={listing}
          onClick={this.updateListing}
        />
      );
    });

    return (
      <S_ListingCarousel>
        <h1 className={`heading`}>Listings with videos</h1>
        <div className={`container`}>
          <div className={`btn-container`}>
            <button type='button' className={this.state.currentPage > 1 ? `btn-circle btn-left` : `close`} onClick={this.handleLeftClick} ><MdNavigateBefore style={{verticalAlign: "middle"}} size={34}/></button>
          </div>
          <div className={`property-postings`}>
            {items}
          </div>
          <div className={`btn-container`}>
            <button type='button' className={this.state.currentPage < numPages ? `btn-circle btn-right` : `close`} onClick={this.handleRightClick}><MdNavigateNext style={{verticalAlign: "middle"}} size={34}/></button>
          </div>
           </div>
        </S_ListingCarousel>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCarousel);


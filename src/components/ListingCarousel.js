import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListingItem from "./ListingItem";
import { fetchData } from "../actions/listings";

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
    };
    this.updateListing = this.updateListing.bind(this);
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
    console.log("LISTINGS", listings);

    const items = listings.map((listing, index) => {
      return (
        <ListingItem
          key={index}
          listing={listing}
          onClick={this.updateListing}
        />
      );
    });

    return <div>{items}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCarousel);

import React, { PureComponent } from "react";
import styled from "styled-components";
import ImageGallery from './ImageGallery';

const S_Listingitem = styled.div`
  display: flex;

  .listing {
    display: inline-block;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    border-radius: 5px;
    width: 350px;
    margin: 20px;
  }

  .listing-details {
    padding:15px;
    display: flex;
    align-content: start;
    text-align: left;
    flex-direction: column;

    .listing-details-row{
      display: flex;
      flex-direction: row;
      margin:1px;
      font-size:13px;
      justify-content: space-between;
      font-family: Avenir Next;
    }
  }
  .address-name{
    font-family: Avenir Next;
    font-size: 15px;
    margin: 1px;
  }

  .bold{
    font-weight: bold
  }
`

class ListingItem extends PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      keyCount: 0,
    }

  }

  onClick() {
    this.props.onClick(this.props.listing.id);
  }

  render() {
    const { 
      id,
      photos,
      address_name,
      address_line_2,
      attributes,
      listing_type,
      sub_category_formatted
    } = this.props.listing;

    const labelForListingType = sub_category_formatted + ' for ' + listing_type
    const labelForBedBath = attributes.bedrooms_formatted + ' ' + attributes.bathrooms_formatted 
  
    return (
      <S_Listingitem>
        <div className={ `listing`}>
            <ImageGallery images={photos} listingId={id}/>
            <div className={`listing-details`}>
              <h3 className={`address-name`}>{address_name}</h3>
              <div className={`listing-details-row`}>
                <div>{address_line_2}</div>
                <div className={`bold`}>{attributes.price_formatted}</div>
              </div>
              <div className={`listing-details-row`}>
                <div>{labelForListingType}</div>
                <div>{attributes.area_ppsf_formatted}</div>
              </div>
              <div className={`listing-details-row`}>
                <div className={`bold`}>{labelForBedBath}</div>
                <div>{attributes.area_size_formatted}</div>
              </div>

            </div>
        </div>
      </S_Listingitem>
    );
  }
}

export default ListingItem;


import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ProductWrapper>
        <div
          className="card"
          style={{
            display: "flex",
            marginTop: "20px",
            height: "307px",
            width: "350px",
            marginLeft: "20px",
            backgroundColor: "white",
            flexWrap: "wrap",
            borderRadius: "10px",
          }}
        >
          <div>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ backgroundColor: "brown" }}
                >
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />

            <div
              className="img-container"
              style={{ marginTop: "5px", height: "250px" }}
            >
              <img
                alt="..."
                className="card-img-top"
                style={{
                  height: "150px",
                  width: "250px",
                  marginLeft: "55px",
                  marginTop: "10px",
                }}
                src={props.el.img}
              />

              <div
                className="card-footer d-flex justify-content-between"
                style={{
                  width: "348px",
                  height: "50px",
                  marginLeft: "1px",
                  marginTop: "18px",
                }}
              >
                <p
                  className="align-self-center "
                  style={{
                    marginLeft: "90px",
                    fontFamily: "permanent Marker, cursive",
                    letterSpacing: "0.3rem",
                    textTransform: "uppercase",
                    marginTop: "15px",
                  }}
                >
                  <Link to={`/evenemet/details/${props.el.id}`}>
                    {props.el.title}
                  </Link>
                </p>

                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </ProductWrapper>
    </div>
  );
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgb(233, 233, 233);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0rem 0.4rem;

    background: var(--lightBleu);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .cart-btn:hover {
    color: var(--mainBleu);
    cursor: pointer;
  }
`;
const mapStateToProps = (state) => {
  return {
    event: state.EventReducer,
  };
};

export default connect(mapStateToProps)(Card);

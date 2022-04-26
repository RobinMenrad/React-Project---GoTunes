import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function SearchResults(props) {
  const { searchResult, responseStatus, setSongQueue } = props;

  return (
    <div>
      {responseStatus === 200
        ? searchResult.map((element) => (
            <Card
              /* To Do: how to push new track at beginning of queue? */
              onClick={() =>
                setSongQueue((oldArray) => [
                  {
                    name: element.title,
                    singer: "",
                    cover: element.cover,
                    musicSrc: element.stream_url,
                  },
                  ...oldArray,
                ])
              }
              key={element.id}
              cover={element.cover}
              title={element.title}
            />
          ))
        : ""}
      {responseStatus === 404 || responseStatus === 500
        ? "No results found"
        : ""}
    </div>
  );
}

SearchResults.propTypes = {
  // eslint-disable-next-line
  searchResult: PropTypes.array,
  responseStatus: PropTypes.number,
  setSongQueue: PropTypes.shape(),
};

SearchResults.defaultProps = {
  searchResult: "",
  responseStatus: 404,
  setSongQueue: null,
};

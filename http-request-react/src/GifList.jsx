import React, { Component } from "react";

class GifList extends Component {
  state = {
    gifs: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.fetchGifs(this.props.query);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.fetchGifs(this.props.query);
    }
  }

  fetchGifs = (query) => {
    this.setState({ loading: true, error: null });

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=12`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      })
      .catch(() => {
        this.setState({ error: "Error loading gifs" });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { gifs, loading, error } = this.state;

    return (
      <div className="gallery">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt=""
            className="gif"
          />
        ))}
      </div>
    );
  }
}

export default GifList;
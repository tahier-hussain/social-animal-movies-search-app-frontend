import React, { Component } from "react";
import { Container, Row, Col, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class MoviesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: ["Abkhazian", "Afar", "Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Aragonese", "Armenian", "Assamese", "Avaric", "Avestan", "Aymara", "Azerbaijani", "Bambara", "Bashkir", "Basque", "Belarusian", "Bengali", "Bihari languages", "Bislama", "Bosnian", "Breton", "Bulgarian", "Burmese", "Catalan, Valencian", "Central Khmer", "Chamorro", "Chechen", "Chichewa, Chewa, Nyanja", "Chinese", "Church Slavonic, Old Bulgarian, Old Church Slavonic", "Chuvash", "Cornish", "Corsican", "Cree", "Croatian", "Czech", "Danish", "Divehi, Dhivehi, Maldivian", "Dutch, Flemish", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Finnish", "French", "Fulah", "Gaelic, Scottish Gaelic", "Galician", "Ganda", "Georgian", "German", "Gikuyu, Kikuyu", "Greek (Modern)", "Greenlandic, Kalaallisut", "Guarani", "Gujarati", "Haitian, Haitian Creole", "Hausa", "Hebrew", "Herero", "Hindi", "Hiri Motu", "Hungarian", "Icelandic", "Ido", "Igbo", "Indonesian", "Interlingua (International Auxiliary Language Association)", "Interlingue", "Inuktitut", "Inupiaq", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kanuri", "Kashmiri", "Kazakh", "Kinyarwanda", "Komi", "Kongo", "Korean", "Kwanyama, Kuanyama", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Letzeburgesch, Luxembourgish", "Limburgish, Limburgan, Limburger", "Lingala", "Lithuanian", "Luba-Katanga", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Manx", "Maori", "Marathi", "Marshallese", "Moldovan, Moldavian, Romanian", "Mongolian", "Nauru", "Navajo, Navaho", "Northern Ndebele", "Ndonga", "Nepali", "Northern Sami", "Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk", "Nuosu, Sichuan Yi", "Occitan (post 1500)", "Ojibwa", "Oriya", "Oromo", "Ossetian, Ossetic", "Pali", "Panjabi, Punjabi", "Pashto, Pushto", "Persian", "Polish", "Portuguese", "Quechua", "Romansh", "Rundi", "Russian", "Samoan", "Sango", "Sanskrit", "Sardinian", "Serbian", "Shona", "Sindhi", "Sinhala, Sinhalese", "Slovak", "Slovenian", "Somali", "Sotho, Southern", "South Ndebele", "Spanish, Castilian", "Sundanese", "Swahili", "Swati", "Swedish", "Tagalog", "Tahitian", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Tigrinya", "Tonga (Tonga Islands)", "Tsonga", "Tswana", "Turkish", "Turkmen", "Twi", "Uighur, Uyghur", "Ukrainian", "Urdu", "Uzbek", "Venda", "Vietnamese", "Volap_k", "Walloon", "Welsh", "Western Frisian", "Wolof", "Xhosa", "Yiddish", "Yoruba", "Zhuang, Chuang", "Zulu"],
      countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
      genres: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short Film", "Sport", "Superhero", "Thriller", "War", "Western"],
      movies: [],
      pager: "",
      more_details_id: "",
      title_search: "",
      date_search: "",
      director_search: "",
      country_filter: "",
      language_filter: "",
      genre_filter: "",
      date_sort: false,
      date_sort_asc: false,
      duration_sort: false,
      duration_sort_asc: false
    };
  }

  componentDidMount = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;
    this.loadPage(page);
  };

  componentDidUpdate = () => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page")) || 1;
    if (page !== this.state.pager.currentPage && this.state.movies.length > 0) {
      this.loadPage(page);
    }
  };

  loadPage = page => {
    let requestOptions = {
      method: "GET",
      url: `http://localhost:5000/api/movies-search?page=${page}&title=${this.state.title_search}&date_published=${this.state.date_search}&director=${this.state.director_search}&country=${this.state.country_filter}&language=${this.state.language_filter}&genre=${this.state.language_filter}&sort_date${this.state.date_sort}&sort_date_asc=${this.state.date_sort_asc}&sort_duration=${this.state.duration_sort}&sort_duration_asc=${this.state.duration_sort_asc}`
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        console.log(res);
        if (res.data.status === 200) {
          this.setState({
            movies: res.data.pageOfMovies,
            pager: res.data.pager
          });
          const params = new URLSearchParams(window.location.search);
          console.log(params);
          params.set("page", res.data.pager.currentPage);
          window.history.replaceState(null, null, "?" + params.toString());
        }
      }
    });
  };

  moreDetails = id => {
    this.setState({
      more_details_id: id
    });
  };

  lessDetails = () => {
    this.setState({
      more_details_id: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="mt-5 p-4"></div>
        <div className="mt-4 pl-4 pr-4">
          <h1>
            <strong>Search for Movies</strong>
          </h1>
          <Row className="mb-2">
            <Col>
              <Input type="text" placeholder="Search Title" />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Input type="text" placeholder="Search Director" />
            </Col>
            <Col>
              <Input type="date" placeholder="Search Date" />
            </Col>
          </Row>
          <Row className="ml-1 mr-1">
            <Col xs="3" className="mt-2 mr-4 p-3">
              <h4>
                <strong>Filter</strong>
              </h4>
              <Label>
                <strong>Country</strong>
              </Label>
              <Input type="select" className="mb-2">
                <option>select country</option>
                {this.state.countries.map(country => (
                  <option>{country}</option>
                ))}
              </Input>
              <Label>
                <strong>Languages</strong>
              </Label>
              <Input type="select" className="mb-2">
                <option>select language</option>
                {this.state.languages.map(language => (
                  <option>{language}</option>
                ))}
              </Input>
              <Label>
                <strong>Genre</strong>
              </Label>
              <Input type="select" className="mb-2">
                <option>select genre</option>
                {this.state.genres.map(genre => (
                  <option>{genre}</option>
                ))}
              </Input>
              <button className="btn btn-primary btn-sm mt-2 mb-2">Clear Filter</button>
              <h4 className="mt-2">
                <strong>Sort</strong>
              </h4>
              <Label>
                <strong>Date of Publish</strong>
              </Label>
              <br></br>
              <button className="btn btn-info btn-sm mr-2">Latest to Past</button>
              <button className="btn btn-info btn-sm">Past to Latest</button>
              <br></br>
              <Label className="mt-2">
                <strong>Duration</strong>
              </Label>
              <br></br>
              <button className="btn btn-info btn-sm mb-2 mr-2">Longer to Smaller</button>
              <button className="btn btn-info btn-sm mb-2">Smaller to Longer</button>
              <button className="btn btn-primary btn-sm mt-2 mb-2">Clear Sort</button>
            </Col>
            <Col className="p-2">
              {this.state.movies.length > 0 ? (
                <div>
                  {this.state.movies.map(movie => (
                    <Container className="p-3 mb-2 border">
                      <h4>
                        <strong>{movie._source.title}</strong>
                      </h4>
                      <Row>
                        <Col>
                          <p>
                            <strong>Date Published:</strong> {movie._source.date_published.slice(8, 10) + " / " + movie._source.date_published.slice(5, 7) + " / " + movie._source.date_published.slice(0, 4)}
                          </p>
                        </Col>
                        <Col>
                          <p>
                            <strong>Duration</strong>: {movie._source.duration + " minutes"}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p>
                            <strong>Language</strong>: {movie._source.language}
                          </p>
                        </Col>
                        <Col>
                          <p>
                            <strong>Genre</strong>: {movie._source.genre}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p>
                            <strong>Total Votes:</strong> {movie._source.votes.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </p>
                        </Col>
                        <Col>
                          <p>
                            <strong>Average Vote:</strong> {movie._source.avg_vote}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p>
                            <strong>Review from Users:</strong> {movie._source.reviews_from_users}
                          </p>
                        </Col>
                        <Col>
                          <p>
                            <strong>Review from Critics:</strong> {movie._source.reviews_from_critics}
                          </p>
                        </Col>
                      </Row>
                      {this.state.more_details_id !== movie._id ? (
                        <button onClick={() => this.moreDetails(movie._id)} className="mt-2 btn btn-info btn-sm">
                          More Details
                        </button>
                      ) : (
                        <div>
                          <p>
                            <strong>Description: </strong>
                            {movie._source.description}
                          </p>
                          <p>
                            <strong>Actors: </strong>
                            {movie._source.actors}
                          </p>
                          <Row>
                            <Col>
                              <p>
                                <strong>Director: </strong> {movie._source.director}
                              </p>
                            </Col>
                            <Col>
                              <p>
                                <strong>Writer: </strong> {movie._source.writer}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p>
                                <strong>Budget:</strong> {movie._source.budget.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </p>
                            </Col>
                            <Col>
                              <p>
                                <strong>World Wide Gross Income:</strong> {movie._source.worlwide_gross_income.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </p>
                            </Col>
                          </Row>
                          <button onClick={this.lessDetails} className="mt-2 btn btn-info btn-sm">
                            Less Details
                          </button>
                        </div>
                      )}
                    </Container>
                  ))}
                </div>
              ) : (
                <h4>No data to display</h4>
              )}
            </Col>
          </Row>
          <div className="card-footer pb-0 pt-3">
            {this.state.pager.pages && this.state.pager.pages.length && (
              <ul className="pagination justify-content-center">
                <li className={`page-item first-item ${this.state.pager.currentPage === 1 ? "disabled" : ""}`}>
                  <Link to={{ search: `?page=1` }} className="page-link">
                    First
                  </Link>
                </li>
                <li className={`page-item previous-item ${this.state.pager.currentPage === 1 ? "disabled" : ""}`}>
                  <Link to={{ search: `?page=${this.state.pager.currentPage - 1}` }} className="page-link">
                    Previous
                  </Link>
                </li>
                {this.state.pager.pages.map(page => (
                  <li key={page} className={`page-item number-item ${this.state.pager.currentPage === page ? "active" : ""}`}>
                    <Link to={{ search: `?page=${page}` }} className="page-link">
                      {page}
                    </Link>
                  </li>
                ))}
                <li className={`page-item next-item ${this.state.pager.currentPage === this.state.pager.totalPages ? "disabled" : ""}`}>
                  <Link to={{ search: `?page=${this.state.pager.currentPage + 1}` }} className="page-link">
                    Next
                  </Link>
                </li>
                <li className={`page-item last-item ${this.state.pager.currentPage === this.state.pager.totalPages ? "disabled" : ""}`}>
                  <Link to={{ search: `?page=${this.state.pager.totalPages}` }} className="page-link">
                    Last
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesSearch;

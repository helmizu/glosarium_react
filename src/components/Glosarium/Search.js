import React, { Component } from 'react'
import { connect } from 'react-redux'
import Autosuggest from 'react-autosuggest'
import {searchData} from '../../actions/glosariumAction'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            suggestions: []
        }
        this.iconOnclick = this.iconOnclick.bind(this)
    }
    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.props.data.filter(lang =>
            lang.nama.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    getSuggestionValue = suggestion => suggestion.nama;

    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => (
        <div>
            {suggestion.nama}
        </div>
    );

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    iconOnclick = (dataInput) => {
        this.props.searchData(dataInput)
        console.log(dataInput)
        console.log(this.props.labelSelected)
    }

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: this.onChange
        };
        return (
            <div>
                <div className="search">                   
                    <Autosuggest
                        onSubmit={this.iconOnclick(value)}
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps}
                    />
                    <img onClick={() => this.iconOnclick(value)} className="img-search-input" src={require("../../assets/img/search-2.svg")} alt="search" />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data : state.glosarium.data,
    labelSelected : state.glosarium.labelSelected
})

const mapDispatchToProps = {
    searchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
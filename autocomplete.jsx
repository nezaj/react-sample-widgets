var React = require('react')

var AutocompleteWidget = React.createClass({

  getInitialState: function() {
    return { searchString: '' };
  },

  handleChange: function(event) {
    this.setState({ searchString: event.target.value })
  },

  handleClick: function(event) {
    var name = event.target.innerText;
    this.setState({ searchString: name });
  },

  cleanInputVal: function(inputVal) {
    return inputVal.trim().toLowerCase()
  },

  // Returns a list of autocomplete suggestions based on the current search
  getSuggestions: function() {
    var candidates, search_input, suggestions,
        cleanInputVal = this.cleanInputVal;

    candidates = this.props.items;
    search_input = cleanInputVal(this.state.searchString);

    // Initially we provide no autocomplete suggestions
    suggestions = [];

    // Once a user has typed something in, we provide a list of suggestions
    // that match the current input
    if ( search_input.length > 0 ) {
      var cleaned;
      suggestions = candidates.filter( function( suggest ) {
        cleaned = cleanInputVal(suggest);
        return cleaned.match(search_input)
      });
    }

    // Don't provide any suggestions if there is only one match and
    // the current input is identical to that
    if ( suggestions.length == 1 && cleanInputVal(suggestions[0]) == search_input ) {
        suggestions = [];
      }

    return suggestions
  },

  renderSuggestions: function() {
    var suggestions = this.getSuggestions(),
        handle_click = this.handleClick;

    return suggestions.map(function ( suggestion, idx ) {
      return <li key={ idx } onClick = { handle_click }>{ suggestion }</li>;
    });
  },

  render: function() {
    var search_input = this.state.searchString,
        handle_change = this.handleChange,
        suggestions = this.renderSuggestions();

    return (
      <div>
        <input type="text" value={ search_input }
               onChange= { handle_change }
               placeholder="Type here.." />
        <ul>{ suggestions }</ul>
      </div>
    );

  }
});

module.exports = AutocompleteWidget

import React from 'react';
import { connect } from 'react-redux';
import { setCity, fetchData } from '../actions';

const mapStateToProps = ({ city }) => ({
	city
});

const mapDispatchToProps = dispatch => ({
	getData: query => dispatch(fetchData(query)),
	onSearch: query => dispatch(setCity(query)),
	onKeyPress: e => e.key === 'Enter' && dispatch(fetchData(e.target.value))
});

const Toolbar = ({ getData, onSearch, onKeyPress, city }) => {
	return (<nav className='navbar navbar-default'>
	  <div className='container'>
	    <div className='navbar-form' role='search'>
			  <div className='input-group'>
		      <input onChange={e => onSearch(e.target.value)} onKeyPress={e => onKeyPress(e.nativeEvent)}
		      	type='search' className='form-control' placeholder='Search' />
		      <span className='input-group-btn'>
		        <button className='btn btn-default' onClick={() => getData(city)}>Go!</button>
		      </span>
    		</div>
	    	<h3 className='city'>{city}</h3>
			</div>
	  </div>
	</nav>);
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
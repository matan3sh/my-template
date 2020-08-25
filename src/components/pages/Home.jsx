import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className='home'>
      <h2>Welcome Home</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

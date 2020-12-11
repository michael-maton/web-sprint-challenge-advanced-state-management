import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "./../actions/";
import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {
  componentDidMount() {
    this.props.getSmurfData();
  }
  render() {
    const { smurfs, isLoading, error } = this.props;
    console.log(smurfs);
    if (error) {
        return <h2>{error.name}: {error.message}</h2>;
    }
    if (isLoading) {
        return <h2>Gathering Smurfs...</h2>;
    }
    return (
      <div>
          <Smurf smurfs={smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurfData })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.

import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { connect } from "react-redux";
import { addNode } from "./actions";

const BACKGROUND_COLOUR = "#262626";
const ANS_HIGHLIGHT = "#9adbfe";
const TEXT_COLOUR = "white";
const LAYOUT = { name: "cose", directed: true };

class GraphCanvas extends Component {
  nodeStyle = {};

  state = {
    w: 0,
    h: 0
  };

  componentDidMount = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight
    });
    this.setUpListeners();
  };

  setUpListeners = () => {
    // When click on node, enter Edit Mode
    this.cy.on("tap", (event, cy) => {
      // target holds a reference to the originator
      // of the event (core or element)
      var evtTarget = event.target;
      if (evtTarget === this.cy) {
        this.cy.animate({ fit: this.props.elements});
      } else {
        this.cy.animate({ zoom: 3, center: { eles: event.target } });
      }
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: BACKGROUND_COLOUR
        }}
      >
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(this.props.elements)}
          style={{
            width: this.state.w,
            height: this.state.h
          }}
          cy={cy => {
            this.cy = cy;
          }}
          layout={LAYOUT}
          autoungrabify={true}
          stylesheet={[
            {
              selector: "node",
              style: {
                shape: "round-rectangle",
                backgroundColor: BACKGROUND_COLOUR,
                borderColor: ANS_HIGHLIGHT,
                borderWidth: "1",
                content: "data(text)",
                color: TEXT_COLOUR,
                textWrap: "wrap",
                textHalign: "center",
                textValign: "center",
                padding: 12
              }
            },
            {
              selector: "edge",
              style: {
                width: "1",
                lineColor: ANS_HIGHLIGHT,
                targetArrowShape: "triangle",
                targetArrowColor: ANS_HIGHLIGHT,
                directed: true,
                curveStyle: "bezier"
              }
            }
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = dispatch => ({
  addNode: id => dispatch(addNode(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphCanvas);

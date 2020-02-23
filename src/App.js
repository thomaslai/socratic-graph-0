import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";

const BACKGROUND_COLOUR = "#262626";
const ANS_HIGHLIGHT = "#9adbfe";
const TEXT_COLOUR = "white";

export default class GraphCanvas extends Component {
  nodeStyle = {};

  state = {
    w: 0,
    h: 0,
    elements: CytoscapeComponent.normalizeElements({
      nodes: [
        { data: { id: "one", text: "Node 1" } },
        { data: { id: "two", text: "Node 2" } }
      ],
      edges: [
        {
          data: {
            source: "one",
            target: "two",
            label: "Edge from Node1 to Node2"
          }
        }
      ]
    })
  };

  componentDidMount = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight
    });
    this.setUpListeners();
  };

  setUpListeners = () => {
    this.cy.on("click", "node", event => {
      console.log(event.target);
    });
  };

  render() {
    const layout = { name: "cose", directed: true };
    return (
      <div
        style={{
          backgroundColor: BACKGROUND_COLOUR
        }}
      >
        <CytoscapeComponent
          elements={this.state.elements}
          style={{
            width: this.state.w,
            height: this.state.h
          }}
          cy={cy => {
            this.cy = cy;
          }}
          layout={layout}
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
                targetArrowColor: ANS_HIGHLIGHT
              }
            }
          ]}
        />
      </div>
    );
  }
}

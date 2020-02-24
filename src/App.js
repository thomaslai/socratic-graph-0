import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { connect } from "react-redux";
import { editNode } from "./actions";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

const BACKGROUND_COLOUR = "#262626";
const ANS_HIGHLIGHT = "#9adbfe";
const TEXT_COLOUR = "white";
const LAYOUT = { name: "cose", directed: true };

class GraphCanvas extends Component {
  nodeStyle = {};

  state = {
    w: 0,
    h: 0,
    isEditMode: false,
    editedNodeId: null,
    editedText: ""
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
    this.cy.on("tap", event => {
      // target holds a reference to the originator
      // of the event (core or element)
      var evtTarget = event.target;
      if (evtTarget === this.cy) {
        return;
      }
      if (evtTarget.isNode()) {
        // click node
        this.cy.animate({ zoom: 3, center: { eles: event.target } });
        this.setState({
          isEditMode: true,
          editedNodeId: evtTarget._private.data.id,
          editedText: evtTarget._private.data.text
        });
        console.log(evtTarget);
      }
    });
  };

  handleClose = () => {
    if (this.cy === null || this.cy === undefined) {
      console.warn("this.cy null or undefined!");
      return;
    }
    this.cy.animate({ fit: this.props.elements });
    this.props.editNode(this.state.editedNodeId, this.state.editedText);
    this.setState({
      isEditMode: false,
      editedNodeId: null,
      editedText: ""
    });
  };

  onTextChange = event => {
    this.setState({
      editedText: event.target.value
    });
  };

  render() {
    const editDialog = (
      <Dialog
        open={this.state.isEditMode}
        onClose={this.handleClose}
        PaperProps={{
          style: {
            backgroundColor: BACKGROUND_COLOUR
          }
        }}
      >
        <TextField
          autoFocus
          fullWidth
          multiline
          value={this.state.editedText}
          style={{
            backgroundColor: BACKGROUND_COLOUR,
            fontColor: TEXT_COLOUR
          }}
          inputProps={{
            style: {
              color: TEXT_COLOUR
            }
          }}
          onChange={this.onTextChange}
        />
      </Dialog>
    );
    return (
      <div
        style={{
          width: this.state.w,
          height: this.state.h,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(this.props.elements)}
          style={{
            width: this.state.w,
            height: this.state.h,
            position: "absolute",
            backgroundColor: BACKGROUND_COLOUR
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
                curveStyle: "bezier"
              }
            }
          ]}
        />
        {editDialog}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements
});

const mapDispatchToProps = dispatch => ({
  editNode: (id, text) => dispatch(editNode(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphCanvas);

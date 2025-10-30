const React = require("react");

function Puck(props) {
  const { config, data, onPublish, onChange } = props || {};
  return React.createElement(
    "div",
    { className: "puck-editor-mock" },
    React.createElement(
      "div",
      { style: { padding: 20, border: "1px dashed #999" } },
      "Puck editor (mock) — the real @puckeditor/puck package was not installed."
    ),
    React.createElement(
      "pre",
      { style: { whiteSpace: "pre-wrap" } },
      JSON.stringify({ config, data }, null, 2)
    )
  );
}

module.exports = { Puck };
